import React from 'react';
import StateDropDown from './StateDropDown'
import './styles/stateDropDown.css'
class MapView extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            totalDeaths : "",
            totalCases: "",
            totalTests: "",
            data:"",
            error:null
        };
    };

    componentDidMount(){
        fetch("https://covid19api.io/api/v1/CasesInAllUSStates")
        .then(res => res.json())
        .then(
            (result)=>{
                /*pass in array of Objects*/
                //console.log(result.data[0].table[0]);
                this.setState({
                    totalDeaths: result.data[0].table[0].TotalDeaths,
                    totalCases: result.data[0].table[0].TotalCases,
                    totalTests: result.data[0].table[0].TotalTests,
                    data : result.data[0]
                });

            },

            (error) => {
                this.setState({
                    error:error

                });
            }

        )
    }

    render(){
        const { totalDeaths, totalCases, totalTests,error } = this.state;
        if(totalDeaths === ""){
            return null
        }
        else if (error){
            return <div>Data Not Available</div>
        }
        else{
            return(
                <>
                    <div className = "dropDown">
                        <StateDropDown data = {this.state.data}/>

                    </div>
                    <div className = "dropDown">
                        <StateDropDown data = {this.state.data}/>

                    </div>
                    <div className = "dropDown">
                        <StateDropDown data = {this.state.data}/>

                    </div>
                    <div className = "dropDown">
                        <StateDropDown data = {this.state.data}/>

                    </div>
                    <div className = "dropDown">
                        <StateDropDown data = {this.state.data}/>

                    </div>
                    <div className = "dropDown">
                        <StateDropDown data = {this.state.data}/>

                    </div>

                </>
            
            )
        }
    }



};

export default MapView;
