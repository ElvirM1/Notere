"use client";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Promo from "./components/Promo";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Page = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <AboutUs />
        <Promo />
        <section id="services">
          <Services />
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
