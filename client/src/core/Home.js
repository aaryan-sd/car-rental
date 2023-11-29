import React from "react";
import "./style.css";
import CarImg from "./crs.png";
import Layout from "./Layout";
import Footer from "./Footer";
import Navbar from "../components/Navbar/Navbar";
import LandingPage from "./LandingPage";

function Home() {
  return (
    <>
      <Layout>
        
        <LandingPage/>
      </Layout>
      <Footer/>
    </>
  );
}

export default Home;
