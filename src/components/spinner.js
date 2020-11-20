import React from "react";
import '../styles/spinner.css';

function Spinner() {
    // IOS true, ANDROID false
    let LoadingSpinner = true;
    if (LoadingSpinner) {
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
