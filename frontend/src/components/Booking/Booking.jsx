import React, { useState } from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";


const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate();
  const [paymentLoading, setPaymentLoading] = useState(false);

  const [credentials, setCredentials] = useState({
    userId: "01",
    userEmail: "example@gmail.com",
    fullName: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const serviceFee = 1;
  const totalPrice =
    Number(price) * Number(credentials.guestSize) + Number(serviceFee);
  //send data to the server
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/checkout");
  };
  const handlePayment = async () => {
    try {
      setPaymentLoading(true);

      const amount = totalPrice; 
      const currency = 'INR';

      // Call backend to create Razorpay order
      const response = await fetch('http://localhost:4000/api/v1/payment/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, currency }),
      });
      console.log(response);

      const data = await response.json();

      if (data.success) {
        const options = {
          key:process.env.RAZORPAY_KEY_ID, // Replace with your Razorpay key
          amount: data.amount * 100, // Amount in paise
          currency: currency,
          name: 'Tour and Travels',
          description: 'Tour Booking Payment',
          order_id: data.orderId,
          handler: async function (response) {
            // Payment success handler

            const paymentDetails = {
              razorpayOrderId: data.orderId,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            };

            // Send payment success details to the backend for verification
            const verifyResponse = await fetch('http://localhost:4000/api/v1/payment/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(paymentDetails),
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              // Redirect to thank you page after successful payment
              window.location.href = '/thank-you';
            } else {
              alert('Payment verification failed');
            }
          },
          prefill: {
            name: 'Sarthak Gupta',
            email: 'sgupta782003@gmail.com',
            contact: '9368903154',
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } else {
        alert('Failed to create Razorpay order');
      }
    } catch (error) {
      console.error('Error during payment processing:', error);
      alert('Payment failed, please try again');
    } finally {
      // Re-enable button after payment process
      setPaymentLoading(false);
    }
  };

  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center ">
          <i class="ri-star-s-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      {/* booking form */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input
              type="text"
              placeholder="Full Name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/* booking end */}
      {/*  booking bottom*/}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price}
              <i class="ri-close-line"></i>1 person
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Services charge</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>${totalPrice}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4" onClick={handlePayment} disabled={paymentLoading}>
        {paymentLoading ? 'Processing...' : 'Book Now'}
        Now
        </Button>
      </div>
    </div>
  );
};

export default Booking;
