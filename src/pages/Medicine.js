import React, { Component } from 'react'
import axios from "axios"
import Loader from "../components/Loader"
import StripeCheckout from 'react-stripe-checkout';
export default class Medicine extends Component {
    constructor(props) {
        super(props)
        this.state = {
            medicine: [],
            loader: true,
            cartItems: [],
            total: 0,
            form: false,
            cashOption: 1,
            product: {
                name: "Product from fb",
                price: 300,
                productBy: "Facebook"
            }
        }

    }
    addToCart(item) {
        const exists = this.state.cartItems.find((x) => x._id === item._id)
        if (exists) {
            this.setState({
                cartItems: this.state.cartItems.map((x) => (
                    x._id === item._id ? { ...exists, qty: x.qty + 1 } : x
                ))
            })
        }
        else {
            this.setState({ cartItems: [...this.state.cartItems, { ...item, qty: 1 }] })
        }
        this.state.cartItems.map((x) => (
            this.setState({ total: this.state.total + (x.price * x.qty) })
        ))

    }
    async componentWillMount() {
        const res = await axios.get("http://localhost:3800/medicine")
        this.setState({ medicine: res.data })
        setTimeout(() => {
            this.setState({ loader: false })
            console.log(this.state.medicine)
        }, 5000)
    }
    makePayment(token) {
        const body = {
            token,
            product: this.state.product
        }
        const headers = {
            "Content-Type": "application/json"
        }
        return fetch(`http://localhost:3800/payment`, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        })
            .then(res => {
                console.log(res)
                const { status } = res
            })
    }
    render() {
        return (
            <>
                {
                    this.state.loader ? (
                        <Loader />
                    )
                        :
                        (
                            <>

                                <div className="normal">
                                    <center><h1>Medicine</h1></center>
                                </div>
                                <div style={{ width: "100%", height: "100vh", overflow: "scroll", display: "flex" }}>
                                    <div className="medicine-row">
                                        {
                                            this.state.medicine.map(item => (
                                                <div className="medicine-card">
                                                    <center>  <img src={item.pic} /></center>
                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                        <h4>{item.name}</h4>
                                                        <h4 className="my-color">${item.price}</h4>
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                        <h4>{item.des}</h4>

                                                    </div>
                                                    <button onClick={() => this.addToCart(item)} className="medicine-card-btn">Buy</button>
                                                </div>
                                            ))
                                        }





                                    </div>
                                    <div className="cart-medicine">
                                        <h1><center>Cart</center></h1>
                                        <div class="cart-medicines">
                                            {
                                                this.state.cartItems.length > 0 ? (
                                                    this.state.cartItems.map((item) => (
                                                        <div className="cart-medicine-card">
                                                            <img src={item.pic} />
                                                            <div>
                                                                <h4>{item.name}</h4>
                                                                <h5 style={{ marginRight: "15px" }}>{item.qty}</h5>
                                                            </div>
                                                        </div>
                                                    )
                                                    ))
                                                    :
                                                    (
                                                        <center>
                                                            <div>
                                                                <h2> <i class="fa fa-shopping-cart" aria-hidden="true"></i></h2>
                                                                <h4>Cart Empty</h4>
                                                            </div>
                                                        </center>
                                                    )
                                            }
                                        </div>
                                        <>
                                            {
                                                this.state.cartItems.length > 0 &&
                                                (
                                                    <>
                                                     <h1>
                                                        <center>Total {this.state.total}</center>
                                                     </h1>
                                                     <button onClick={()=>this.setState({form:true})} className="add-oppintment">Check Out</button>
                                                    </>
                                                )
                                            }
                                        </>
                                    </div>
                                    {
                                        this.state.form &&
                                    
                                    <div className="alert-box">
                                        <div className="alert-box-card">
                                            <h1 style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                                                <span>Order</span> 
                                                <i onClick={()=>this.setState({form:false})} class="fa fa-times" aria-hidden="true"></i>
                                            </h1>
                                            <input type="text" placeholder="Full Name" className="form-control-medicine" />
                                            <input type="text" placeholder="Address" className="form-control-medicine" />
                                            <input type="text" placeholder="Pin Code" className="form-control-medicine" />
                                            <select
                                                onChange={(e) => {this.setState({ cashOption: e.target.value})}}
                                                className="form-control-medicine">
                                                <option value="1">Cash On Delivery</option>
                                                <option value="2">Online</option>
                                            </select>
                                            {
                                                this.state.cashOption == 2 && (
                                                    <StripeCheckout
                                                        stripeKey={process.env.REACT_APP_KEY}
                                                        token={this.makePayment}
                                                        amount={this.state.product.price * 100}
                                                        name="Net Doc">
                                                        <button className="add-oppintment">Pay {this.state.total}</button>
                                                    </StripeCheckout>
                                                )
                                            }
                                            <button className="add-oppintment">Add Order</button>
                                        </div>
                                    </div>
                                    }
                                </div>
                                
                            </>
                        )
                }
            </>
        )
    }
}
