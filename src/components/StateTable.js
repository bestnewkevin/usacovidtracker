import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

  function createData(name, number){
    return { name, number };

  }

  //https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript

function search(nameKey, myArray){
  //console.log("do we search?", nameKey)
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].USAState === nameKey) {
            //console.log(myArray[i])
            return myArray[i];
        }
    }
}


  class StateTable extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          fetchingData:false,
          stateName : null,
          deaths : null,
          activeCases:null,
          positive:null,
          recovered:null,
          hospitalizedCurrently:null,
          hospitalizedCumulatively:null,
          totalTests:null,
          lastDateModified:null,
      };
      
    };


    

    render(){
        //console.log("StateTAble ");
        let rows = null
        if(this.props.data && this.props.stateName){
          //console.log(this.props.data.table)
          //extract Chart Data
          const stateData = search(this.props.stateName,this.props.data.table);
          const totalCases = stateData.TotalCases;
          const activeCases = stateData.ActiveCases;
          const totalDeaths = stateData.TotalDeaths;
          const totalTests = stateData.TotalTests;
          const deathsPerMillion = stateData.Deaths_1M_Pop;
          const testsPerMillion = stateData.Tests_1M_Pop;
         
          //populate rows for returning
          rows = [
            createData("Total Cases", totalCases),
            createData('Active Cases', activeCases),
            createData('Total Deaths', totalDeaths),
            createData('Total Tests', totalTests),
            createData('Deaths Per Million', deathsPerMillion),
            createData('Tests Per Million', testsPerMillion),
          ];

        }
        else{
          rows = [
            createData("Total Cases", null),
            createData('Active Cases', null),
            createData('Total Deaths', null),
            createData('Total Tests', null),
            createData('Deaths Per Million', null),
            createData('Tests Per Million', null),
          ];

        }
          return(
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>{this.props.stateName}</TableCell>
                    <TableCell align="right">Number</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">{row.name}</TableCell>
                      <TableCell align="right">{row.number?row.number:"N/A"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );   
        
      
        
    }  
      
  }

  export default StateTable

 
