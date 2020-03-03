import React from "react";
import "./App.css";
import Menu from "./menu.js";
import Home from "./home.js";
import About from "./about.js";
import Contact from "./contact.js";
import Media from "./media.js";

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Home></Home>
      <About></About>
      <Contact></Contact>
      <Media></Media>
    </div>
  );
}

export default App;
