import React from "react";
import '../styles/spinner.css';
import styled from 'styled-components';

function Spinner({ os, color }) {

    const colorSpinner = styled.div`
        color: "red";
    `;
    if (os) {
        return <div class="lds-spinner centerS">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    }
    else {
        return <div class="lds-ring centerS">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    }
}

export default Spinner;
