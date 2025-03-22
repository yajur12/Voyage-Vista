import Razorpay from "razorpay";
import dotenv from "dotenv";

dotenv.config();

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

//key_id: This is your unique Razorpay API key (public key) which is used to identify your account when making requests to the Razorpay API.
// key_secret: This is your Razorpay API secret key, which is used to securely authenticate your requests. It should always be kept private.



export default razorpayInstance;
