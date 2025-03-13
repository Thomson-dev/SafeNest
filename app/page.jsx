import CTA from "@/components/Home/CTA";
import HeroSection from "@/components/Home/HeroSection";
import Testimonials from "@/components/Home/Testimonials";
import Footer from "@/components/Home/Footer";
import AboutSection from "@/components/Home/AboutSection";
import SponsorsSection from "@/components/Home/SponsorsSection";
import WalkThrough from "@/components/Home/WalkThrough";
import React from "react";
import SlidingSection from "@/components/Home/SlidingSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      {/* <SponsorsSection /> */}
      {/* <CTA/> */}
      <SlidingSection />
      <Testimonials />
      <WalkThrough />
      <Footer />
    </div>
  );
};

export default Home;
