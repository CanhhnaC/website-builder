import React, { Component, useState }  from 'react';
import Spinner from "./components/spinner";
import Badger from "./components/badge";
import Radio from "./components/radiobutton";
import './styles/App.css';

function App() {
  const [isAndroid, setIsAndroid] = useState(true)


  return (
    <div className="App">
      <button className={!isAndroid ? "btnI" : "btnA"} onClick={()=>setIsAndroid(false)}>IOS</button>
      <button className={isAndroid ? "btnI" : "btnA"} onClick={()=>setIsAndroid(true)}>ANDROID</button>
      <Spinner os={!isAndroid} color="purple"/>
      <Badger/>
      <Radio os={!isAndroid}/>
    </div>
  );
}

export default App;
