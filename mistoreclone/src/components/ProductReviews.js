import React from 'react'
import ProductReviewsCard from "../components/ProductReviewsCard.js"
import "../styles/ProductReviews.css"

function ProductReviews({productReviews}) {
    return (
        <div className='ProductReviews'>
            {productReviews.map((item , index)=>(
                <ProductReviewsCard index={index} key={item.image} price={item.price} name={item.name} review={item.review} image={item.image}/>


            ))}
            
        </div>
    )
}

export default ProductReviews
