import React from 'react'
import './style.css'

const ImageCard =(props)=>{
    return(
        <img alt="gallery pic" className="image-card" src={props.imageUrl}/>
    )
};
export default ImageCard;