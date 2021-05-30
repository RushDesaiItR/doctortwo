import React, { Component } from 'react';
import axios from "axios"
import Loader from '../components/Loader';
import Alert from '../components/Alert';
import BtnLoadingGif from "../assets/Eclipse-1s-38px.gif"
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
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
                   const res = await axios({
                    method: 'post',
                    url: 'http://localhost:3800/doctors-login',
                    data:{
                       email,
                       password
                    }
                  })

                  if (res.data.message =="success") {
                      
                    this.setState({ description: "Log In", message: "Log In Successfull", type: "success" })
                    this.setState({ alert: true })
                    localStorage.setItem("DoctorInfo",res.data.data._id)
                    console.log(localStorage.getItem("DoctorInfo"))
                    localStorage.setItem("projectToken","tokenprj")
                    this.props.history.push('/home');
                }
                  else{
                    this.setState({ description: "Some Thing Went Wrong", message: "Password Or Email Invalid", type: "error" })
                    this.setState({ alert: true })
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
                        <br/><br/>
                        {this.state.alert &&
                                <Alert
                                    type={this.state.type}
                                    description={this.state.description}
                                    message={this.state.message}
                                    setAlertFun={() => this.setState({ alert: false })}
                                />
                            }
                        <center>
                           <div className="login-form">
                               <img src="https://image.freepik.com/free-vector/medical-video-call-consultation-illustration_88138-415.jpg"/>
                              <div>
                              <center><h1>Doctors Log In</h1></center>
                                <input type="text"
                                placeholder="Email"
                                 onChange={(e)=>this.setState({email:e.target.value})}/>
                                <input type="password"
                                 placeholder="Passowrd"
                                 onChange={(e)=>this.setState({password:e.target.value})}
                                />
                                <button class="btn-register" 
                                onClick={()=>this.onSubmit()} >LOG IN</button>
                                <Link to="/register">Resister</Link>
                              </div>
                            </div>
                        </center>
                        </>
                
            </>
        );
    }
}
