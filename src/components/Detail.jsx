// import { useCart } from "../context/CartContext";
import { useCart } from "../context/CartProvider";
import { fiigure, special_figure } from "../Data/data";
import { Link, useParams, useNavigate } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product =
    fiigure.find((item) => item.id === parseInt(id)) ||
    special_figure.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Product not found!</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, 1);
    navigate("/cart"); // Go to cart page after adding
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-2xl font-semibold text-blue-600 mb-6">
            ${product.price}
          </p>

          <p className="text-gray-700 mb-6">
            Product description goes here.
          </p>

          <button
            onClick={handleAddToCart}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>

          <p className="mt-6 text-gray-500">
            <Link to="/product" className="underline hover:text-blue-600">
              ← Back to Products
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detail;