// src/App.jsx
import React from "react";
import AppRoouter from "./Router/AppRoouter";
import { CartProvider } from "./context/CartProvider";


function App() {
  return (
  <CartProvider>
    <AppRoouter/>
    
  </CartProvider>
  );
}

export default App;