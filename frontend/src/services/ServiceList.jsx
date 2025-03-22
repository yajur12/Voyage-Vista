import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from "reactstrap";


import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Planning your trip just got easier with our real-time weather forecasting tool. From temperature trends to expected rainfall, you'll have the information you need to plan your excursions with confidence. No more surprises—just perfect travel experiences, rain or shine!",
   },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "At the heart of every great trip is an exceptional tour guide, and we take pride in offering the best. Our handpicked team of knowledgeable, passionate, and friendly guides are dedicated to providing you with personalized experiences that go beyond the typical sightseeing tour. Whether you're exploring ancient landmarks, or discovering secret spots off the beaten path, our expert tour guides are here to make your adventure extraordinary!",
   },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Your travel experience should be as unique as you are. That's why we offer personalized itineraries designed to fit your interests, preferences. Whether you're seeking a relaxing beach getaway, an adventurous trek through nature,our team works closely with you to craft the ideal journey. From selecting destinations to choosing the best accommodations, we ensure every detail is tailored to your needs. With our flexible customization options, you can create a travel experience that's truly yours—one that leaves you with unforgettable memories and a story to tell",
   },

];

const ServiceList = () => {
  return (
    <>
    {servicesData.map((item, index) => (
        <Col lg='3'md='6' sm='12' className='mb-4' key={index}>
            <ServiceCard item={item}/>
        </Col>
    ))}
    </>
    );
};

export default ServiceList