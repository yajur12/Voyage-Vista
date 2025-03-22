import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience2.png";

import Subtitle from "./../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      {/* ===== hero section start ===== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
  

<h4>"Explore the World, One Journey at a Time"</h4>
Whether you're seeking relaxation or adventure, our curated tours are designed to turn your travel dreams into reality. Start planning your next getaway with just a few clicks.

<h4>"Create Memories That Last a Lifetime"</h4>
Travel far, travel wide, and make memories that will stay with you forever. Join us for the journey of a lifetime!

<h4>"The World Awaits. Let's Explore It Together"</h4>
From tranquil beaches to bustling cities, our tours cater to every traveler. Begin your exploration now and craft memories to cherish forever.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box ">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box hero_video-box mt-4">
                <video
                  controls
                  muted
                  autoPlay={"autoplay"}
                  preload="auto"
                  loop
                  src={heroVideo}
                  type="video/mp4"
                  alt=""
                />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* ===== hero section ends ===== */}

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services_subtitle">What we serve</h5>
              <h2 className="services_title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ===== featured tour section start ===== */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured_tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      
      {/* ===== featured tour section end ===== */}

      {/* ===== experience section start ===== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience_content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience <br />
                  we will serve you
                </h2>
                <p>
<h5>"With Our Expertise, Your Journey Is in Good Hands"</h5>
Leveraging years of experience in the travel industry, we're dedicated to providing you with seamless, unforgettable experiences. Let us help you create memories that will last a lifetime.

<h5>"Years of Expertise, Endless Adventures Await"</h5>
With our years of experience, we're here to guide you to the world's most extraordinary destinations. Trust us to craft the perfect journey for you.

<h5>"Your Trusted Travel Partner, Powered by Experience"</h5>
With our extensive experience, we promise to deliver more than just a tour — we deliver a journey that's carefully crafted, thoroughly enjoyable, and perfectly suited to your desires.
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <div className="counter_wrapper d-flex align-items-center gap-5">
                <div className="counter_box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter_box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter_box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience_img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ===== experience section end ===== */}

      {/* ===== gallery section start ===== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery_title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>  
      </section>
      {/* ===== gallery section end ===== */}

      {/* ===== testimonial section start ===== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial_title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ===== testimonial section end ===== */}
      <Newsletter />
    </>
  );
};

export default Home;
