// Navbar.jsx
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { TbGardenCartFilled } from "react-icons/tb";
import logo from "../assets/images/figure.png";
import { useCart } from "../context/CartProvider";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="w-full  sticky top-0 z-50 bg-gray-100 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">
        <Link className="flex items-center gap-2" to="/">
          <img className="w-14 h-14" src={logo} alt="Anime Store Logo" />
          <h1 className="font-bold text-xl md:text-2xl">Anime Store</h1>
        </Link>

        <ul className="hidden md:flex gap-10 text-lg font-poppins">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="hidden md:flex gap-4 items-center">
          <Link to="/cart" className="relative text-2xl border w-12 h-12 flex justify-center items-center rounded-2xl hover:bg-gray-300 transition">
            <TbGardenCartFilled />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          
          <Link to='/login'>
            <button className='px-4 py-2 rounded-2xl bg-gray-500 text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-indigo-500'>
              Login
            </button>
          </Link>
        </div>
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

       
          {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-amber-50 shadow-lg px-6 py-4 space-y-4'>
          <ul className='flex flex-col gap-4 text-lg'>
            <li><Link to='/' onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to='/about' onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to='/product' onClick={() => setIsOpen(false)}>Product</Link></li>
            <li><Link to='/contact' onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>

          <div className='flex gap-4 items-center pt-4 border-t'>
            <Link 
              className='relative text-2xl border w-12 h-12 flex justify-center items-center rounded-2xl'
              to='/cart'
              onClick={() => setIsOpen(false)}
            >
              <TbGardenCartFilled />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>

            <Link to='/login' onClick={() => setIsOpen(false)}>
              <button className='px-4 py-2 rounded-2xl bg-gray-500 text-white shadow-lg'>
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;