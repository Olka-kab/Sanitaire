import React from 'react'

import { client } from '../lib/client'




import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Product from '../components/Product'




const Home = ({products, cover}) => {

  return (
    <div>
      <Banner cover={cover[0]}/>
      <div className='heading'>
        <h2>Best Selling Products</h2>
        <p>Boots your life here and right now</p>
      </div>
      <div className='products'>
        {products?.map((product) =>
          <Product key={product._id} product={product}/>
        )}
      </div>
    </div>
  )
}

export async function getStaticProps () {

  const products = await client.fetch('*[_type == "product"]');
  const cover = await client.fetch('*[_type == "cover"]');

  return {
    props: {products, cover}
  }
}


export default Home;