// In summary, the two APIs (/create-order and /verify-payment) use Razorpay's API to create an order and validate payment,
//  while also utilizing MongoDB (via Mongoose) to store and update the order data. Additionally, Node.js' crypto module is used to 
// securely verify the payment signature.





import express from "express";
import crypto from "crypto"; //  A built-in module in Node.js to handle encryption and hashing, which we'll use to verify payment signatures.
import razorpayInstance from "../utils/razorpay.js"; // This is a custom module that exports an instance of the Razorpay API, used for creating and managing payments.
import Payment from "../models/Payment.js"; // A MongoDB model used to store payment-related data in the database (e.g., the order's details)
const router = express.Router(); // This creates a new router object that will handle the routing for the payment-related API endpoints

router.post('/create-order', async (req, res) => {
  try {
    const { amount, currency } = req.body;

    if (!amount || !currency) {
      return res.status(400).json({
        success: false,
        message: 'Amount and currency are required',
      });
    }

    const options = {
      amount: amount * 100, // Convert amount to paise
      currency: currency || 'INR',  // Default to INR if currency is not provided
      receipt: `order_rcptid_${Date.now()}`, // A unique ID generated using the current timestamp (this helps in tracking the receipt)
    };

    // Create Razorpay order
    const order = await razorpayInstance.orders.create(options);

    // Store order data in the database
    const orderData = new Payment({
      razorpayOrderId: order.id,
      amount,
      status: 'created',
    });

    await orderData.save();

    // Respond with the order details
    res.json({


      success: true,
      orderId: order.id,
      amount: amount,
      currency: currency || 'INR',
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    res.status(500).json({ success: false, message: 'Error creating Razorpay order' });
  }
});

router.post('/verify-payment', async (req, res) => {
  const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = req.body;

  const generatedSignature = crypto

  // Razorpay generates a signature based on the razorpayOrderId and razorpayPaymentId to verify the authenticity of the payment. 
  // This code generates the same signature on the server side using the secret key (RAZORPAY_KEY_SECRET) from environment variables. 
  // It uses the HMAC (Hash-based Message Authentication Code) algorithm with SHA256 encryption.
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET) // HMAC -> Hash-based Message Authentication Code
    .update(`${razorpayOrderId}|${razorpayPaymentId}`)
    .digest('hex');

  if (generatedSignature === razorpaySignature) { // he generated signature is compared with the signature received in the request (razorpaySignature). If they match, it means the payment is valid
    // Update order status in the database
    const order = await Payment.findOne({ razorpayOrderId });

    if (order) {
      order.status = 'paid';
      order.paymentId = razorpayPaymentId;
      await order.save();
      res.json({ success: true });
    } else {
      res.status(400).json({ success: false, message: 'Order not found' });
    }
  } else {
    res.status(400).json({ success: false, message: 'Invalid payment signature' });
  }
});

export default router;


// Create Order (/create-order): It creates an order with Razorpay and stores the order details in the database.
// Verify Payment (/verify-payment): It verifies the payment using Razorpay’s signature and updates the payment status in the database if the payment is valid.