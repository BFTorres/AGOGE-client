import React from  'react'
import {Navbar, Nav} from  'react-bootstrap'
import {Link} from  'react-router-dom'


function MyNav(props) {
  const { user, onLogout } = props
  return (
    <Navbar  bg="dark"  expand="lg">
      <Navbar.Toggle  aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse  id="basic-navbar-nav">
        <Nav  className="mr-auto">
          <Link to="/">
          Homepage</Link>
          <Link  style={{marginLeft: '10px'}}  to="/add-form">Student Portal</Link>
          {
            user ? (
              <button onClick={onLogout} >Logout</button>
            ) : (
              <>
                <Link  style={{marginLeft: '10px'}}  to="/login">LogIn</Link>
                <Link  style={{marginLeft: '10px'}}  to="/signup">SignUp</Link>
              </>
            )
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}
export default MyNav