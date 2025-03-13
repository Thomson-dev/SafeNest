"use client";
import { motion } from "framer-motion";

const slides = [
  {
    text: "Free In-App Transfers, Zero Withdrawal Charges. No Hidden Charges",
    bgColor: "bg-[#F5F5F5]",
  },
  {
    text: "Saving Is Good. Investing Is Growth, And My Dear, You Need Both",
    bgColor: "bg-[#F5F5F5]",
  },
  {
    text: "Refer And Earn. Enjoy Cash Bonuses When You Refer Your Friends",
    bgColor: "bg-[#F5F5F5]",
  },
];

export default function SlidingCards() {
  return (
    <div className="overflow-hidden relative w-full flex justify-center items-center py-12">
      <motion.div
        className="flex gap-8"
        animate={{
          x: ["0%", "-30%", "0%"], // Smooth left-right sliding
        }}
        transition={{
          duration: 10, // Slow smooth animation
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-[650px] h-[350px] rounded-xl flex items-center justify-between p-10 ${slide.bgColor}`}
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
