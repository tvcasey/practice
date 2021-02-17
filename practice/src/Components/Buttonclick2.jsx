//Child Events for a onClick event
import React from 'react';


class Buttonclick2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "Data Before the onClick"
        }
        this.updateState = this.updateState.bind(this);
    };
    updateState() {
        this.setState({data: "Data coming from the Child Component"})
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
            <button onClick = {this.props.updateStateProp}>These Props are the Tops!</button>
            <h3>{this.props.myDataProp}</h3>
        </div>
    );

    }


}

export default Buttonclick2;