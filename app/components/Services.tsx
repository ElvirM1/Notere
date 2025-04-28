"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title:
      "Zyra jonë ofron të gjitha shërbimet sipas Ligjeve 06/L-010 dhe 08/L-272 për Noterin, si dhe ligjeve të tjera përkatëse në fuqi.",
    description: "",
    image: "/legalizimi.jpg",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-40 bg-gradient-to-r from-blue-50 to-green-50"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          className="text-4xl font-extrabold text-center text-gray-800 uppercase mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
        >
          Shërbimet
        </motion.h2>

        <div
          className="w-24 h-1.5 rounded-full mx-auto mb-8"
          style={{ backgroundColor: "#4a0638" }}
        ></div>

        <p className="text-center text-gray-600 mb-12 text-lg font-medium">
        Të gjitha shërbimet noteriale në përputhje me legjislacionin në fuqi, të ofruara me korrektësi dhe integritet profesional.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            type: "spring",
            stiffness: 70,
          }}
          whileHover={{ scale: 1.02 }}
          className="mx-auto bg-white rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out overflow-hidden"
        >
          <div className="overflow-hidden rounded-t-3xl">
            <motion.img
              src={services[0].image}
              alt={services[0].title}
              className="w-full h-64 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          <div className="p-8 text-center">
            <h3
              className="text-2xl font-bold mb-4 leading-snug text-gray-800"
              style={{ color: "#4a0638" }}
            >
              {services[0].title}
            </h3>
            {services[0].description && (
              <p className="text-gray-600 text-base">
                {services[0].description}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
