import React from "react";
import { useCart } from "../context/CartProvider";
import Footer from "../components/Footer";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart ,  clearCart} = useCart();

  const increaseQty = (item) => {
    addToCart(item, 1);
  };

  const decreaseQty = (item) => {
    if (item.quantity > 1) {
      addToCart(item, -1);
    }
  };

 const totalPrice = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
// fetch Api telegram when user buy product 
  // ✅ Send cart data to Telegram on checkout
  // ✅ Send data to Telegram when user clicks checkout
  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }

    const BOT_TOKEN = "8493172164:AAEnQZXbJPGLjuEBvjzu4nlcmMeu1FdlZVQ"; // ⚠ Visible in React
    const CHAT_ID = "6916806419";

    // Format message
    let message = "🛒 *New Order Received*\n\n";
    cartItems.forEach((item) => {
      message += `${item.name} x${item.quantity} - $${item.price}\n`;
    });
    message += `\n💰 Total: $${totalPrice.toFixed(2)}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "Markdown",
          }),
        }
      );

      const data = await response.json();
      console.log("Telegram response:", data);
      if (data.ok) {
        alert("Order sent to Telegram!");
         clearCart();//clear card after successfull
        
      } else {
        alert("Failed to send order.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending order to Telegram.");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          🛒 Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Your cart is empty</p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-6"
                >
                  <div className="flex items-center gap-6">

                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-xl shadow"
                    />

                    {/* Info */}
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h2>
                      <p className="text-gray-500">${item.price}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => decreaseQty(item)}
                          className="w-8 h-8 bg-gray-200 rounded-lg hover:bg-gray-300"
                        >
                          -
                        </button>

                        <span className="font-semibold text-gray-800">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQty(item)}
                          className="w-8 h-8 bg-gray-200 rounded-lg hover:bg-gray-300"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Price + Remove */}
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    {/* <p>{item.quantity}</p> */}

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm mt-2 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="mt-10 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-800">
                Total: ${totalPrice.toFixed(2)}
              </h3>

              <button
                onClick={handleCheckout}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow transition"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
     
    </div>
  );
};

export default Cart;