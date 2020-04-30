import React from 'react';
import './App.css';
import MapView from './components/MapView'
import USAMap from "react-usa-map";


class App extends React.Component {
  /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  /* optional customization of filling per state and calling custom callbacks per state */
 /* statesCustomConfig = () => {
    return {
      "NJ": {
        fill: "navy",
        clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "#CC0000"
      }
    };
  };
  */

  render() {
    return (
      <div className="App">
        <h2>United States Covid-19 State Tracker</h2>
        <div className = "mapContainer">
          <USAMap onClick={this.mapHandler} width = "75%" />
        </div>
        <MapView/>
        <h6>thanks chris <a href="https://covid19-docs.chrismichael.now.sh/">https://covid19-docs.chrismichael.now.sh/</a></h6>
      </div>
    );
  }
}

export default App;
