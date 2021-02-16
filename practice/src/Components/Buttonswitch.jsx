import React from 'react';




class Buttonswitch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {switchOn: true};

        //since handleClick does not use () usually used by a function
        //it has to be bind(this) so the onClick will work.
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.setState(prevState => ({
            switchOn: !prevState.switchOn
        
        }));
    }

        render() {
            return (
                <button onClick={this.handleClick}>
                    {this.state.switchOn ? 'ON' : 'OFF'}
                    
                </button>
            );
        }
    }
export default Buttonswitch;

//This code comes from Handling Events from reactjs.org.
