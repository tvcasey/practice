

import React, {Component} from "react";
import './components.css';
import App from "../App";

export default class Buttonclick extends Component {

//export default function App() {}

        constructor(props) {
            super(props);
            this.state = {
        
                Data: [
                {
                    "_id": "112233",
                    "country": "United States",
                    "GDP":  "15 trillion dollars"
                },
                {
                    "_id": "112244",
                    "country": "Brazil",
                    "GDP":  "9 trillion dollars"
                },
                {
                    "_id": "112255",
                    "country": "Russia",
                    "GDP":  "1 trillion dollars"
                },
                {
                    "_id": "112266",
                    "country": "India",
                    "GDP":  "6 trillion dollars"
                },   
                {
                    "_id": "112277",
                    "country": "China",
                    "GDP":  "16 trillion dollars"
                },
                {
                    "_id": "112288",
                    "country": "Germany",
                    "GDP":  "9 trillion dollars"
                }
                ]
        
            }}
        clickMe(item) {
            alert("Hey this onClick is working baby!");
            console.log(item);
            }
        render() {
            return (
                <div className="Buttonclick">
                    <header className="Header">
                        <h1>Click the Country</h1>
                        <h3>Pass Data with onClick</h3>
                        <br />
                    </header>
                <div>
                    {this.state.Data.map((item, index) => (
                        <p>
                            <a onClick={this.clickMe.bind(this, item)}>
                                {item.country}
                                <br />
                                <br />
                                {item.GDP}
                            </a>
                        </p>

                    
                    ))}
                </div>





                </div>


            );
        }
    }


    
  
//export default Buttonclick;