'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const heroContent = [
  {
    text: 'Secure Your Savings, Secure Your Future',
    image: '/one.jpg',
  },
  {
    text: 'Access Emergency Funds Anytime',
    image: '/4.png',
  },
  {
    text: 'Withdraw with Ease',
    image: '/3.jpeg',
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
        setFade(true);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between max-w-[90%] min-h-[85vh] mx-auto py-16 px-6 md:px-12">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#FF8C00] rounded-full blur-[120px] opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#2E8B57] rounded-full blur-[120px] opacity-40"></div>

      {/* Left Side: Text */}
      <motion.div 
        className={`transition-opacity duration-1000 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'} max-w-lg`}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          {heroContent[index].text}
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          A trusted savings platform built for SMEs and market women. Save with confidence, withdraw easily, and access emergency funds when you need them.
        </p>
        <button className="mt-8 bg-[#2E8B57] text-white font-bold px-8 py-3 rounded-full text-lg transition-all hover:bg-[#FF8C00] hover:text-white hover:scale-110 shadow-lg">
          Get Started
        </button>
      </motion.div>

      {/* Right Side: Floating Image */}
      <motion.div 
        className={`relative mx-auto transition-opacity duration-1000 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="relative overflow-hidden shadow-lg rounded-lg">
          <Image 
            src={heroContent[index].image} 
            alt="Hero Image" 
            width={500} 
            height={700} 
            className="rounded-lg object-cover w-full h-auto transform hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>
      </motion.div>
    </section>
  );
}
