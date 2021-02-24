import React from 'react';
import './App.css';
//import styles from './Components/Components.module.css';
import Buttonclick from "./Components/Buttonclick";
import Buttonswitch from "./Components/Buttonswitch";
import Buttonclick3 from "./Components/Buttonclick3";
import Buttonclick2 from "./Components/Buttonclick2";
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttonclick4 from "./Components/Buttonclick4";
import Onchange1 from "./Components/Onchange1";

const App = () => {
  return (
    
      
    <div className="App">
      <Buttonclick/>
      <Buttonswitch/>
      <Buttonclick3/>
      <Buttonclick2/>
      <Buttonclick4/>
      <Onchange1/>
      <h1>Hello World</h1>
      <p className="col-md-6">This is an application to figure out event handlers and on..events.
        It is going to be fun, but it won't accomplish much as an application.
        I'm also going to get used to react, which is the goal.
      </p>
    </div>

  );
}



export default App;
