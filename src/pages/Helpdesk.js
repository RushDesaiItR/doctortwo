import React from 'react'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Doctors from "../components/Doctors"

export default function Helpdesk({setMenuId, sendDataForm}) {
   const [tab, setTab]=React.useState(0)
    return (
        <div className="helpdesk">
      
           <div className="helpdesk-banner2 normal">
        
           <div className="helpdesk-banner">
             <div>
             <h3>Sehat Apki 
                   <br/>
                   <span style={{fontSize: "70px"}}>
                     Sath Hamara
                   </span>
               </h3>
               
             

               <div className="helpdesk-banner-list">
                    <h1><i class="fa fa-user-md" aria-hidden="true"></i></h1> 
                   <div style={{display:"flex",flexDirection:"column", justifyContent:"center", marginLeft:"20px"}}>
                       <span>Certified Patner Doctors</span>
                       <span>You Can Trust</span>
                   </div>
               </div>
               <div className="helpdesk-banner-list">
                    <h1><i class="fa fa-flask" aria-hidden="true"></i></h1> 
                   <div style={{display:"flex",flexDirection:"column", justifyContent:"center", marginLeft:"20px"}}>
                       <span>Home Delivery Of</span>
                       <span>Medicines</span>
                   </div>
               </div>
               <div className="helpdesk-banner-list">
                    <h1><i class="fa fa-ambulance" aria-hidden="true"></i></h1> 
                   <div style={{display:"flex",flexDirection:"column", justifyContent:"center", marginLeft:"20px"}}>
                       <span>24 * 7</span>
                       <span>Ambulance Service</span>
                   </div>
               </div>
              
             </div>
             
             <img style={{width:"600px",height:"600px"}} 
               src="http://www.pngplay.com/wp-content/uploads/7/Doctor-Nurse-PNG-Clipart-Background.png"/>
            
           </div>
           </div>

         <br/><br/>

           {/* <div className="helpdesk-banner3 normal">
               <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                 <span style={{fontSize:"30px", fontWeight:"bolder"}}>Doctors</span> 
                 <div className="doctor-search-bar" >
                   <input placeholder="Search Doctor" type="text"/>
                   <i class="fa fa-search" aria-hidden="true"></i>
                 </div>
               </div>
               <div className="catagory-tabs">
                   <button className={tab == 0 ?"catagory-tab-active":"catagory-tab "} onClick={()=>setTab(0)}>All</button>
                   <button className={tab == 1 ?"catagory-tab-active":"catagory-tab "} onClick={()=>setTab(1)}>Pediatricians</button>
                   <button className={tab == 2 ?"catagory-tab-active":"catagory-tab "} onClick={()=>setTab(2)}>General Surgeon</button>
                   <button className={tab == 3 ?"catagory-tab-active":"catagory-tab "} onClick={()=>setTab(3)}>Cardiologist:</button>
                   <button className={tab == 4 ?"catagory-tab-active":"catagory-tab "} onClick={()=>setTab(4)}>Dentist</button>
                   <button className={tab == 5 ?"catagory-tab-active":"catagory-tab "} onClick={()=>setTab(5)}>Gynecologist</button>
                   <button className={tab == 6 ?"catagory-tab-active":"catagory-tab "} onClick={()=>setTab(6)}>Cardiologist:</button>
                   <button className={tab == 7 ?"catagory-tab-active":"catagory-tab "} onClick={()=>setTab(7)}>Dentist</button>
                   <button className={tab == 8 ?"catagory-tab-active":"catagory-tab "} onClick={()=>setTab(8)}>Gynecologist</button>
                   <button className={tab == 9 ?"catagory-tab-active":"catagory-tab "} onClick={()=>setTab(9)}>Gynecologist</button>
               </div>
             
               <Doctors sendDataForm={sendDataForm} setMenuId={setMenuId}/>
           </div> */}
            <Doctors sendDataForm={sendDataForm} setMenuId={setMenuId}/>
        </div>
    )
}