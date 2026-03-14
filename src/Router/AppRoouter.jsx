import React from 'react'
import { BrowserRouter as Odom , Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
import Product from '../pages/Product'
import Detail from '../components/Detail'
import Cart from '../pages/Cart'
import { CartProvider } from '../context/CartProvider'

const AppRoouter = () => {
  return (
    <div>
      <Odom>
      <Navbar/>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='product' element={<Product/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cartpro' element={<CartProvider/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='cart' element={<Cart/>} />
        <Route path='/product/:id' element={<Detail/>} />
      </Routes>
      </Odom>
    </div>
  )
}

export default AppRoouter