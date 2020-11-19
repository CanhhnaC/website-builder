import React, { Component } from 'react';
import {Spin} from 'antd';
import '../styles/spinner.css';

function Spinner() {

  return (
    <>
     <Spin className="centerS"/>
    </>
  );
}

export default Spinner;