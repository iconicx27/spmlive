import Navbar from '../components/navbar.js'
import React from 'react'
// import Carousel from '../components/carousel.js'
import Footer from '../components/footer.js'
import ProductList from '../components/productList.js'
import Carousel from '../components/Carousel.js'

import Services from '../components/Services.js'
export default function Home() {
  return (
    <>
        <Navbar/>
        
        <Carousel/>

        <div className="pt-20 pb-10 bg-gray-100">
                <h1 className="text-center text-2xl font-bold text-gray-800">Services</h1>
        </div>
        <Services/>
        {/* <!-- Title --> */}
        <div className="pt-28 bg-gray-100">
        <h1 className="text-center text-2xl font-bold text-gray-800">Best Seller Product</h1>
        </div>

        <ProductList/>
        <Footer/>
        </>
  )
}
