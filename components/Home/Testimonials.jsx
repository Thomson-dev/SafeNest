"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "SafeNest has transformed the way I save. With automated contributions, I don’t have to stress about putting money aside—it happens effortlessly. Now, I’m more financially secure than ever.",
    name: "GRACE DUNG",
    role: "MARKET WOMAN",
  },
  {
    text: "When an urgent need arose, SafeNest’s emergency fund feature saved my business. No long waits, no complicated processes—just quick access to the money I needed.",
    name: "MAMA TUNDE",
    role: "TRADER",
  },
  {
    text: "SafeNest helped me build my credit score, making it easier to access loans for business expansion. I never knew my financial habits could open doors to bigger opportunities.",
    name: "CHINWE OBI",
    role: "SMALL BUSINESS OWNER",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000); // Slower transition for a better experience

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const { text, name, role } = testimonials[index];

  return (
    <section className="w-full max-w-7xl mx-auto py-20 px-8 md:px-16 flex flex-col md:flex-row items-center gap-16 rounded-xl">
      {/* Left Side - Title */}
      <div className="w-full md:w-1/2">
        <h4 className="text-4xl font-bold text-[#2E8B57] md:text-5xl leading-tight">
          Their Journey, <br /> Their Success
        </h4>
        <p className="text-lg text-gray-800 italic mt-4">
          Real Businesses. Real Growth. Real Impact.
        </p>
      </div>

      {/* Right Side - Testimonial Display */}
      <div className="w-full md:w-1/2 relative flex flex-col items-center">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="w-full flex justify-center mb-4">
            <Quote className="text-[#FF8C00] w-16 h-16" />
          </div>
          <p className="text-2xl text-gray-900 italic font-medium leading-relaxed max-w-lg">
            "{text}"
          </p>
          <p className="mt-6 font-bold text-[#2E8B57] uppercase text-lg">
            {name}, {role}
          </p>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex gap-6 mt-10">
          <button
            onClick={prevTestimonial}
            className="w-14 h-14 flex items-center justify-center border-2 border-[#2E8B57] text-[#2E8B57] rounded-full hover:bg-[#2E8B57] hover:text-white transition transform hover:scale-105"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-14 h-14 flex items-center justify-center border-2 border-[#2E8B57] text-[#2E8B57] rounded-full hover:bg-[#2E8B57] hover:text-white transition transform hover:scale-105"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}
