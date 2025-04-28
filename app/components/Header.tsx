"use client";
import React, { useState } from "react";
import { MapPin, Mail, Phone, Menu, X } from "lucide-react";

// Funksioni që do të kthejë faqen në fillim
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="w-full px-6 py-5 flex items-center justify-between">
        <div 
          className="text-3xl font-bold text-[#4a0638] flex-grow cursor-pointer"
          onClick={scrollToTop} // Klikimi mbi emrin kthen faqen ne fillim
        >
          Notere Qendresa Muriqi Mekaj
        </div>

        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-8 font-semibold text-lg text-gray-700">
            <li><a href="#home" className="hover:text-[#4a0638] transition" onClick={scrollToTop}>Ballina</a></li>
            <li><a href="#about" className="hover:text-[#4a0638] transition">Rreth Nesh</a></li>
            <li><a href="#services" className="hover:text-[#4a0638] transition">Shërbimet</a></li>
            <li><a href="#contact" className="hover:text-[#4a0638] transition">Kontakti</a></li>
          </ul>

          <div className="flex space-x-4 text-[#4a0638]">
            <a
              href="https://www.google.com/maps?q=Notere+Qendresa+Muriqi+Mekaj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lokacioni"
              className="hover:text-[#6A0D47] transition"
              title="Lokacioni"
            >
              <MapPin size={26} />
            </a>

            <a
              href="#contact"
              aria-label="Email"
              className="hover:text-[#6A0D47] transition"
              title="Email"
            >
              <Mail size={26} />
            </a>

            <a
              href="tel:+38349246332"
              aria-label="Telefoni"
              className="hover:text-[#6A0D47] transition"
              title="Telefoni"
            >
              <Phone size={26} />
            </a>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-[#4a0638] transition-transform duration-300 ease-in-out"
            aria-label="Meny"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>
      
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md px-6 pb-4 z-40 transition-all duration-300">
          <ul className="flex flex-col space-y-4 font-semibold text-gray-700 text-lg pt-4">
            <li><a href="#home" onClick={() => { setIsOpen(false); scrollToTop(); }}>Ballina</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>Rreth Nesh</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)}>Shërbimet</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Kontakti</a></li>
          </ul>

          <div className="flex space-x-6 pt-4 text-[#4a0638]">
            <a
              href="https://www.google.com/maps?q=Notere+Qendresa+Muriqi+Mekaj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lokacioni"
              className="hover:text-[#6A0D47] transition"
              title="Lokacioni"
            >
              <MapPin size={24} />
            </a>

            <a
              href="#contact"
              onClick={() => { setIsOpen(false); scrollToTop(); }}
              aria-label="Email"
              className="hover:text-[#6A0D47] transition"
              title="Email"
            >
              <Mail size={24} />
            </a>

            <a
              href="tel:+38349246332"
              aria-label="Telefoni"
              className="hover:text-[#6A0D47] transition"
              title="Telefoni"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
