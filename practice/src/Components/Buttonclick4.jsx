import React, { Component } from 'react';

class Buttonclick4 extends React.Component {
    contructor(props) {
        this.state = {
            data: "Yea Baby You Won!!"
        }
        this.showAlert = this.showAlert.bind(this);
    }
        showAlert() {
            const reply = ({data: "Hey..Hey..Way To Go!"})
            console.log('What in tarnation is happening here??');
        
    }
        render() {
            return (
                <button onClick={this.showAlert}>VICTORY</button>
            );
        }
    
}

export default Buttonclick4;