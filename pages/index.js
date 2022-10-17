import React from "react";
import { HeroBanner, Footer, FooterBanner } from "../components";
const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many varient</p>
      </div>
      <div className="products-container">{["product1", "product2", "product3", "product4"].map((product) => product)}</div>
      <FooterBanner />
      <Footer />
    </>
  );
};

export default Home;
