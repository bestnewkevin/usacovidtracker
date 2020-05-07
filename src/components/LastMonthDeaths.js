import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,} from 'recharts';
import daysPerMonth from './inputs/daysPerMonth';
import states_hash from './inputs/states_hash';
import monthNames from './inputs/monthNames';
/* Child of State Selection same level as StateTable*/
/* lets get STatename into this */
//unshift to add to front of array
function processFetchURL (stateName, today){
    let APIUrls = []
    let year = today.getFullYear(); //2020
    let month = today.getMonth() + 1; // 5,  0-11 add 1 to change to 1-12 
    let day = today.getDate()-1-1; // 6, most consistent data was yesterday
    //how many days?
    const url = "https://covidtracking.com/api/v1/states/"
    for (var i=0; i < 30; i++){
        //We have to go back a month if day is 0
        if (day === 0){
            month -= 1;
            day = daysPerMonth[month] ;
        };

        let currYear = String(year);
        let currMonth = String(month);
        let currDay = String(day);

        if(currMonth.length == 1){
            currMonth = "0" + currMonth;
        }
        if(currDay.length == 1){
            currDay = "0" + currDay
        }

        let currDate = currYear + currMonth + currDay;
        const newUrl = `${url}${states_hash[stateName]}/${currDate}.json`;
        APIUrls.unshift(newUrl);

        day = day - 1;
    };

    return APIUrls
}

class LastTwoWeeksDeaths extends React.Component{
    constructor(props){
        super(props);
    //https://covidtracking.com/api/v1/states/CA/20200408.json
    this.state = {
            chartData: [],
            validInput: null
          };
    };
//https://stackoverflow.com/questions/49754270/multiple-fetch-requests-with-setstate-in-react
//https://stackoverflow.com/questions/39000698/how-to-fetch-data-when-a-react-component-prop-changes
//https://github.com/reactjs/rfcs/issues/26
//lets do one good case lol

    //Keeps track of prop changes, in this case we check stateName
    componentDidUpdate(prevProps) {
        if (this.props.stateName !== prevProps.stateName) {
            this.loadData(this.props.stateName);
        };
    }

    loadData(stateName){
        if (stateName in states_hash){

            let APIUrls = processFetchURL(stateName, new Date());
            var promises = APIUrls.map(url => fetch(url).then(resp => resp.json()));
            Promise.all(promises).then(results => {
                /*
                [
                    {
                        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
                    }
                ]
                */
                let newChartData = []
                results.forEach(dateData => {
                    console.log(monthNames[parseInt((String(dateData.date).slice(4,6)))]);
                    newChartData.push({ date: `${monthNames[parseInt((String(dateData.date).slice(4,6)))]}-${String(dateData.date).slice(6)}`, TotalDeaths : dateData.death, DailyIncrease: dateData.deathIncrease })
                   });
                this.setState({
                    chartData:newChartData,
                    validInput: true
                });
                
            }).catch((err)=>{
                console.log(err);
            });         
        }
        else{
            this.setState({
                chartData: [],
                validInput:false
            })
        }  
                
    }
    render(){
        const data = this.state.chartData;
        const validInput = this.state.validInput;
        console.log(data)
        if(validInput){
            return(
                <>
                <h4>Total and Daily Deaths in the Last 30 Days</h4>
                <LineChart width= {500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" padding={{ left: 30, right: 30 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="TotalDeaths" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="DailyIncrease" stroke="#82ca9d" strokeWidth={3} />
                </LineChart>
                </>
            );
        }
        else if (validInput === false){
            const dummyData =  [ 
                {
                    date: '1', TotalDeaths: 0, pv: 0
                },
                {
                    date: '2', TotalDeaths: 0, pv: 0
                },
                {
                    date: '3', TotalDeaths: 0, pv: 0
                },
                {
                    date: '4', TotalDeaths: 0, pv: 0
                },
                {
                    date: '5', TotalDeaths: 0, pv: 0
                },     
                {
                    date: '6', TotalDeaths: 0, pv: 0
                },     
                {
                    date: '7', TotalDeaths: 0, pv: 0
                },
                {
                    date: '8', TotalDeaths: 0, pv: 0
                }          

            ];
            return(
                <>
                <h4>No Data Available For Input </h4>
                <LineChart width={500} height={300} data={dummyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="TotalDeaths" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="DailyIncrease" stroke="#82ca9d" />
                </LineChart>
                </>
            );
        }
        else{ 
            const dummyData =  [ 
            {
                date: '1', TotalDeaths: 0, pv: 0
            },
            {
                date: '2', TotalDeaths: 0, pv: 0
            },
            {
                date: '3', TotalDeaths: 0, pv: 0
            },
            {
                date: '4', TotalDeaths: 0, pv: 0
            },
            {
                date: '5', TotalDeaths: 0, pv: 0
            },     
            {
                date: '6', TotalDeaths: 0, pv: 0
            },     
            {
                date: '7', TotalDeaths: 0, pv: 0
            },
            {
                date: '8', TotalDeaths: 0, pv: 0
            }          

        ];
            return(
                <>
                <h4>Total and Daily Deaths in the Last 30 Days</h4>
                <LineChart width={500} height={300} data={dummyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="TotalDeaths" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="DailyIncrease" stroke="#82ca9d" />
                </LineChart>
                </>
            );
        }




    };
}


export default LastTwoWeeksDeaths;


