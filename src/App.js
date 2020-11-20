import React, { Component }  from 'react';
import Spinner from "./components/spinner";
import Badger from "./components/badge";
import Radio from "./components/radiobutton";
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <button className="btnI">IOS</button>
      <button className="btnA">ANDROID</button>
      <Spinner/>
      <Badger/>
      <Radio/>
    </div>
  );
}

export default App;
