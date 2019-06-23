import React, { Component } from "react";
import "./App.css";
import NavBtn from "./components/NavBtn";
import FormAdd from "./components/FormAdd";
import Chart from "./components/Chart";

class App extends Component {
  render() {
    return (
      <div>
        <NavBtn />
        <FormAdd />
        <Chart />
      </div>
    );
  }
}

export default App;
