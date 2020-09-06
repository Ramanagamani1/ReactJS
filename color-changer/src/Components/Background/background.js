import React from 'react'
import "./style.css"

class Background extends React.Component{

    constructor(props){
        super(props);
        this.state={
            selectedColor:'white'
        }
    }
 
    changeBackgroundColor=(event)=>{
        /*event.target.value
        const event={
            target:{
                value:'color selected by user'
            }
        }*/
        //console.log("current color changed",event.target.value);
        this.setState({
            selectedColor:event.target.value
        })
    };

    render=()=>{
        return (
            <div style={{
                backgroundColor:this.state.selectedColor
            }} className="back-container">
               <div className="color-box">
                   <h2>Choose a Color</h2>
                   <input onChange={this.changeBackgroundColor} type="color" />
                   <p>{this.state.selectedColor}</p>
               </div>
            </div>
        )
    }
}
export default Background;