import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
export default class Sidebar extends Component {
    // const { menuId,setMenuId} =this.props
    constructor(props){
      super(props)
        this.state = {
          logout:false
        }
       
      
    }
    
    componentWillMount(){
      let token = localStorage.getItem("projectTokenDoc")
      if(token){
        this.setState({logout:true})
      }
    }
   logOut(){
      localStorage.removeItem("projectTokenDoc")
      localStorage.removeItem("DoctorInfo")         
      this.setState({logout:false})
  }
 
    render() {
     
      if (this.state.logout==false) {
        return <Redirect to='/' />
      }
   else {
   
   
        return (
            <div className="sidebar">
            <span class="logo">
             
              <h1>
              <i class="fa fa-heartbeat" aria-hidden="true"></i>
               <br></br>
               Net Doc
              </h1>
              {/* <img src="https://image.freepik.com/free-vector/hospital-logo-template_1057-388.jpg"/> */}
            </span>
           {/* <span class="logo">
              <img src="https://image.freepik.com/free-vector/hospital-logo-template_1057-388.jpg"/>
            </span>
             <div class="hi">Hi <img src="https://i.pinimg.com/originals/72/f5/d8/72f5d83a6fcb756a1d0a5d296eeca0d5.gif"/></div> */}
            <div className="sidebar-menu">
                 <span className={ this.props.menuId == 0 ? "active-sidebar" : 'sidebar-menu-span' } onClick={()=>this.props.setMenuId(0)} >
                   <i class="fa fa-superpowers font-sidebar-menu" aria-hidden="true"></i> 
                   <span className="text-sidebar-menu">Help Desk</span>
             </span>
            
             <span className={ this.props.menuId == 1 ? "active-sidebar" :  'sidebar-menu-span' } onClick={()=>this.props.setMenuId(1)} >
             <i class="fa fa-users" aria-hidden="true"></i>
                   <span className="text-sidebar-menu">Patients</span>
                   </span>
                 {/* <span className={ this.props.menuId == 1 ? "active-sidebar" :  'sidebar-menu-span' } onClick={()=>this.props.setMenuId(1)} >
                   <i class="fa fa-medkit font-sidebar-menu" aria-hidden="true"></i> 
                   <span className="text-sidebar-menu">Medicine</span>
                   </span>
                <span className={ this.props.menuId == 2 ? "active-sidebar" :  'sidebar-menu-span' } onClick={()=>this.props.setMenuId(2)} >
                  <i class="fa fa-thermometer-full font-sidebar-menu" aria-hidden="true"></i> 
                  <span className="text-sidebar-menu">Covid Meter</span>
                  </span>
                 <span className={ this.props.menuId == 3 ? "active-sidebar" :  'sidebar-menu-span' } onClick={()=>this.props.setMenuId(3)} >
                   <i class="fa fa-address-card-o font-sidebar-menu" aria-hidden="true"></i> 
                   <span className="text-sidebar-menu">Genral Check</span>
                   </span> */}
            </div>
            <div className="dev-logo">
              Soft Techno
            </div>
            {
              this.state.logout &&
              <div className="logout" onClick={() => this.logOut()}>
              logout
            </div>
            }
         </div>
        )
      }
    }
}
