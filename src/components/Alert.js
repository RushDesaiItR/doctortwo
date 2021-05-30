import React, { Component } from 'react'

export default class Alert extends Component {
  render() {
    return (
      <>
        <div className="alert-box">
           <div className="alert-box-card">
            
            <h1 style={this.props.type==='error'? {color:"red"} :null }>
               {this.props.message}
               <i class="fa fa-times alert-box-close" onClick={()=>this.props.setAlertFun()} aria-hidden="true"></i>
            </h1>
            <p style={this.props.type==='error'? {color:"red"} :null }>{this.props.description}</p>
            <div className="alert-box-card-row">
            { this.props.type !='error'&& 
                <button  className="alert-box-card-sure">Sure</button>
            }
                <button onClick={()=>this.props.setAlertFun()} className="alert-box-card-cancle">Cancle</button>
            </div>
            </div>
        </div>
      </>
    )
  }
}
