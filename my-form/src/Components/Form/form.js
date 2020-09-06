import React from 'react'
import './style.css'

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state={
            userName:'',
            userEmail:'',
            userPhone:'',
            userGender:'',
            userPassword:''
        }
    }

    onNameChange=(event)=>{
        
        this.setState({
            userName:event.target.value
        })
    }
    onEmailChange=(event)=>{
        this.setState({
            userEmail:event.target.value
        })
    }
    onPhoneChange=(event)=>{
        this.setState({
            userPhone:event.target.value
        })
    }

    onGenderChange=(event)=>{
        this.setState({
            userGender:event.target.value
        })
    }
    onPasswordChange=(event)=>{
        this.setState({
            userPassword:event.target.value
        })
    }

    onSubmit=()=>{
        if(this.state.userPhone=='' || this.state.userPhone.length!=10){
              window.alert("Invalid phone no");
              return;
        }
            
        window.alert(`
        Name:${this.state.userName},
        Email:${this.state.userEmail},
        Phone:${this.state.userPhone},
        Gender:${this.state.userGender},
        Password:${this.state.userPassword}
        `)
        this.clearFormFields();
    }
    clearFormFields=()=>{
        this.setState({
            userName:'',
            userEmail:'',
            userPhone:'',
            userGender:'',
            userPassword:''
        })
    }
    render=()=>{
        return(
           
         <div className="form-container">
         <p className="title">---User Form---</p>
         <input className="input-style" onChange={this.onNameChange} type="text" placeholder="Enter username" value={this.state.userName} required/><br/>
         <input className="input-style" type="email" onChange={this.onEmailChange} placeholder="Enter email" value={this.state.userEmail} /><br/>
         <input className="input-style" type="text" onChange={this.onPhoneChange} placeholder="Enter phoneno" value={this.state.userPhone} /><br/>
         <select onChange={this.onGenderChange} className="input-style" value={this.state.userGender} >
             <option>Choose Gender</option>
             <option>Male</option>
             <option>Female</option>
         </select><br/>
         <input className="input-style" type="password" value={this.state.userPassword} onChange={this.onPasswordChange} placeholder="Enter password"/><br/>
         <button className="submit-btn" onClick={this.onSubmit}>Submit</button>
         </div>
        
        )
    }
}
export default Form;