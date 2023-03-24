import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import { specialOfferProductsActions } from "../store/specialOfferProducts-slice";
import { newestProductsActions } from "../store/newestProduct-slice";


import React from 'react'
import dynamic from "next/dynamic";
import { ApolloQueryResult, gql } from "@apollo/client";
import apclient from "../apollo-client";


import { client } from "../lib/client";

import Carousel from "../components/carousel";
import Benefits from "../components/Benefits";
const Offers = dynamic(() => import("../components/Offers/Offers"));
const Category = dynamic(() => import("../components/category/Category"));
const Newest = dynamic(() => import("../components/newest/Newest"));
const Banners = dynamic(() => import("../components/banners"), { ssr: false });
const Brands = dynamic(() => import("../components/brands"));



const Home = (props: {products:any}) => {
  return (
    <div>
       <Carousel />
       <Benefits />
       {/* <Offers /> */}
       <Category />
       {/* <Newest /> */}
       <Banners />
       <Brands />
    </div>
  )
}


export default Home;

// export default function Home( data: any ) {
//   console.log(data.data.countries);
//   return(
    
//     <div>
//         homepage
//     </div>
//   )

// }

//Fetching from DemoData
// export const getStaticProps = async () => {
//   const productQuery = `*[_type=='product']`;
//   const products = await client.fetch(productQuery);

//   return {
//     props: {
//       products,
//     },
//   };
// };


// export async function getStaticProps() {
//   const  {data}  = await apclient.query({
//     query: gql`
//       query Countries {
//         countries {
//           code
//           name
//           emoji
//         }
//       }
//     `,
//   });

//   return {
//     props: {
//       // products: data.countries.slice(0, 4),
//       data
//     },
//  };
// }

// //Fetching from API
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://.../products')
//   const products = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       products,
//     },
//   }
// }