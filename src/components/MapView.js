import React from 'react';
import './styles/stateSelection.css'
import StateSelection from './StateSelection';
import USAMap from "react-usa-map";
import states_hash from './inputs/states_hash';

class MapView extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            data: null,
            selectedStates:[],
            translatedStates:{}
   
        };
    
        this.handleSelectedStatesChange = this.handleSelectedStatesChange.bind(this);
    };


    mapHandler = (event) => {
        alert(event.target.dataset.name);
      };
    
      /* hand off prev state and Statename*/
    handleSelectedStatesChange(newState,prevState){
        //console.log(this.state.selectedStates); 
        let currSelectedStates = this.state.selectedStates;
        const idx = currSelectedStates.findIndex(state => state === prevState);
        if (idx !== -1){
            currSelectedStates.splice(idx,1)
        };
        currSelectedStates.push(newState);
        const translated =  {};
        currSelectedStates.forEach(key => translated[states_hash[key]] = { fill:"#008B8B"})
        this.setState({
            selectedStates:currSelectedStates,
            translatedStates:translated
        })


    }




    statesCustomConfig = (translated) => {
        //console.log("are we translating")
        //console.log(translated)
        return translated;
      };

    /*handleStateSelectionChange(stateName){
        this.setState({
            selectedStates:s
        })
    }*/

    componentDidMount(){
        fetch("https://covid19api.io/api/v1/CasesInAllUSStates")
        .then(res => res.json())
        .then(
            (result)=>{
                /*pass in array of Objects*/
                //console.log(result.data[0].table[0]);
                this.setState({
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
        const {data, error} = this.state;
        if(data === null){
            return null
        }
        else if (error){
            return <div>Data Not Available</div>
        }
        else{
            return(
                <>
                    <h2>United States Covid-19 State Tracker</h2>
                    <h6>Data Sources/Notes @ the Footer</h6>
                    <div className = "mapContainer">
                        <USAMap customize={this.state.translatedStates} onClick={this.mapHandler} width = "75%" />
                    </div>
                    <div className = "dropDown">
                        <StateSelection 
                        onStateNameChange = {this.handleSelectedStatesChange}
                        data = {this.state.data}/>

                    </div>
                    <div className = "dropDown">
                        <StateSelection 
                        onStateNameChange = {this.handleSelectedStatesChange}
                        data = {this.state.data}/>

                    </div>                    
                    <div className = "dropDown">
                        <StateSelection 
                        onStateNameChange = {this.handleSelectedStatesChange}
                        data = {this.state.data}/>

                    </div>                    
                    <div className = "dropDown">
                        <StateSelection 
                        onStateNameChange = {this.handleSelectedStatesChange}
                        data = {this.state.data}/>
                    </div>
                    <div className = "dropDown">
                        <StateSelection 
                        onStateNameChange = {this.handleSelectedStatesChange}
                        data = {this.state.data}/>
                    </div>
                    <div className = "dropDown">
                        <StateSelection 
                        onStateNameChange = {this.handleSelectedStatesChange}
                        data = {this.state.data}/>
                    </div>
                    

                </>
            
            )
        }
    }



};

export default MapView;
