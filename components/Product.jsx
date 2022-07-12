
import Link from 'next/link'
import { urlFor } from "../lib/client";

const Product = ({product}) => {
    return (
        <div className='inner_product'>
            <div className='inner_product_image'>
                <img src={urlFor(product.image) } />
            </div>
            <div className='inner_product_text'>
                <h1>{product.name}</h1>
                <span>RUB {product.price}</span>
                <Link href={`/product/${product.slug.current}`}>See details</Link>
            </div>
        </div>
    )
}

export default Product;