import React, { Component } from 'react';
import { Link } from "react-dom";
import "../App.css";

class HomePage extends Component {
  render() {
  return (
    <div>
      <div className="home_content_area">
      <header class="bg">
      <div class="right flex">
        <Link to={`/lessons`}>
          <button className="home_btn1">Student Portal</button>
        </Link>
        <Link to={`/AboutMe`}>
          <button className="home_btn2">About Me</button>
        </Link>
        <Link to={`/Travels`}>
          <button className="home_btn2">Travels</button>
        </Link>
        <Link to={`/ContactMe`}>
          <button className="home_btn3">Contact Me</button>
        </Link>
      </div>

      </header>

      </div>
      <div className="home_footer">

      </div>
   </div>
  );
}
}

export default HomePage;