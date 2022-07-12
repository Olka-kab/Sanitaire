import React, { useContext } from 'react'
import { urlFor, client } from '../../lib/client';



import { Context } from '../../components/context/StateContext';



const Details = ({ products, product }) => {
    const {image, price, name, details} = product

    const {increase, decrease, qty, onAdd} = useContext(Context);


  return ( 
    <div className='product_details'>
    
        <img src={urlFor(image)} alt="" />
        <div className='product_details_texte'>
            <h1>{name}</h1>
            <span>{details}</span>
            <div className='qty'>
                <span onClick={decrease}>-</span>
                <span>{qty}</span>
                <span onClick={increase}>+</span>
            </div>
            <span className='price'>RUB {price}</span>
            <div className='details_tap'>
                <button onClick={() => onAdd(product, qty)}>Add to Cart</button>
                <button>Buy</button>
            </div>
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == 'product'] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);
    const paths = products.map((product) => ({
        params: { slug: product.slug.current }
    }));
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({params: {slug}}) => {
    const query = `*[_type == 'product' && slug.current == '${slug}'][0]`
     const productsQuery = '*[_type == "product"]'

     const product = await client.fetch(query);
     const products = await client.fetch(productsQuery);
     
     return {
         props: { products, product }
     }
}

export default Details;