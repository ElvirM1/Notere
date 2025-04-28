"use client";
import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/background-ballina.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative bg-white bg-opacity-80 p-6 md:p-10 rounded-lg shadow-xl max-w-sm md:max-w-4xl text-center transform transition-all duration-500 hover:scale-105 z-10">
        <h1 className="text-2xl md:text-5xl font-bold text-[#2C3E50] mb-4 text-shadow-xl animate__animated animate__fadeIn animate__delay-1s">
          Notere Qendresa A. Muriqi Mekaj
        </h1>

        <div className="w-1/4 mx-auto border-t-4 border-[#4a0638] mb-6"></div>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Shërbime profesionale noteriale me përkushtim, saktësi dhe korrektësi. Jemi këtu për t&apos;ju ndihmuar në çdo hap ligjor.
        </p>

        <a
          href="#contact"
          className="inline-block bg-[#4a0638] text-white text-base md:text-lg py-3 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-[#6A0D47] transform hover:scale-105"
        >
          Na Kontaktoni
        </a>
      </div>
    </section>
  );
};

export default Home;
