import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./Components/nav";
import Blog from "./Components/Blog";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="Blog" element={<Blog />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
