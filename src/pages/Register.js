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
            stateData: [],
            loader: true,
            firstName: null,
            lastName: null,
            age: null,
            address: null,
            city: null,
            State: null,
            email: null,
            contact: null,
            password: null,
            confPassword: null,
            description: null,
            message: null,
            alert: false,
            type: null,
            image: null,
            btnLoader: false,
            picUrl:null,
            resData:[]
        }
    
    }
    async componentWillMount() {
        const Data = await this.fetchStateDataFun()
        this.setState({ stateData: Data })
        setTimeout(() => {
            this.setState({ loader: false })
        }, 2000)
    }
    async fetchStateDataFun() {
        try {
            const { data } = await axios.get("https://countriesnow.space/api/v0.1/countries/states")
            const states = []
            data.data.filter((country) => {
                if (country.name === "India") {
                    country.states.forEach((state) => {
                        states.push(state.name)

                    })

                }
            })

            return states
        } catch (error) {

        }
    }
    onSubmit = async() => {
        this.setState({ btnLoader: true })
        const {
            firstName,
            lastName,
            age,
            address,
            city,
            state,
            email,
            contact,
            password,
            confPassword,
            image
        } = this.state
   

        if (image ==null || firstName == null || lastName == null || age == null || address == null || city == null || state == null || email == null || contact == null || password == null || confPassword == null) {
            this.setState({ description: "Some Thing Went Wrong", message: "All Field Required", type: "error" })
            this.setState({ alert: true })
           

        } 
        // if(confPassword === password){
        //     this.setState({ description: "Some Thing Went Wrong", message: "Password Not Matched", type: "error" })
        //     this.setState({ alert: true })
           
        // }
        else 
            {
            this.setState({ btnLoader: true })   
             const appendData = new FormData()
            appendData.append("file", image)
            appendData.append("upload_preset", "qtrmjhlj")
            appendData.append("cloud_name", "xyz-ltd")

            await axios({
                method: "post",
                url:"https://api.cloudinary.com/v1_1/xyz-ltd/image/upload",
                data: appendData
            })
                .then(data => {
                    console.log(data)
                    this.setState({picUrl:data.data.url})
                })
                .catch(error => {
                    console.log(error)
                })
               
                await axios({
                    method: 'post',
                    url: 'https://shrouded-scrubland-67974.herokuapp.com/doctor',
                    data:{
                        firstName:firstName,
                         lastName:lastName,
                         age:age,
                         Address:address,
                         city:city,
                         State:state,
                         email:email,
                         contact:contact,
                         password:password,
                         pic:this.state.picUrl
                    }
                  })

                  if(this.state.resData.error){
                    this.setState({ description: "Some Thing Went Wrong", message: "All Field Required", type: "error" })
                    this.setState({ alert: true })

                  }
                  else{

                    this.setState({ description: "Registred", message: "Registred Successfull", type: "success" })
                    this.setState({ alert: true })
                    localStorage.setItem("projectTokenDoc","tokenprj")
                    this.props.history.push('/home');
                  }
           
        }
        setTimeout(() => {
            this.setState({ btnLoader: false })
        }, 1000)
    }
    render() {


        return (
            <>
                {
                    this.state.loader ? <Loader />
                        :
                        <div className="register">

                            <div
                                className="register-back">
                                <h1>Net Doc</h1>
                                <h3>offers complete telemedicine solutions for you and your family's health and medical needs.</h3>
                                <h4><i class="fa fa-stethoscope" aria-hidden="true"></i></h4>
                            </div>
                            {this.state.alert &&
                                <Alert
                                    type={this.state.type}
                                    description={this.state.description}
                                    message={this.state.message}
                                    setAlertFun={() => this.setState({ alert: false })}
                                />
                            }

                            <div className="register-form">
                                <div class="row">
                                    <h1 style={{ color: "#6851d7" }}>Register</h1>
                                </div>
                                <div class="row">
                                    <input onChange={(e) => this.setState({ firstName: e.target.value })} placeholder="Enter First Name" type="text" />
                                    <input onChange={(e) => this.setState({ lastName: e.target.value })} placeholder="Enter Last Name" type="text" />
                                </div>
                                <div class="row">
                                    <select onChange={(e) => this.setState({ age: e.target.value })}>
                                        <option value="10">10-30</option>
                                        <option value="20">31-40</option>
                                        <option value="40">41-50</option>
                                        <option value="50">50+</option>
                                    </select>
                                    {/* <input type="text"/> */}
                                </div>
                                <div class="row">
                                    <input onChange={(e) => this.setState({ address: e.target.value })} placeholder="Enter Address" type="text" />
                                    <input onChange={(e) => this.setState({ city: e.target.value })} placeholder="Enter City" type="text" />

                                    <select onChange={(e) => this.setState({ state: e.target.value })}>
                                        {
                                            this.state.stateData.map(state => (
                                                <option value={state}>{state}</option>
                                            ))
                                        }


                                    </select>
                                </div>

                                <div class="row">
                                    <input onChange={(e) => this.setState({ email: e.target.value })} placeholder="Email" type="text" />
                                    <input onChange={(e) => this.setState({ contact: e.target.value })} placeholder="Contact" type="text" />
                                </div>
                                <div class="row">
                                    <input onChange={(e) => this.setState({ password: e.target.value })} placeholder="Password" type="text" />
                                    <input onChange={(e) => this.setState({ confPassword: e.target.value })} placeholder="Confirm Password" type="text" />
                                </div>
                                <div class="row">

                                    <input type="file" onChange={(e) => this.setState({ image: e.target.files[0] })} />
                                    <br />
                                    <span>Upload Image</span>
                                </div>
                                <div class="row">
                                    {
                                        this.state.btnLoader ?
                                            <button disabled class="btn-register2">
                                                Loading......
                      </button>
                                            :
                                            <button onClick={() => this.onSubmit()} class="btn-register">Register</button>
                                            
                                    }
                                    <Link to="/">Log In</Link>
                                </div>
                            </div>

                        </div>
                }
            </>
        );
    }
}
