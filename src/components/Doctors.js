// import React from 'react'
import axios from "axios"
// export default function Doctors({this.prop.setMenuId}) {
//     const [doctors, setDoctors]=React.useState([])
//     React.useEffect(()=>{
//         fetchData()
//     },[])
//     const fetchData= async ()=>{
//     axios.get("https://shrouded-scrubland-67974.herokuapp.com/doctors")
//   .then(function (response) {
//     setDoctors(response)
//     console.log(doctors);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
//     }
//     return (
//         <>
//         <div className="Specialities">
//         <div className="Specialities-card">
//            <div>
//             <center>  <img src="https://prodconsumer-docs.s3.amazonaws.com/AccountImageFolder1606827280716Dr_Manish_web1821401519.jpeg"/></center>
//             <div>
//             <h5>Manish Patil </h5>
//             <h6>MBBS, DNB (7 Year Exp)</h6>
//              {/* <h6>7 years of experience</h6> */}
//             <h6>Speaks: English, বাংলা, हिन्दी, ಕನ್ನಡ, ਪੰਜਾਬੀ</h6>
//             {/* <h6>Sector 7 Banglore</h6> */} 
//             </div>
//            </div>
//            <br/>
//          <span className="cat-doc">Arthopedic</span>

//          <div style={{display:"flex", justifyContent:"space-between", marginTop:"10px"}}>
//              <button onClick={()=>this.prop.setMenuId(4)}><i class="fa fa-address-card" aria-hidden="true"></i> Book</button>
//              <button onClick={()=>this.prop.setMenuId(5)} style={{marginLeft:"5px"}}><i class="fa fa-video-camera" aria-hidden="true"></i> Call</button>
//          </div>
//         </div>
//         <div className="Specialities-card">
//            <div>
//             <center>  <img src="https://prodconsumer-docs.s3.amazonaws.com/AccountImageFolder1606827280716Dr_Manish_web1821401519.jpeg"/></center>
//             <div>
//             <h5>Manish Patil </h5>
//             <h6>MBBS, DNB (7 Year Exp)</h6>
//              {/* <h6>7 years of experience</h6> */}
//             <h6>Speaks: English, বাংলা, हिन्दी, ಕನ್ನಡ, ਪੰਜਾਬੀ</h6>
//             {/* <h6>Sector 7 Banglore</h6> */} 
//             </div>
//            </div>
//            <br/>
//          <span className="cat-doc">Arthopedic</span>

//          <div style={{display:"flex", justifyContent:"space-between", marginTop:"10px"}}>
//              <button><i class="fa fa-address-card" aria-hidden="true"></i> Book</button>
//              <button style={{marginLeft:"5px"}}><i class="fa fa-video-camera" aria-hidden="true"></i> Call</button>
//          </div>
//         </div>
//         <div className="Specialities-card">
//            <div>
//             <center>  <img src="https://prodconsumer-docs.s3.amazonaws.com/AccountImageFolder1606827280716Dr_Manish_web1821401519.jpeg"/></center>
//             <div>
//             <h5>Manish Patil </h5>
//             <h6>MBBS, DNB (7 Year Exp)</h6>
//              {/* <h6>7 years of experience</h6> */}
//             <h6>Speaks: English, বাংলা, हिन्दी, ಕನ್ನಡ, ਪੰਜਾਬੀ</h6>
//             {/* <h6>Sector 7 Banglore</h6> */} 
//             </div>
//            </div>
//            <br/>
//          <span className="cat-doc">Arthopedic</span>

//          <div style={{display:"flex", justifyContent:"space-between", marginTop:"10px"}}>
//              <button><i class="fa fa-address-card" aria-hidden="true"></i> Book</button>
//              <button style={{marginLeft:"5px"}}><i class="fa fa-video-camera" aria-hidden="true"></i> Call</button>
//          </div>
//         </div>


//      </div>


//      </>
//     )
// }
import React, { Component } from 'react'
import Loader from "../components/Loader"
export default class Doctors extends Component {
    constructor(props) {
        super(props)
        this.state = {
            doctors: [],
            loader: true
        }

    }

    async componentWillMount() {
        const res = await axios.get("https://shrouded-scrubland-67974.herokuapp.com/doctors")
        this.setState({ doctors: res.data })
        setTimeout(() => {
            this.setState({ loader: false })
        }, 5000)
    }

    render() {
        return (
            <>
                {
                    this.state.loader ? (
                        <div className="Specialities">
                            <div className="Specialities-card2">
                                <div>
                                    <center> <img /></center>
                                    <div>
                                        <h5></h5>

                                        <h6> </h6>
                                        <h6></h6>
                                        <h6></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="Specialities-card2">
                            <div>
                                    <center> <img /></center>
                                    <div>
                                        <h5></h5>

                                        <h6> </h6>
                                        <h6></h6>
                                        <h6></h6>
                                    </div>
                                </div>
                            </div>
                            <div className="Specialities-card2">
                            <div>
                                    <center> <img /></center>
                                    <div>
                                        <h5></h5>

                                        <h6> </h6>
                                        <h6></h6>
                                        <h6></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                        : (
                            <div className="Specialities">

                                {
                                    this.state.doctors.map(doc => (
                                        <div className="Specialities-card">
                                            <div>
                                                <center>  <img src={doc.pic} /></center>
                                                <div>
                                                    <h5>{doc.firstName} {doc.lastName}</h5>

                                                    <h6>{doc.Address} {doc.city} ,{doc.state} </h6>
                                                    <h6>Speaks: English, বাংলা, हिन्दी, ಕನ್ನಡ, ਪੰਜਾਬੀ</h6>
                                                    <h6>{doc.cont}</h6>
                                                </div>
                                            </div>
                                            <br />
                                            <span className="cat-doc">{doc.specality}</span>

                                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                                                <button onClick={() =>{
                                                 this.props.sendDataForm(doc)
                                                // this.props.setMenuId(4)
                                                }}>
                                                <i class="fa fa-video-camera" aria-hidden="true"></i>
                                                     Connect</button>
                                                {/* <button onClick={()=>this.props.setMenuId(5)} style={{marginLeft:"5px"}}><i class="fa fa-video-camera" aria-hidden="true"></i> Call</button> */}
                                            </div>
                                        </div>
                                    ))
                                }



                            </div>
                        )
                }


            </>
        )
    }
}
