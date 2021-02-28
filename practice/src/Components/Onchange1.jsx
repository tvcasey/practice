import React, {Component} from 'react';

class Onchange1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }

    changeText(event) {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <div className="mixed">
                <label className="beginning" htmlFor="name">Put In Your Name</label>
                <input type="text" id="name" onChange={this.changeText.bind(this)} />
                <h1>{this.state.name}</h1>
            </div>

        );
    }
}

export default Onchange1;