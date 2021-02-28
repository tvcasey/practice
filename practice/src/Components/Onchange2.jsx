import React, { Component } from 'react';
import { render } from 'react-dom';


export default class Onchange2 extends React.Component {
    constructor() {
        super();
        this.state = {
            category: "JavaScript"
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({category: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>React Dropdown onChange Example- ISS</h1>
                <form onSubmit={this.handleSubmit}>
                    <strong>Make a Choice My Friend</strong>
                    <select value={this.state.category} onChange={this.handleChange}>
                        <option value="for loop">Iteration</option>
                        <option value="if statement">Boolean</option>
                        <option value="function">Does the Work</option>
                        <option value="dot notation">Path to Objects</option>
                        <option value="concatenation">Add Together</option>
                    </select>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}