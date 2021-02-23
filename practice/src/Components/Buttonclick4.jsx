import React, { Component } from 'react';

class Buttonclick4 extends React.Component {

    
    
        showAlert() {
            alert("One small step for a man.  One giant leap for mankind.");

    }
        render() {
            return (
                <button onClick={this.showAlert}>VICTORY</button>
            );
        }
    
}

export default Buttonclick4;