import React from 'react';
import './styles/stateDropDown.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import StateTable from './StateTable';


/* Sort States in selection after being pulled from JSON*/
function compare( a, b ) {
    if ( a.key < b.key ){
      return -1;
    }
    if ( a.key > b.key ){
      return 1;
    }
    return 0;
  }

class StateSelection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stateName : "",
            prevState: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSelectedStatesChange = this.handleSelectedStatesChange.bind(this)
    };

    handleSelectedStatesChange(newState,prevState){
        this.props.onStateNameChange(newState,prevState)
    }

    handleChange(event){

        //we take new state from onclick event
        const newState = event.target.value
        // we take prev state from current state
        const prevState = this.state.prevState
        // we send it off to handle seleted Changed
        this.handleSelectedStatesChange(newState,prevState)
        this.setState({
            stateName:newState,
            prevState:newState
        })
        
    }

 

    render(){
        const stateName = this.state.stateName;
        //console.log("state SELECTION");
        //console.log(this.props.data);
        let rows = [];
        //Create States for state Dropdown
        this.props.data.table.forEach((entry) => {
            rows.push(
                <MenuItem value={entry.USAState} key={entry.USAState}>
                    {entry.USAState}
                </MenuItem>
            )
        })
        /* Keep Usa Total at the top of dropdown, sort all the other options! */
        rows = rows.slice(0,1).concat(rows.slice(1).sort(compare));
            return(
                <>
                 <div className = "stateInput">
                    <FormControl >
        
                            <InputLabel id="simple-select-label">State</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value= {stateName}
                            onChange={this.handleChange}
                            >
                            {rows}
                            </Select>
                    </FormControl>
                 </div>
                 <StateTable className = "stateTable" stateName = {this.state.stateName} data = {this.props.data}/>
                 
                </>
            );
       
        

    };
};

export default StateSelection;