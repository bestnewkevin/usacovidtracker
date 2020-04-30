import React from 'react';
import './styles/stateDropDown.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './styles/stateDropDown.css';
import StateTable from './StateTable';

class StateSelection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stateName : "",
    
        };
        this.handleChange = this.handleChange.bind(this);
        
    };

    async handleChange(event){
        const value = event.target.value
        await this.setState({
            stateName:value
        });

        //console.log(this.state);

    }

 

    render(){
        const stateName = this.state.stateName;
        //console.log("state SELECTION");
        //console.log(this.props.data);

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
                                <MenuItem value="USA Total">USA Total</MenuItem>
                                <MenuItem value="Alabama">Alabama</MenuItem>
                                <MenuItem value="Alaska">Alaska</MenuItem>
                                <MenuItem value="Arizona">Arizona</MenuItem>
                                <MenuItem value="Arkansas">Arkansas</MenuItem>
                                <MenuItem value="California">California</MenuItem>
                                <MenuItem value="Colorado">Colorado</MenuItem>
                                <MenuItem value="Connecticut">Connecticut</MenuItem>
                                <MenuItem value="Delaware">Delaware</MenuItem>
                                <MenuItem value="District Of Columbia">District Of Columbia</MenuItem>
                                <MenuItem value="Florida">Florida</MenuItem>
                                <MenuItem value="Georgia">Georgia</MenuItem>
                                <MenuItem value="Hawaii">Hawaii</MenuItem>
                                <MenuItem value="Idaho">Idaho</MenuItem>
                                <MenuItem value="Illinois">Illinois</MenuItem>
                                <MenuItem value="Indiana">Indiana</MenuItem>
                                <MenuItem value="Iowa">Iowa</MenuItem>
                                <MenuItem value="Kansas">Kansas</MenuItem>
                                <MenuItem value="Kentucky">Kentucky</MenuItem>
                                <MenuItem value="Louisiana">Louisiana</MenuItem>
                                <MenuItem value="Maine">Maine</MenuItem>
                                <MenuItem value="Maryland">Maryland</MenuItem>
                                <MenuItem value="Massachusetts">Massachusetts</MenuItem>
                                <MenuItem value="Michigan">Michigan</MenuItem>
                                <MenuItem value="Minnesota">Minnesota</MenuItem>
                                <MenuItem value="Mississippi">Mississippi</MenuItem>
                                <MenuItem value="Missouri">Missouri</MenuItem>
                                <MenuItem value="Montana">Montana</MenuItem>
                                <MenuItem value="Nebraska">Nebraska</MenuItem>
                                <MenuItem value="Nevada">Nevada</MenuItem>
                                <MenuItem value="New Hampshire">New Hampshire</MenuItem>
                                <MenuItem value="New Jersey">New Jersey</MenuItem>
                                <MenuItem value="New Mexico">New Mexico</MenuItem>
                                <MenuItem value="New York">New York</MenuItem>
                                <MenuItem value="North Carolina">North Carolina</MenuItem>
                                <MenuItem value="North Dakota">North Dakota</MenuItem>
                                <MenuItem value="Ohio">Ohio</MenuItem>
                                <MenuItem value="Oklahoma">Oklahoma</MenuItem>
                                <MenuItem value="Oregon">Oregon</MenuItem>
                                <MenuItem value="Palau">Palau</MenuItem>
                                <MenuItem value="Pennsylvania">Pennsylvania</MenuItem>
                                <MenuItem value="Puerto Rico">Puerto Rico</MenuItem>
                                <MenuItem value="Rhode Island">Rhode Island</MenuItem>
                                <MenuItem value="South Carolina">South Carolina</MenuItem>
                                <MenuItem value="South Dakota">South Dakota</MenuItem>
                                <MenuItem value="Tennessee">Tennessee</MenuItem>
                                <MenuItem value="Texas">Texas</MenuItem>
                                <MenuItem value="Utah">Utah</MenuItem>
                                <MenuItem value="Vermont">Vermont</MenuItem>
                                <MenuItem value="Virgin Islands">Virgin Islands</MenuItem>
                                <MenuItem value="Virginia">Virginia</MenuItem>
                                <MenuItem value="Washington">Washington</MenuItem>
                                <MenuItem value="West Virginia">West Virginia</MenuItem>
                                <MenuItem value="Wisconsin">Wisconsin</MenuItem>
                                <MenuItem value="Wyoming">Wyoming</MenuItem>

                            </Select>
                    </FormControl>
                 </div>
                 <StateTable className = "stateTable" stateName = {this.state.stateName} data = {this.props.data}/>
                 
                </>
            );
       
        

    };
};

export default StateSelection;