

import { urlFor } from "../lib/client";

const Banner = ({cover}) => {
    return (
        <div className='banner'>
            <div>
                <p>{cover.details}</p>
                <h1>{cover.product}</h1>
            </div>
            <img src={urlFor(cover.image)} alt={cover.product}/> 
        </div>
    )
}

export default Banner;