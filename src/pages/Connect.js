import React, { Component } from 'react'

export default class Connect extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    componentWillMount(){
       let url=localStorage.getItem("link")
       console.log(url)
    }
    render() {
        return (
            <div className="normal">
                <button className="right-arrow-btn" onClick={()=>this.props.setMenuId(0)}><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
                <form action="https://webinar-webrtc-siom-network.herokuapp.com">
                <input type="hidden" name="id" value="3644"/>
                <button  type="submit">
                Connect
               </button>
              </form>
            </div>
        )
    }
}
