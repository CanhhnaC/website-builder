import React from 'react';
import 'antd/dist/antd.css';
import '../styles/radio.css';

function Radio() {
    // IOS true, ANDROID false
    let radiobtn = true;
    if (radiobtn) {
        return (
            <div className="list-group">
                <input type="checkbox" name="CheckBoxInputName" defaultValue="Value1" id="CheckBox1" />
                <label className="list-group-item" htmlFor="CheckBox1">CheckBox1</label>
                <input type="checkbox" name="CheckBoxInputName" defaultValue="Value2" id="CheckBox2" />
                <label className="list-group-item" htmlFor="CheckBox2">CheckBox2</label>
                <input type="checkbox" name="CheckBoxInputName" defaultValue="Value3" id="CheckBox3" />
                <label className="list-group-item" htmlFor="CheckBox3">CheckBox3</label>
            </div>);
    }
    else {
        return (
            <div>
                <form>
                    <div className="list-group-ad">
                        <input type="radio" name="RadioInputName" defaultValue="Value1" id="Radio1" />
                        <label className="list-group-item" htmlFor="Radio1">Radio1</label>
                        <input type="radio" name="RadioInputName" defaultValue="Value2" id="Radio2" />
                        <label className="list-group-item" htmlFor="Radio2">Radio2</label>
                        <input type="radio" name="RadioInputName" defaultValue="Value3" id="Radio3" />
                        <label className="list-group-item" htmlFor="Radio3">Radio3</label>
                    </div>
                </form>
            </div>);
    }
}

export default Radio;