import Image from 'next/image';
import React from 'react'

const sponsors = [
    { src: '/flutterwave-logo.b3312ab.png', alt: 'Google' },
    { src: '/vc4a-logo.e6eb9d9.png', alt: 'VC4A' },
    { src: '/usaid-logo.ab1a872.png', alt: 'Flutterwave' },
    { src: '/google-logo.ab02010.png', alt: 'Katapult Africa' },
    { src: '/katapult-logo.9a55c17.png', alt: 'USAID' },
  ];

const SponsorsSection = () => {
  return (
    <section className="py-12 bg-white text-center">
    <h2 className="text-2xl md:text-3xl font-semibold text-pink-600 mb-6">
      Backed By Global Companies
    </h2>
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
      {sponsors.map((sponsor, index) => (
        <div key={index} className="w-28 md:w-36">
          <Image
            src={sponsor.src}
            alt={sponsor.alt}
            width={70}
            height={50}
            className="w-full h-auto grayscale hover:opacity-75 transition-opacity duration-300"
          />
        </div>
      ))}
    </div>
  </section>
  )
}

export default SponsorsSection