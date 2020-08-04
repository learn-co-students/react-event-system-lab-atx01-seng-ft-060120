// Code Keypad Component Here
import React, { Component } from "react";

class Keypad extends Component {

    keyLog = () => {
        console.log("Entering password...")
    }

    render() {
        return (
            <div><input onKeyUp={this.keyLog} type={"password"} /></div>
        )
    }
}

export default Keypad