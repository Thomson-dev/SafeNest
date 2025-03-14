"use client";
import { motion } from "framer-motion";

const slides = [
  {
    text: "Seamless Savings. Build Your Future with Automated Contributions.",
    bgColor: "bg-[#F5F5F5]",
  },
  {
    text: "Emergency Funds, When You Need Them Most. No Delays, No Hassle.",
    bgColor: "bg-[#F5F5F5]",
  },
  {
    text: "Your Credit Score Matters. Unlock More Financial Opportunities.",
    bgColor: "bg-[#F5F5F5]",
  },
];

export default function SlidingCards() {
  return (
    <div className="overflow-hidden relative w-full flex justify-center items-center py-12">
      <motion.div
        className="flex gap-8"
        animate={{
          x: ["-5%", "5%", "-5%"], // Small shake effect
        }}
        transition={{
          duration: 4, // Smooth and subtle movement
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-[600px] h-[350px] rounded-xl flex items-center justify-between p-10 ${slide.bgColor}`}
          >
            <p className="text-3xl font-bold text-gray-900 w-[60%] leading-snug">
              {slide.text}
            </p>
            <div className="w-[200px] h-[200px] bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Image</span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
