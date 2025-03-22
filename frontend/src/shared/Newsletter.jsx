import React from "react";
import "./newsletter.css";

import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter_content">
              <h2>Subscribe now to get useful traveling information.</h2>
              <div className="newsletter_input">
                <input type="email" placeholder="Enter your email" />
                <button className="btn newsletter_btn">Subscribe</button>
              </div>
              <p>
              Subscribe for Exclusive Travel Tips
Get insider knowledge, the best travel deals, and exciting destination ideas delivered straight to your inbox. Don’t miss out on making your next adventure even better!

Be the First to Know - Subscribe Today!
Get expert travel advice, exclusive offers, and the latest news from the world of travel. Join our community and start planning your next journey with ease!

Travel Smarter, Not Harder - Subscribe Now!
Receive personalized tips, special promotions, and the latest updates to help you make the most of your travels. Sign up now and never miss a moment of adventure!

              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter_img">
                <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
