import React, { Component }  from 'react';
import 'antd/dist/antd.css';
import Spinner from "./components/spinner";
import './styles/App.css';
import Badger from "./components/badge";
import Radio from "./components/radiobutton"

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
