import React, { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Component/Home'
import About from './Component/About'
import Nav from './Component/Nav'

class App extends Component {
  render() {
    return (
      <div>
      <Nav />
      < BrowserRouter >
        <Routes>

          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />

          </ Routes>
          </ BrowserRouter >
          </div>
          ) 
  }
}
export default App