// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component {

    enterPassword = () => {
        console.log('entering password...')
    }
    
    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.enterPassword} />
            </div>
        )
    }
}