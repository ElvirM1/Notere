import React, { useRef } from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formElements = e.target as HTMLFormElement;
    const name = (formElements.querySelector('[name="name"]') as HTMLInputElement).value;
    const phone = (formElements.querySelector('[name="phone"]') as HTMLInputElement).value;
    const email = (formElements.querySelector('[name="email"]') as HTMLInputElement).value;
    const message = (formElements.querySelector('[name="message"]') as HTMLTextAreaElement).value;

    if (!name || !phone || !email || !message) {
      toast.error("Ju lutem plotësoni të gjitha fushat!");
      return;
    }

    emailjs
      .sendForm(
        "service_l0ik56m",
        "template_eb4aadb",
        formRef.current,
        "owRsgrM1UvAQGnyjw"
      )
      .then(
        () => {
          toast.success("Mesazhi u dërgua me sukses!");
          formRef.current?.reset();
        },
        (error: unknown) => { 
          if (error instanceof Error) {
            toast.error("Ndodhi një gabim gjatë dërgimit: " + error.message);
          } else {
            toast.error("Ndodhi një gabim gjatë dërgimit!");
          }
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-white via-white to-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-[#4a0638] text-center mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Kontakti
        </motion.h2>

        <motion.div
          className="w-24 h-1.5 bg-[#4a0638] rounded-full mx-auto mb-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full md:w-1/2 px-8 py-10 flex flex-col justify-center items-center bg-white">
            <motion.div
              className="text-xl font-semibold text-[#4a0638] mb-4 text-center"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Të Dhënat e Zyrës
            </motion.div>

            <div className="text-lg text-gray-700 mb-2 text-center">
              <span className="font-bold">Adresa:</span> Sheshi ''Haxhi Zeka'' Rr.,'' Toni Bleri '' 25, Pejë 30000
            </div>
            <div className="text-lg text-gray-700 mb-2 text-center">
              <span className="font-bold">Telefon:</span> +383 49 246 332
            </div>
            <div className="text-lg text-gray-700 mb-2 text-center">
              <span className="font-bold">Email:</span> qendresamekaj@gmail.com
            </div>
            <div className="text-lg text-gray-700 mb-4 text-center">
              <span className="font-bold">Orari i Punes:</span>{" "}
              <span className="whitespace-nowrap">Hëne - Premte: 08:00 - 16:00</span>
            </div>

            <motion.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://www.google.com/maps?q=Notere+Qendresa+Muriqi+Mekaj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#4a0638] hover:text-[#5e0b4c] transition"
              >
                <MapPin size={24} />
                <span>Shiko Lokacionin në Google Maps</span>
              </a>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 px-8 py-10 bg-white">
            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Emri juaj"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4a0638] text-gray-800"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Numri juaj"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4a0638] text-gray-800"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Emaili juaj"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4a0638] text-gray-800"
                required
              />

              <textarea
                name="message"
                placeholder="Mesazhi juaj"
                rows={5}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4a0638] text-gray-800"
                required
              ></textarea>

              <input
                type="hidden"
                name="timestamp"
                value={new Date().toLocaleString()}
              />

              <button
                type="submit"
                className="w-full bg-[#4a0638] hover:bg-[#5e0b4c] text-white py-3 rounded-md font-semibold transition"
              >
                Dërgo Mesazhin
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
