'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const heroContent = [
  {
    text: 'Empowering Market Women with Financial Security',
    image: '/1.jpg',
  },
  {
    text: 'Seamless Savings and Micro-Insurance at Your Fingertips',
    image: '/2.jpg',
  },
  {
    text: 'Your Financial Growth Starts Here',
    image: '/2.jpg',
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
        setFade(true); // Fade in the new content
      }, 1000); // Fade-out time
    }, 30000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid md:grid-cols-2 grid-cols-1 justify-between max-w-[90%] mx-auto gap-10 py-12">
      {/* Left Side: Text */}
      <div className={`text-center md:text-left transition-opacity duration-1000 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {heroContent[index].text}
        </h1>
        <p className="text-lg text-gray-600">A smarter way to save, invest, and grow your wealth.</p>
        <button className="mt-10 bg-[#2E8B57] text-white px-8 py-3 rounded-lg text-xl text-center  transition-all">
          Create A Free Account
        </button>
      </div>

      {/* Right Side: Image */}
      <div className={`mt-8 md:mt-0 transition-opacity duration-1000 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
        <Image 
          src={heroContent[index].image} 
          alt="Hero Image" 
          width={500} 
          height={700} 
          className="rounded-lg object-contain"
        />
      </div>
    </section>
  );
}