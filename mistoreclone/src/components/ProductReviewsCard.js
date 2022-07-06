import React from 'react'
import "../styles/ProductReviewsCard.css"

function ProductReviewsCard({image , index , review , name , price}) {
    return (
        <div className='ProductReviewsCard'>
            <img src={image} alt={`${index} product`} />
            <h5>{review}</h5>
            <span>{name}</span>
            <b>{price}</b>

            
        </div>
    )
}

export default ProductReviewsCard
