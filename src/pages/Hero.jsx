import React from 'react'
import Products from '../component/Products'
import Category from '../component/Category'
import NavBar from '../component/NavBar'
export default function Hero() {
  return (
    <div>
        <NavBar/>
        <Category/>
        <Products/>
    </div>
  )
}
