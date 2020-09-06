import React from 'react'
import "./style.css";
import ImageCard from '../ImageCard/image.js'

class Gallery extends React.Component{
   constructor(props)
   {
       super(props);
       this.state={
           images:[],
           currentAddress:'',
       };
   }

   onAddressChange=(event)=>{
        this.setState({
            currentAddress:event.target.value
        });
   }
   
   onAddImage=()=>{
       const newImages=[...this.state.images];
       newImages.push(this.state.currentAddress)
       this.setState({
           images:newImages,
           currentAddress:''
       })
   }

    render=()=>{
        return(
            <div className="root-container">
                <p className="title">-----Image Gallery-----</p>
            <div className="input-box">
                <input onChange={this.onAddressChange} value={this.state.currentAddress} type="text" placeholder="Enter image url"/>
                <button onClick={this.onAddImage}>Add</button>
            </div>
            <div className="list-box">
            {
                this.state.images.map((url)=>{
                      return ( 
                      <ImageCard key={`${url}-${Math.random()*10}`} imageUrl={url} />
                )
            })}
            </div>
            </div>
        );
    };
}
export default Gallery;