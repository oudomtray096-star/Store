import React from "react";
import cc from '../assets/images/jjj.webp'


const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Our Anime Figure Store
        </h1>

        {/* Intro */}
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Welcome to our Anime Figure Store! We provide high-quality anime
          figures for collectors and anime fans. Our goal is to bring your
          favorite characters from popular anime series into your collection.
        </p>

        {/* Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <img
            src={cc}
            alt="anime figure"
            className="rounded-2xl shadow-lg"
          />

          {/* Content */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 mb-4">
              Our mission is to create a place where anime lovers can easily
              find their favorite figures from famous series like Naruto,
              One Piece, Attack on Titan, and many more.
            </p>

            <p className="text-gray-600 mb-4">
              We carefully select our products to ensure high quality,
              detailed designs, and authentic collectibles for fans and
              collectors.
            </p>

            <p className="text-gray-600">
              Whether you are a new anime fan or a long-time collector,
              our store is here to help you build your dream anime collection.
            </p>
          </div>

        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">High Quality</h3>
            <p className="text-gray-600">
              Premium anime figures with amazing detail and craftsmanship.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Popular Characters</h3>
            <p className="text-gray-600">
              Find figures from the most popular anime series loved by fans.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">For Collectors</h3>
            <p className="text-gray-600">
              Perfect for anime collectors who want unique and rare figures.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;