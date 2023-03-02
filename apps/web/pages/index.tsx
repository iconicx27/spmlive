import Navbar from '../components/navbar.js'
import React from 'react'
// import Carousel from '../components/carousel.js'
import Footer from '../components/footer.js'
import ProductList from '../components/productList.js'
export default function Home() {
  return (
    <>
        <Navbar/>

        {/* <!-- Title --> */}
        <div className="pt-28 bg-gray-100">
        <h1 className="text-center text-2xl font-bold text-gray-800">All Products</h1>
        </div>


        <ProductList/>
        <Footer/>
        </>
  )
}
