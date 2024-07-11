import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-screen">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="/patch.png"
          alt="Wearable Ultrasound Device"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Revolutionizing Point-of-Care Ultrasound
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          CircuCare is at the forefront of developing the next generation of wearable ultrasound technology, bringing unprecedented convenience and accuracy to medical imaging.
        </p>
        <div className="mt-10">
          <a
            href="#learn-more"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-flamingo hover:bg-steel-blue transition duration-150 ease-in-out"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;