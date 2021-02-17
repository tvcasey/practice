

import React from 'react';

class Buttonclick3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: "Data Shows Before onClick."

        }
        this.updateState = this.updateState.bind(this);
    };

    updateState() {
        this.setState({data: "Data Updated From Child Component"})
    }
    render() {
        return (
            <div>
                <Content myDataProp = {this.state.data}
                    updateStateProp = {this.updateState}></Content>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                <button onClick = {this.props.updateStateProp}>UPDATE DATA</button>
                <h3>{this.props.myDataProp}</h3>
            </div>
        );
    }
}
export default Buttonclick3;