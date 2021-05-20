import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../App.css";

class HomePage extends Component {
  render() {
  return (
    <div>
    
      
      <div className="home_content_area">
      <header id="home" class="bg-img bg">
      <h1 className="main-title pr-30">SprachOase</h1>
    
      <div className="pr-30">
      <div className="row">

      <div className="col s12">
        <Link to={`/Lessons`}>
          <button className="home_btn1">Student Portal</button>
        </Link>
        </div></div>
        <div className="row">
        <div className="col s12">
        <Link to={`/AboutMe`}>
          <button className="home_btn2">About Me</button>
        </Link>
        <Link to={`/Travels`}>
          <button className="home_btn2">Travels</button>
        </Link>
        </div></div>
        <div className="row">
        <div className="col s12">
        <Link to={`/ContactMe`}>
          <button className="home_btn3">Contact Me</button>
        </Link>
        </div></div>
      </div>
      </header>
      </div>
   
    </div>
   
   
  );
}
}

export default HomePage;
