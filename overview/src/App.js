import React, { Component } from "react";
import "./App.css";
import NavBtn from "./components/NavBtn";
import FormAdd from "./components/FormAdd";

class App extends Component {
  render() {
    return (
      <div>
        <NavBtn />
        <FormAdd />
      </div>
    );
  }
}

export default App;
