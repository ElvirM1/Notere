"use client";
import React, { useState, useEffect } from "react";
import { Phone, MapPin, Link as LinkIcon } from "lucide-react";
import NextLink from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("URL-ja është kopjuar dhe mund të ndahet!");
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <footer className="bg-gray-100 text-gray-800 py-10 relative">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="flex flex-col items-start gap-4 relative">
          <p className="text-lg font-semibold text-gray-700">Notere Qendresa Muriqi Mekaj</p>
          <p className="text-sm text-gray-500">Copyright © 2025 All rights reserved</p>
          <p className="text-sm text-gray-600 italic">
            "Crafted by <span className="text-blue-600">Elvir Software Engineer & Developer"</span>
          </p>
        </div>

        <div className="flex flex-col md:items-end items-center text-center md:text-right">
          <div className="flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.1, color: "#4a0638" }} whileTap={{ scale: 0.95 }} className="text-gray-700 hover:underline transition-all duration-300">
              <NextLink href="#home">Ballina</NextLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, color: "#4a0638" }} whileTap={{ scale: 0.95 }} className="text-gray-700 hover:underline transition-all duration-300">
              <NextLink href="#about">Rreth Nesh</NextLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, color: "#4a0638" }} whileTap={{ scale: 0.95 }} className="text-gray-700 hover:underline transition-all duration-300">
              <NextLink href="#services">Shërbimet</NextLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, color: "#4a0638" }} whileTap={{ scale: 0.95 }} className="text-gray-700 hover:underline transition-all duration-300">
              <NextLink href="#contact">Kontakti</NextLink>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 md:hidden">
        <motion.button
          onClick={toggleIcons}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-700 text-white p-3 rounded-full shadow-lg mb-4 transition-all duration-300"
        >
          <span className="text-xl">☰</span>
        </motion.button>

        <div className={`flex gap-4 mb-4 max-w-[90vw] overflow-hidden transition-all duration-300 ${showIcons ? "translate-x-0" : "-translate-x-full"}`}>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+38349246332"
            className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <Phone size={20} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.google.com/maps?q=Notere+Qendresa+Muriqi+Mekaj"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <MapPin size={20} />
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            onClick={copyUrlToClipboard}
            className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <LinkIcon size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
