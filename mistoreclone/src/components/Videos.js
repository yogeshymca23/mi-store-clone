import React from 'react'
import VideoCard from "../components/VideoCard.js"
import "../styles/videos.css"

function Videos({videos}) {
    return (
        <div className='videos'>
            {
                videos.map((item,index)=>(
                    <VideoCard key={item.image} index={index} image={item.image} name={item.name}/>

                ))
            }
            
        </div>
    )
}

export default Videos
