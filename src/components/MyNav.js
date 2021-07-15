import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../images/agoge-logo-removebg-preview.png';
import '../App.css';

function MyNav(props) {
  //const { user, onLogout } = props

  //usertype visibility!!!

  return (
    <Navbar className="bg-light" bg="light" expand="xxxl">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">Home</Link>

          <Link to="/lessons">Student Portal</Link>
          {props.user?.usertype === 'Teacher' && <Link to="/addlessons">Add Lesson</Link>}
          {props.user?.usertype === 'Student' && <Link to="/studentprofile">Student Profile</Link>}
          {props.user ? (
            <Link onClick={props.onLogout} type="">
              Logout
            </Link>
          ) : (
            <>
              <Link to="/login">Log In</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default MyNav;
