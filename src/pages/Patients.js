import React from 'react'
import axios from "axios"
import Email from '../components/Email'
export default function Patients({setMenuId}) {
    const [Data, setData]=React.useState([])
    const [loader, setLoader]=React.useState(true)
    const [childData, setChildData]=React.useState([])
    const [loggedIn, setLoggedIn]=React.useState(false)
    const [feedback, setFeedback]=React.useState(false)
    const [alert,  setAlert]=React.useState(false)
    const [link, setLink]=React.useState()
    const [patient, setPatient]=React.useState()
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
                firstName:firstName,
                lastName:lastName
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
    <th>Medicine</th>
   
  </tr>
    {
        Data.map(item=>(
            <tr>
                <td>{item.Date}</td>
                <td>{item.Time}</td>
                <td>{item.patientName}</td><td><a class="oppintment-card-button" href={`https://webinar-webrtc-siom-network.herokuapp.com/?name=${link}`}>Connect</a></td>
                <td><button onClick={()=>{setPatient(item) ;setAlert(!alert)}}>Add Perception</button></td>
            </tr>
           
        ))
    }
  
 <tr>
     {
         alert && (
             <Email patient={patient} setAlert={setAlert}/>
         )
     }
 </tr>
</table>
        </div>
    )
}
