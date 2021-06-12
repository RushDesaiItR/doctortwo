import React from 'react'
import axios from "axios"
export default function Patients() {
    const [Data, setData]=React.useState([])
    const [menuId, setMenuId]=React.useState(0)
    const [loader, setLoader]=React.useState(true)
    const [childData, setChildData]=React.useState([])
    const [loggedIn, setLoggedIn]=React.useState(false)
    const [feedback, setFeedback]=React.useState(false)
    const [link, setLink]=React.useState()
    React.useEffect(()=>{
        FetchData();
        const token =  localStorage.getItem("DoctorInfo");
        setLink(token)
    },[])
    const FetchData = async () =>{
       
        const firstName=localStorage.getItem("DocFirstName")
        const lastName=localStorage.getItem("DocLastName")
        // https://shrouded-scrubland-67974.herokuapp.com
        const res = await axios({
            method: 'post',
            url: 'https://shrouded-scrubland-67974.herokuapp.com/doctors-patient',
            data:{
                firstName:"Dr. Ashok",
                lastName:"Rajgopal"
            }
          })
          console.log(res.data)
          setData(res.data)
          
    }
    return (
        <div>
                                          
<table id="customers">
  <tr>
    <th>Date</th>
    <th>Time</th>
    <th>Patient Name</th>
    <th>Connect Now</th>
    
  </tr>
    {
        Data.map(item=>(
            <tr>
                <td>{item.Date}</td>
                <td>{item.Time}</td>
                
                <td>{item.patientName}</td><td><a class="oppintment-card-button" href={`https://webinar-webrtc-siom-network.herokuapp.com/?name=${link}`}>Connect</a></td>
            </tr>
           
        ))
    }
 
 
</table>
        </div>
    )
}
