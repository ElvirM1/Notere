"use client";
import React from "react";
import { motion } from "framer-motion";

const Promo = () => {
  return (
    <section
      className="relative w-full bg-gray-100"
      style={{
        backgroundImage: "url('/promo.jpg')",
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex items-center justify-start">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 70 }}
            viewport={{ once: true }}
            className="bg-white rounded-none p-8 shadow-xl max-w-md w-full mt-16 transform translate-y-[5cm]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className="text-4xl text-[#4a0638] text-center mb-2"
            >
              ⚖️
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl font-bold text-[#4a0638] mb-4 text-center"
            >
              Në Duar të Sigurta!
            </motion.h2>

            <div
              className="w-24 h-1.5 rounded-full mx-auto mb-4"
              style={{ backgroundColor: "#4a0638" }}
            ></div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-gray-800 text-lg text-center"
            >
              Puna në zyrën tonë kryhet me përpikëri, duke
              siguruar efikasitet, saktësi dhe zbatim të drejtë të ligjit.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-6 italic text-sm text-gray-600 text-center"
            >
              “E drejta dhe ligji janë themeli i një shoqërie të drejtë.”
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
