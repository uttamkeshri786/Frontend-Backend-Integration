import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Error from "./components/Error"

import Home from "./pages/Home";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router >
        <div id="application">
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route element={Error} />
          </Routes>
        </div>
      </Router>
    )
  }
}