// models/Booking.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    tourName: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    guestSize: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    bookAt: {
      type: Date,
    },
    paymentStatus: {
      type: String, // e.g., 'Pending', 'Success', 'Failed'
      required: true,
      default: 'Pending',
    },
    paymentId: {
      type: String, // stores Razorpay payment ID
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
