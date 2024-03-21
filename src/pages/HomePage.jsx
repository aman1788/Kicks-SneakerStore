import { useState } from "react";

import Hero from "../components/home/hero-section/Hero";
import KicksGrid from "../components/home/kicks-grid/KicksGrid";
import Navbar from "../components/home/navbar/Navbar";
import Slogan from "../components/home/slogan/Slogan";
import Banner from "../components/home/banner/Banner";
import BlackWhite from "../components/home/b&w-kicks/blackWhite";
import Reviews from "../components/home/reviews/Reviews";
import Community from "../components/home/community/Community";
import Faqs from "../components/home/faqs/Faqs";
import Footer from "../components/home/footer/Footer";

import { mensShoes, sportsShoes, blackWhiteShoes } from "../KicksData";
import ShoppingCart from "../components/shoppingcart/shoppingCart";

const HomePage = () => {
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <>
      <Navbar />
      <Hero />
      <Slogan main="Shoes that Speak Volumes" sub="Every step is a statement" />
      <KicksGrid
        title="Mens Kicks"
        kicks={mensShoes}
        shoppingCart={shoppingCart}
      />
      <KicksGrid
        title="Sports"
        kicks={sportsShoes}
        shoppingCart={shoppingCart}
      />
      <Banner />
      <BlackWhite kicks={blackWhiteShoes} shoppingCart={shoppingCart} />
      <Reviews />
      <Community />
      <Faqs />
      <Footer />
    </>
  );
};

export default HomePage;
