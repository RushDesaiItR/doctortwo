import React from 'react'
import chat from './components/chat'
import sidebar from './components/sidebar'
import Helpdesk from './pages/Helpdesk'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Covid from './pages/Covid';

export default function Home() {
    const [menuId, setMenuId]=React.useState(0)
    return (
        <>
         <div className="main-container">
            <div className="sidebar">
               <span class="logo">
                
                 <h1>
                  <LocalHospitalIcon/>
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
                    <span  className={ menuId == 0 ? "active-sidebar" : 'sidebar-menu-span' } onClick={()=>setMenuId(0)} ><i class="fa fa-superpowers" aria-hidden="true"></i> Help Desk</span>
                    <span className={ menuId == 1 ? "active-sidebar" :  'sidebar-menu-span' } onClick={()=>setMenuId(1)} ><i class="fa fa-medkit" aria-hidden="true"></i> Medicine</span>
                   <span className={ menuId == 2 ? "active-sidebar" :  'sidebar-menu-span' } onClick={()=>setMenuId(2)} ><i class="fa fa-thermometer-full" aria-hidden="true"></i> Covid Meter</span>
                    <span className={ menuId == 3 ? "active-sidebar" :  'sidebar-menu-span' } onClick={()=>setMenuId(3)} ><i class="fa fa-address-card-o" aria-hidden="true"></i> General Check</span>
               </div>
            </div>
            <div className="main-home">
               {
                 menuId == 0 &&
                 (
                   <>
                   <Helpdesk/>
                   </>
                 )
               }
                {
                 menuId == 1 &&
                 (
                   <>
                    <h1>Medicine</h1>
                   </>
                 )
               }
                {
                 menuId == 2 &&
                 (
                   <>
                   <Covid/>
                   </>
                 )
               }
                {
                 menuId == 3 &&
                 (
                   <>
                    <h1>General Check</h1>
                   </>
                 )
               }
            </div>
         </div>
        </>
    )
}
