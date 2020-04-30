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
          stateName : "",
          deaths : "",
          activeCases:"",
          positive:"",
          recovered:"",
          hospitalizedCurrently:"",
          hospitalizedCumulatively:"",
          totalTests:"",
          lastDateModified:"",
      };
      
    };


    

    render(){
        //console.log("StateTAble ");
    
        if(this.props.data && this.props.stateName){
          //console.log(this.props.data.table)
          console.log("this is teh state data");
          const stateData = search(this.props.stateName,this.props.data.table);
          console.log(stateData);

          const totalCases = stateData.TotalCases;
          const activeCases = stateData.ActiveCases;
          const totalDeaths = stateData.TotalDeaths;
          const totalTests = stateData.TotalTests;
          const deathsPerMillion = stateData.Deaths_1M_Pop;
          const testsPerMillion = stateData.Tests_1M_Pop;
          console.log(totalCases);
          const rows = [
            createData("Total Cases", totalCases),
            createData('Active Cases', activeCases),
            createData('Total Deaths', totalDeaths),
            createData('Total Tests', totalTests),
            createData('Deaths Per Million', deathsPerMillion),
            createData('Tests Per Million', testsPerMillion),
          ];
          return(
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>{this.props.stateName}</TableCell>
                    <TableCell align="right">Number</TableCell>>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.number ? row.number : "N/A"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );   
        }
        else{
          


          const rows = [
            createData("Total Cases", "N/A"),
            createData('Active Cases', "N/A"),
            createData('Total Deaths', "N/A"),
            createData('Total Tests', "N/A"),
            createData('Deaths Per Million', "N/A"),
            createData('Tests Per Million', "N/A"),
          ];
          return(
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>State</TableCell>
                    <TableCell align="right">Number</TableCell>>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.number}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );   
          
        }
        
    }  
      
  }

  export default StateTable

 
