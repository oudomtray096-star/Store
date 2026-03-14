import React from "react";
import { fiigure } from "../Data/data";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartProvider";
import Footer from "../components/Footer";


// import { useCart } from "../context/CartContext";

const Product = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAdd = (product) => {
    addToCart(product, 1);
      console.log("Product sent to cart:", product);
    navigate("/cart"); // go to cart after adding
  };

  return (
    <div className="w-full ">
      <div className= "w-full shadow-lg flex justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 p-6">
        {fiigure.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg"
          >
            <img className="w-full h-40 object-cover" src={p.image} alt={p.name} />
            <h3 className="font-semibold mt-2">{p.name}</h3>
            <p className="text-gray-600">Price: ${p.price}</p>

            <div className="mt-4 flex gap-2">
              
              {/* ADD BUTTON */}
              <button
                onClick={() => handleAdd(p)}
                className="w-1/2 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                Add
              </button>

              {/* VIEW BUTTON */}
              <Link
                className="w-1/2 bg-blue-600 text-white flex justify-center items-center py-2 rounded-lg hover:bg-blue-700 transition"
                to={`/product/${p.id}`}
              >
                View
              </Link>

            </div>
          </div>
        ))}
      </div>
     </div>
     <Footer/>
    </div>
  );
};

export default Product;