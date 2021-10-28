import React from "react";
import emailjs from 'emailjs-com';
const Email = ({setAlert, patient})=>{
    const [to_name, Setto_name]=React.useState()
    const [from_name,Setfrom_name]=React.useState()
    const [medicine, Setmedicine]=React.useState()
  
    const [to_email, Setto_email]=React.useState()
    const [from_email,Setfrom_email]=React.useState()
    const [loading, setLoading]=React.useState(false)
   React.useEffect(()=>{
    const firstName=localStorage.getItem("DocFirstName")
    const lastName=localStorage.getItem("DocLastName")
     Setto_name(patient.patientName);
     Setfrom_name(firstName+ " "+ lastName)
     Setto_email(patient.email)
     Setfrom_email(firstName+lastName+"@gmail.com")
   },[])
    function handleClick() {
      setLoading(true)
        var data = {
        to_name: to_name,
        from_name: from_name,
        medicine: medicine,
        to_email: to_email,
        from_email: from_email,
          };
    
      //  emailjs.send("service_0da5clh", TEMPLATE_ID, data, "user_MngYcDD60leSluBBqDeMN")
      emailjs.send("service_0da5clh", "template_0px1v4m",data,"user_MngYcDD60leSluBBqDeMN")
      .then(
          function (response) {
            console.log(response.status, response.text);
          },
          function (err) {
            console.log(err);
          }
        );
        setLoading(false)
        setTimeout(()=>{
          setAlert(false)
        },2000)
      }




     
    return (
        <div className="email">
        <header className="App-header">
        <i onClick={()=>setAlert(false)} class="fa fa-times" aria-hidden="true"></i>
            <h4>Medicine Perception </h4>
            <h6>{patient.patientName}</h6>
            <h6><i class="fa fa-envelope" aria-hidden="true"></i> {patient.email}</h6>
            <textarea onChange={(e)=>Setmedicine(e.target.value)}  placeholder="Enter Medicines">

            </textarea>
            <br/> <br/>
            
            {
              
              loading ?(
                <button type="submit">
                Loading..........
            </button>
               
              )
              :
              (
                <button type="submit" onClick={handleClick}>
                    Send mail <i class="fa fa-envelope" aria-hidden="true"></i>
              </button>
              )
            }
          
       
        </header>
      </div>
    )
}
export default Email;