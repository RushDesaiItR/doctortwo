// import Home from './Home';
// import './App.css';
// import  from "./pages/Register"
// function App() {
//   return (
//    <>
//     <Home/>
//    </>
//   );
// }

// export default App;
import React, { Component } from 'react';
import Home from './Home';
import './App.css';
import Register from "./pages/Register"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import login from "./pages/login"
import moment from "moment"
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      logedIn: false
    }
  }
  componentWillMount() {
    // this.checkOpt()
    const token = localStorage.getItem("projectToken");
    if (token) {
      this.setState({ logedIn: true })
    }
    else {
      this.setState({ logedIn: false })
    }
  }
  checkOpt() {
    //'2014-08-18T21:11:54'
    // localStorage.removeItem("time");
    // localStorage.removeItem("date");
    // localStorage.removeItem("link")
    let selectedTime=new Date()
    let todaysTime=moment(selectedTime).format("hh:mm:ss a")
    let todaysDate=moment(selectedTime).format("DD/MM/YYYY")
    // let time=localStorage.getItem("time");
    // let date=localStorage.getItem("date");
    // let link=localStorage.getItem("link")
    let rt=new Date('2021-04-24T19:11:54')
    let time=moment(rt).format("hh:mm:ss a")
    let date=moment(rt).format("DD/MM/YYYY")
    console.log(selectedTime, todaysDate,todaysTime)
    console.log("oppintment",time,date)

     setInterval(()=>{
      if(todaysDate==date && todaysTime==time){
        console.log("matched")
      }else{
        console.log("Un matched")
      }
     }, 1000)
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
         
                <Route path="/" component={Home} exact />
             
                    <Route path="/login" component={login} />
                    <Route path="/register" component={Register} />
                    
                


          </Switch>
        </BrowserRouter>
      </>
    );
  }
}


