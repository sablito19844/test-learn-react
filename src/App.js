import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./Component/nav";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
