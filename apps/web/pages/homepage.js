import React from 'react'
import Navbar from "../components/navbar.js"
// import Carousel from '../components/carousel.js'
import Footer from '../components/footer.js'
import ProductList from '../components/productList.js'
const homepage = (props) => {
    return (
        <>
        <Navbar/>

        {/* <!-- Title --> */}
        <div class="pt-28 bg-gray-100">
        <h1 class="text-center text-2xl font-bold text-gray-800">All Products</h1>
        </div>


        <ProductList/>
        <Footer/>
        </>
    )
}

export default homepage
