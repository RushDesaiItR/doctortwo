import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Alert from '../components/Alert';
import axios from "axios"
import moment from "moment"
import Pdf from "../components/Pdf"
import StripeCheckout from 'react-stripe-checkout';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Loader from '../components/Loader';

let doctorData = [];
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
let docId;
export default function FullWidthGrid({ childData }) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [selectedTime, setselectedTime] = React.useState();
  const [firstName, setFirstName] = React.useState()
  const [lastName, setLastName] = React.useState()
  const [address, setAddress] = React.useState()
  const [city, setCity] = React.useState()
  const [doctor, setDoctor] = React.useState()
  const [loader, setLoader] = React.useState(true)
  const [alert, setAlert] = React.useState(false)
  const [description, setDescription] = React.useState()
  const [message, setMessage] = React.useState()
  const [type, setType] = React.useState()
  const [fullRes, setFullRes] = React.useState([])
  const [product, setroduct] = React.useState({
    name: "Product from fb",
    price: 300,
    productBy: "Facebook"
  })
  const makePayment = token => {
    const body = {
      token,
      product
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
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleTimeChange = (time) => {
    console.log(time)
    setselectedTime(time)
  };
  // const [doctorData, setDoctorData]=React.useState([])
  const handleSubmit = async () => {
    // console.log(firstName, lastName, "selectedDate",selectedDate.toDateString(), "selectedTime",selectedTime.toLocaleTimeString('en-US'), address, city,doctor)
    if (selectedDate == null || selectedTime == null || firstName == null || lastName == null || address == null || city == null) {

      setDescription("Some Thing Went Wrong")
      setMessage("All Field Required")
      setType("error")
      setAlert(true)
    } else {
      await axios({
        method: 'post',
        url: 'http://localhost:3800/doctorsoppintment',
        data: {
          firstName: childData.firstName,
          lastName: childData.lastName,
          patientName: firstName + " " + lastName,
          Time: moment(selectedTime).format("hh:mm:ss a"),
          Date: moment(selectedDate).format("DD/MM/YYYY"),
        }
      })
        .then(data => {
          console.log(data.data._id)
          setFullRes(data.data)
          localStorage.removeItem("link")
          localStorage.setItem("time", moment(selectedTime).format("hh:mm:ss a"));
          localStorage.setItem("date", moment(selectedDate).format("DD/MM/YYYY"));
          localStorage.setItem("link", data.data._id)
        })
        .then(error => {
          console.log(error)
        })


      setDescription("Success")
      setMessage("Oppointment Done")
      setType("success")
      setAlert(true)
    }

  };
  React.useEffect(() => {


    setTimeout(() => {
      setLoader(false)
    }, 3000)


  }, [])
  return (
    <>
      {
        loader ?
          <Loader />
          :
          <div className="normal">

            {
              alert &&
              <Alert description={description} message={message} type={type} setAlertFun={() => setAlert(false)} />
            }
            <div className="normal">
              <button className="right-arrow-btn" onClick={() => this.props.setMenuId(0)}><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
              <div className="doctor-info">

                <img src={childData.pic} />
                <div>
                  <h1>{childData.firstName} {childData.lastName}</h1>
                  <h2 style={{ color: "black" }}>{childData.specality}</h2>
                  <h2>{childData.Address} {childData.city}</h2>
                </div>

              </div>
            </div>
            <br />
            <div className="genral-form">






              <div style={{ padding: "10px" }}>
                <div className="row-form">
                  <input type="text" onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="form-control" />
                  <input type="text" onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="form-control" />
                </div>
                <div className="row-form">
                  <input type="text" onChange={(e) => setAddress(e.target.value)} placeholder="Address" className="form-control" />
                  <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="City" className="form-control" />
                </div>

                <div className="row-form">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                      <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />

                      <KeyboardTimePicker
                        margin="normal"
                        id="time-picker"
                        label="Time picker"
                        value={selectedTime}
                        onChange={handleTimeChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change time',
                        }}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>

                </div>

                
                  <button onClick={() => handleSubmit()} className="add-oppintment">Add Oppintment</button>
                  <div style={{ display: "flex", marginTop:"10px" }}>
                  <StripeCheckout
                    stripeKey={process.env.REACT_APP_KEY}
                    token={makePayment}
                    amount={product.price * 100}
                    name="Net Doc">
                    <button  className="add-oppintment">Pay {product.price}</button>
                  </StripeCheckout>
                  <Pdf
                  
                    firstName={firstName}
                    lastName={lastName}
                    Time={moment(selectedTime).format("hh:mm:ss a")}
                    Date={moment(selectedDate).format("DD/MM/YYYY")}
                    childData={childData} />
                </div>


              </div>

            </div>

          </div>
      }
    </>

  );
}
