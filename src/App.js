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
        <h6>thanks chris :) <a href="https://covid19-docs.chrismichael.now.sh/">https://covid19-docs.chrismichael.now.sh/</a></h6>
      </div>
    );
  }
}

export default App;
