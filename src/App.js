import React from 'react';
import './App.css';
import MapView from './components/MapView'


class App extends React.Component {
  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };



  render() {
    return (
      <div className="App">
        <MapView/>
        <h6>thanks chris :) for state table info <a href="https://covid19-docs.chrismichael.now.sh/">https://covid19-docs.chrismichael.now.sh/</a></h6>
        <h6>thanks Atlantic's Covid 19 Tracking Project for Graph Data <a href="https://covidtracking.com/api">https://covidtracking.com/api</a></h6>
        <h6>Noticeable inconsistencies in total death counts... Pulling from two sources of truth is strange but also... the data out there right now is murky </h6>

      </div>
    );
  }
}

export default App;
