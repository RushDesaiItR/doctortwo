import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import Alert from '../components/Alert';
import moment from "moment"
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Loader from '../components/Loader';


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

export default function FullWidthGrid() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [selectedTime,setselectedTime] = React.useState();
  //new Date().toLocaleTimeString('it-IT')new Date('2014-08-18T21:11:54')
  const [firstName, setFirstName]=React.useState()
  const [lastName, setLastName]=React.useState()
  const [address, setAddress]=React.useState()
  const [city, setCity]=React.useState()  
  const [doctor, setDoctor]=React.useState()
  const [loader, setLoader]=React.useState(false)
  const [alert, setAlert]=React.useState(false)
  const [description, setDescription]=React.useState()
  const [message, setMessage]=React.useState()
  const [type, setType]=React.useState()
  //const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));moment(selectedTime["HH.mm"]).format("hh:mm a"

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleTimeChange = (time) => {
    console.log(time)
    setselectedTime(time)
  };
  const handleSubmit = () => {
    console.log(moment(selectedDate).format("DD/MM/YYYY"),moment(selectedTime).format("hh:mm:ss a"))
     if(selectedDate==null || selectedTime==null || firstName==null || lastName==null || address ==null || city==null || doctor==null) {
    
      setDescription("Some Thing Went Wrong")
      setMessage("All Field Required")
      setType("error")
      setAlert(true)
     }else{
      setDescription("Success")
      setMessage("Oppointment Done")
      setType("success")
      setAlert(true)
     }

  };

  return (
   <>
   {
     loader ? 
     <Loader/>
     :
     <div className="normal">
      
      {
          alert &&
          <Alert description={description} message={message} type={type} setAlertFun={()=>setAlert(false)}/>
      }
        <h2>Genral Checkup</h2>
      
      <div className="genral-form">
          <img src="https://i.pinimg.com/originals/b5/75/7a/b5757a2eed2300820433e4083ae635c2.jpg"/>
    
   
       
    
    
         <div style={{padding: "10px"}}>
             <div className="row-form">
                <input type="text" onChange={(e)=>setFirstName(e.target.value)} placeholder="last Name" className="form-control"/>
                <input type="text" onChange={(e)=>setLastName(e.target.value)} placeholder="last Name" className="form-control"/>
             </div>
             <div className="row-form">
             <input type="text" onChange={(e)=>setAddress(e.target.value)} placeholder="Adreess" className="form-control"/>
          <input type="text" onChange={(e)=>setCity(e.target.value)} placeholder="City" className="form-control"/>
     </div>
      <select onChange={(e) => setDoctor(e.target.value)} className="form-control-two">
          <option>Select Doctor</option>
          <option value="a">A</option>
          <option value="a">A</option>
          <option value="a">A</option>
      </select>
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
   <div className="row-form">
       <button onClick={()=>handleSubmit()} className="add-oppintment">Add Oppintment</button>
   </div>
   

         </div>
     
       </div>
   
      </div>
   }
   </>

  );
}
