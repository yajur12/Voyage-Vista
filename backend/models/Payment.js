import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  razorpayOrderId: String,
  amount: Number,
  status: {
    type: String,
    enum: ['created', 'paid'],
    default: 'created',
  },
  paymentId: String,
});

const Payment = mongoose.model('Payment', paymentSchema);

// Payment: This creates a model from the schema defined above. The model represents the Payment collection in the MongoDB database.
// 'Payment': The name of the collection in MongoDB where payment data will be stored.
// paymentSchema: The schema we defined earlier, which will be used to structure the documents in the Payment collection.

export default Payment;



// paymentSchema: This defines the structure of the Payment document in MongoDB. It tells Mongoose how to organize the data for each payment record.

// razorpayOrderId: A string that stores the unique order ID created by Razorpay when an order is initiated.
// amount: A number that represents the amount of money involved in the transaction.
// status: A string that indicates the payment status. It can either be 'created' or 'paid'.
// enum: ['created', 'paid']: This ensures that the value of status can only be one of these two values.
// default: 'created': If no status is specified, it will default to 'created', indicating the payment is still in progress.
// paymentId: A string that holds the unique payment ID given by Razorpay once the payment is successful.