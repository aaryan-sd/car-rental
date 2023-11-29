import React from 'react'
import "./LandingPage.css";
import Img1 from "./bg1.jpg";
import Navbar from '../components/Navbar/Navbar';
import Car from '../components/car/Car';
import Vehicles from '../components/car/Vehicles';
import { Link } from 'react-router-dom';

const LandingPage = () => {


  return (
    <>
    <div className="landing-page">
      <div className="left-section">
        
      </div>
      <div className="right-section">

      <div className="text-content">
      <Link to="/cars">Book your Car now</Link>
        </div>
      </div>

    </div>

    <div className="highlight-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide Selection of Quality Cars</li>
          <li>Transparent Pricing</li>
          <li>24/7 Customer Support</li>
          <li>Easy Online Reservation</li>
        </ul>
      </div>
    </>
  )
}

export default LandingPage