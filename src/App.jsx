import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";

// import Hero from "./components/home/hero-section/Hero";
// import KicksGrid from "./components/home/kicks-grid/KicksGrid";
// import Navbar from "./components/home/navbar/Navbar";
// import Slogan from "./components/home/slogan/Slogan";
// import Banner from "./components/home/banner/Banner";
// import BlackWhite from "./components/home/b&w-kicks/blackWhite";
// import Reviews from "./components/home/reviews/Reviews";
// import Community from "./components/home/community/Community";
// import Faqs from "./components/home/faqs/Faqs";
// import Footer from "./components/home/footer/Footer";

// // import Mens from "./components/men/Mens";

// import { mensShoes, sportsShoes, blackWhiteShoes } from "../src/KicksData";
// import ShoppingCart from "./components/shoppingcart/shoppingCart";

import { useState } from "react";
import MensPage from "./pages/MensPage";

const App = () => {
  // const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <>
      {/* <Navbar />
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
      <Footer /> */}

      {/* <Mens /> */}

      {/* <ShoppingCart shoppingCart={shoppingCart} /> */}

      {/* Routing */}

      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/mens" element={<MensPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
