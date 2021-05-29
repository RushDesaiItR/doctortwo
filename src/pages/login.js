import React, { Component } from 'react';
import axios from "axios"
import Loader from '../components/Loader';
import Alert from '../components/Alert';
import BtnLoadingGif from "../assets/Eclipse-1s-38px.gif"
import { useHistory } from "react-router-dom";
export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
           email:null,
           password:null,
           
        }
      
    }
 
    onSubmit = async() => {
        this.setState({ btnLoader: true })
        const {
            email,
            password,
           
        } = this.state


        if (email == null || password == null) {
            this.setState({ description: "Some Thing Went Wrong", message: "All Field Required", type: "error" })
            this.setState({ alert: true })
           

        } 

        else 
            {
        
               
                await axios({
                    method: 'get',
                    url: 'http://localhost:3800/patients-login',
                    data:{
                       email,
                       password
                    }
                  })
                  .then(data=>{
                      console.log(data)
                      
                  })
                  .then(error=>{
                    console.log(error)
                  })
                  if(this.state.resData.error){
                    this.setState({ description: "Some Thing Went Wrong", message: "All Field Required", type: "error" })
                    this.setState({ alert: true })

                  }
                  else{

                    this.setState({ description: "Registred", message: "Registred Successfull", type: "success" })
                    this.setState({ alert: true })
                    localStorage.setItem("projectToken","tokenprj")
                   
                  }
           
        }
        setTimeout(() => {
            this.setState({ btnLoader: false })
        }, 1000)
    }
    render() {


        return (
            <>
                
                        <>
                        <center>
                           <div className="login-form">
                                <input type="text"
                                 onChange={(e)=>this.setState({email:e.target.value})}/>
                                <input type="password"
                                 onChange={(e)=>this.setState({password:e.target.value})}
                                />
                                <button class="btn-register" 
                                onClick={()=>this.onSubmit()} >LOG IN</button>
                            </div>
                        </center>
                        </>
                
            </>
        );
    }
}
