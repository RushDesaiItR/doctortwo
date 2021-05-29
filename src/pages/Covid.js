import React, { Component } from 'react'
import axios from "axios"
import Loader from "../components/Loader"
import CountUp from 'react-countup';
import { Line,Bar,defaults } from "react-chartjs-2";
export default class Covid extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            fetchDailyData:[],
            loader: true,
            stateWiseData:[]
        }

    }
    async componentWillMount() {
        const data = await this.fetchData()
        this.setState({ data })
        const fetchDailyData = await  this.fetchDailyDataFun()
        await this.StateData()
        this.setState({ fetchDailyData })
       setTimeout(()=>{
        this.setState({ loader: false })
       }, 3000)
    }
    async StateData(){
        const statewise = await axios.get("https://api.covid19india.org/data.json")
        this.setState({stateWiseData:statewise.data.statewise})
        console.log(this.state.stateWiseData)
    }
    async fetchData() {
        try {

            const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get("https://covid19.mathdro.id/api")
            return {
                confirmed,
                recovered,
                deaths,
                lastUpdate
            }



        } catch (error) {

        }
    }
    async fetchDailyDataFun(){
        try {
            const {data}=await axios.get("https://covid19.mathdro.id/api/daily")
            const modify=data.map(dailyData=>({
                confirmed:dailyData.confirmed.total,
                deaths:dailyData.deaths.total,
                reportDate:dailyData.reportDate
            }))
            return modify
        } catch (error) {
            
        }
        //https://api.covid19india.org/data.json

    }
    render() {
        const { data, fetchDailyData } = this.state
        console.log("fetchDailyData",fetchDailyData)
        return (
            <>
                {

                    this.state.loader ?
                        (
                            <Loader />
                        )
                        :
                        (
                            <div class="covid">

                                <div className="normal">
                                    <center>
                                        <img style={{ width: "200px" }} src="https://www.freevector.com/uploads/vector/preview/30887/DOCTOR_STAY_AT_HOME.jpg" />
                                        <h1 style={{color:"#6851d7"}}>Covid Meter</h1>
                                    </center>

                                </div>
                                <br />
                                <div className="covid-row">
                                    <div>
                                        <h1>Confirmed</h1>
                                        <h2>
                                            <CountUp
                                                start={-875.039}
                                                end={data.confirmed.value}
                                                duration={2.75}
                                                separator=" "
                                                decimals={4}
                                                decimal=","

                                            ></CountUp>
                                            
                                        </h2>

                                    </div>
                                    <div>
                                        <h1>Recovered</h1>
                                        <h2>
                                            <CountUp
                                                start={-875.039}
                                                end={data.recovered.value}
                                                duration={2.75}
                                                separator=" "
                                                decimals={4}
                                                decimal=","

                                            ></CountUp>
                                            
                                        </h2>
                                    </div>
                                    <div>
                                        <h1>Death</h1>
                                        <h2>
                                            <CountUp
                                                start={-875.039}
                                                end={data.deaths.value}
                                                duration={2.75}
                                                separator=" "
                                                decimals={4}
                                                decimal=","

                                            ></CountUp>
                                            
                                        </h2>
                                    </div>

                                </div>
                                
<table id="customers">
  <tr>
    <th>State</th>
    <th>Active</th>
    <th>Confirmed</th>
    <th>Death</th>
    <th>Recovered</th>
    <th>Last Updated Time</th>
    
  </tr>
  {
    this.state.stateWiseData.map(item=>(
    <tr>
    <td>{item.state}</td>  
    <td>{item.active}</td>
    <td>{item.confirmed}</td>
    <td>{item.deaths}</td>
    <td>{item.recovered}</td>
    <td>{item.lastupdatedtime}</td>
   

  </tr>
    ))
  }
 
 
</table>

                               
                                {/* <div className="chart">
                                    {
                                       this.state.fetchDailyData.length ?
                                       (
                                        <Line
                                      
        data={{
          labels:'',
          datasets: [{
            data: fetchDailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: fetchDailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },  {
            data: fetchDailyData.map((data) => data.recovered),
            label: 'Recovered',
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
                                       ) :
                                       (
                                        <h1>Loading.div.....................</h1>
                                       )
                                    }
                                </div> */}
                            </div>
                        )
                }
            </>
        )
    }
}
