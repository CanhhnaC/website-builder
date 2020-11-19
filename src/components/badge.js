import React, { Component } from 'react';
import { Badge } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import '../styles/badge.css';

function Badger() {

  return (
     <Badge count={5}>
      <a href="#" className="head-example centerB" />
    </Badge>
  
  );
}

export default Badger;