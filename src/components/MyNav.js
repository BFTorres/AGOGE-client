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
          <Link to="/"> Homepage</Link>
          <Link to="/lessons">Student Portal</Link>
          <Link  to="/addlesson">Add Lesson</Link>
          {
            props.user ? (
              <button onClick={props.onLogout} type="button" class="btn btn-light">Logout</button>
            ) : (
              <>
                <Link to="/login">LogIn</Link>
                <Link to="/signup">SignUp</Link>
              </>
            )
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}
export default MyNav