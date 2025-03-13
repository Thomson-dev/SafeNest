"use client";
import { motion } from "framer-motion";
import { Briefcase, PiggyBank, Handshake } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-r from-[#EAF7EE] to-[#CDEECD] py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold text-[#2E8B57]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Businesses, Elevating Futures
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-800 mt-4 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          At SafeNest, we provide financial tools that help small businesses **secure, save, and grow**. 
          From tailored insurance solutions to flexible savings and loan options, we're here to help you 
          build a **stronger financial future**.
        </motion.p>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
        {cards.map((card, index) => (
          <motion.div 
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg text-center transition-all hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
          >
            <div className="flex justify-center items-center w-16 h-16 bg-[#2E8B57]/20 rounded-full mx-auto">
              <card.icon className="text-4xl text-[#2E8B57]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-4">{card.title}</h3>
            <p className="text-gray-700 mt-2">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// Card Content
const cards = [
  {
    icon: Briefcase,
    title: "Secure Your Business",
    description: "Protect your assets with tailored insurance and financial security.",
  },
  {
    icon: PiggyBank,
    title: "Save & Grow",
    description: "Smart savings plans designed to help you maximize growth effortlessly.",
  },
  {
    icon: Handshake,
    title: "Easy Loans",
    description: "Quick and flexible loan options with minimal stress, built for business success.",
  },
];
