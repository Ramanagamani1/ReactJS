import React from 'react';
import Brick from '../Brick/brick.js';
import './style.css';


class Wall extends React.Component{
    
    constructor(props){

        super(props);
        this.state = {
            bricks:[1,2,3,4]
        };
    }
    addMoreBricks = () => {
        const newBricks = [ ...this.state.bricks ] 
        newBricks.push(newBricks.length+1)
           //this.state.bricks.push(5);
           this.setState({
               bricks:newBricks
           });
    };
    onBrickClick=(number) => {
        window.alert("You clicked Brick "+number);
    }

   render = () =>{
       return (
          <div className="wall-container"> 
             
          
          {
               this.state.bricks.map((num) =>{
               return <Brick onClick={this.onBrickClick} number={num}/>
              })
          }
          <button className="add-btn" onClick={this.addMoreBricks}>Add More</button>
          </div>
       );
   };
}
export default Wall;