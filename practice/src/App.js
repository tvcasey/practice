import React from 'react';
import './App.css';
import Buttonclick from "./Components/Buttonclick";
import Buttonswitch from "./Components/Buttonswitch";

const App = () => {
  return (
    
      
    <div className="App">
      <Buttonclick/>
      <Buttonswitch/>
      <h1>Hello World</h1>
      <p>This is an application to figure out event handlers and on..events.
        It is going to be fun, but it won't accomplish much as an application.
        I'm also going to get used to react, which is the goal.
      </p>
    </div>

  );
}

export default App;
