"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-8 md:space-y-0">
          <div className="md:w-1/2 w-full shadow-xl rounded-lg overflow-hidden transform transition duration-500 ease-in-out hover:scale-105">
            <img
              src="/rreth-nesh.jpg"
              alt="Zyra Noteriale"
              className="w-full h-full object-cover rounded-lg hover:brightness-75 transition duration-500 ease-in-out"
            />
          </div>

          <div className="md:w-1/2 w-full text-center space-y-6">
            <motion.h2
              className="text-4xl font-extrabold text-gray-800 uppercase mb-4 hover:text-[#4a0638]"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Rreth Nesh
            </motion.h2>

            <div
              className="w-24 h-1.5 rounded-full mx-auto mb-6"
              style={{ backgroundColor: "#4a0638" }}
            ></div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:scale-105">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Në Zyren ton Noteriale, jemi të përkushtuar në ofrimin e shërbimeve noteriale profesionale, të sigurta dhe të besueshme. Qoftë për legalizimin e dokumenteve, deklaratat noteriale apo çfarëdo nevoje tjetër ligjore, ekipi ynë i përkushtuar kujdeset që çdo dokument të trajtohet me saktësi të plotë dhe diskrecion maksimal.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Me përvojë dhe etikë profesionale, jemi këtu për t'ju ndihmuar në çdo hap, duke ju garantuar shërbim cilësor dhe korrektësi të lartë.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
