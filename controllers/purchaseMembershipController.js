const Razorpay = require("razorpay");
const Order = require("../models/ordersModel");
const userController = require("./userController");

exports.purchasePremium = async (req, res) => {
  try {
    var rzp = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    const amount = 1000;

    // Use promises instead of callbacks for Razorpay API calls
    const order = await rzp.orders.create({ amount, currency: "INR" });

    await req.user.createOrder({ orderid: order.id, status: "PENDING" });

    return res.status(201).json({ order, key_id: rzp.key_id });
  } catch (err) {
    console.error(err);
    res.status(403).json({ message: "Something went wrong", error: err.message });
  }
};

exports.updateTransactionStatus = async (req, res) => {
  try {
    const userId = req.user.id;
    const { payment_id, order_id } = req.body;

    const order = await Order.findOne({ where: { orderid: order_id } });

    // Use Promise.all to wait for both updates to complete
    await Promise.all([
      order.update({ paymentid: payment_id, status: "SUCCESSFUL" }),
      req.user.update({ isPremiumUser: true }),
    ]);

    return res.status(202).json({
      success: true,
      message: "Transaction Successful",
      token: userController.generateAccessToken(userId, undefined, true),
    });
  } catch (err) {
    console.error(err);
    res.status(403).json({ error: err.message, message: "Something went wrong" });
  }
};
