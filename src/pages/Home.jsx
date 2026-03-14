import React, { useEffect, useState } from "react";
import {  slides, special_figure ,categories } from "../Data/data";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartProvider";
import Footer from "../components/Footer";

const Home = () => {
  const [current, setCurrent] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { addToCart } =  useCart();// <-- use addToCart

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  

  return (
    <div>
      {/* Slides */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
        {slides.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                {item.title}
              </h1>
              <p className="mt-2 sm:mt-4 text-sm sm:text-lg md:text-xl max-w-xl">
                {item.description}
              </p>
              <Link to="/product">
                <button className="mt-4 sm:mt-6 px-6 py-2 sm:py-3 bg-gray-500 text-black font-semibold rounded-lg
                hover:bg-blue-600 hover:text-white hover:scale-105
                shadow-md hover:shadow-xl
                transition duration-300 ease-in-out">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

            {/* Categories Section */}
      <div className="flex justify-center">
        <div className="my-8 px-4">
        <div className="flex justify-center "><h2 className="text-2xl font-bold mb-4 text-gray-800">Categories</h2></div>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex-shrink-0 w-40 h-40 rounded-xl shadow-lg cursor-pointer transform transition hover:scale-105 border-2 ${
                selectedCategory === category.name ? "border-blue-600" : "border-transparent"
              }`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-3/4 object-cover rounded-t-xl"
              />
              <div className="h-1/4 flex items-center justify-center bg-gray-100 rounded-b-xl font-semibold text-gray-800">
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* Section Title */}
      <div className="flex justify-center p-2">
        <h1 className="font-bold text-2xl ">Most Best Seller</h1>
      </div>

      {/* Products Grid */}
      <section className="w-full shadow-lg flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {special_figure.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-md lg:p-4 hover:shadow-lg"
            >
              <img className="w-full h-40" src={p.image} alt={p.name} />
              <h3>name: {p.name}</h3>
              <p>Price: {p.price}</p>
              <div className="mt-4 flex gap-2">
                {/* Add to Cart button */}
                <button
                  onClick={() => addToCart(p, 1)}
                  className="w-1/2 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                  Add
                </button>

                {/* View button */}
                <Link
                  className="w-1/2 bg-blue-600 text-white flex justify-center items-center py-2 rounded-lg hover:bg-blue-700 transition"
                  to={`/product/${p.id}`}
                >
                  <button>View</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;