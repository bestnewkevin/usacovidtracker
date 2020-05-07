import React from 'react';
import './styles/stateSelection.css';
import StateTable from './StateTable';
import StateSelection from './StateSelection';

class StateDropDrown extends React.Component{
    constructor(props){
        super(props);
     } 

    render(){
        //console.log("sTateDropdown");
        //console.log(this.props.data.table)
        return(
            <div>
                <StateSelection data = {this.props.data}/>
            </div>
        )
    };


}

export default StateDropDrown;
