import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import config from './config';
import './App.css';
//Material-UI
/*import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import '@fontsource/roboto'; //! change it later, just to make materialui happy*/
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  HomePage, //page
  Lessons, //student portal
  AboutMe, //page
  Travels, //page
  LogIn,
  MyNav,
  SignUp,
} from './components';

/*import {
  HomePage,
} from './components/pages';
*/




class App extends Component {

  state = {
    user: null,
    error: null,
    fetchingUser: true,
    lessons: [],
  }
  
  handleSignUp = (e) => {
    e.preventDefault()
    const {username, password} = e.target
    let newUser = {
      username: username.value, 
      password: password.value
    }

  axios.post(`${config.API_URL}/api/signup`, newUser, {withCredentials: true})
    .then((response) => {
      this.setState({
        user: response.data
      }, () => {
        this.props.history.push('/')
      })
    //! CHECK
    }).catch((err) => { 
      console.log('SignUp failed')
    });
  }

  handleLogIn = async (e) => {
    e.preventDefault()
    const {username, password} = e.target
    let newUser = {
      username: username.value,
      password: password.value
    }

  axios.post(`${config.API_URL}/api/login`, newUser, {withCredentials: true})
    .then((response) => {
      this.setState({
        user: response.data,
        //error: null
      }, () => {
        this.props.history.push('/')
      })
    }).catch((error) => {
      console.log(error.data);
      this.setState({
        error: error.response.data,
      })
    });
  }

  handleLogout = () => {
    axios.post(`${config.API_URL}/api/logout`, {}, {withCredentials: true})
        .then(() => {
          this.setState({
            user: null
          })
        })
        .catch((errorObj) => {
          this.setState({
            error: errorObj.response.data
          })
      })
  }


  //!_________________________________________________________________________

  componentDidMount() {
    axios
      .get(`${config.API_URL}/api/user`, { withCredentials: true })
      .then((response) => {
        this.setState({
          user: response.data,
          fetchingUser: false,
        });
      })
      .catch((error) => {
        console.log(error);
        // this.setState({
        //   error: error.response.data,
        //   fetchingUser: false,
        // });
      });
    axios
      .get(`${config.API_URL}/api/lessons`,  { withCredentials: true })
      .then((response) => {
        this.setState({
          courses: response.data,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.data,
        });
      });

    axios
      .get(`${config.API_URL}/api/users`, { withCredentials: true })
      .then((response) => {
        this.setState({
          userList: response.data,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.data,
        });
      });
    }
  
  

  render() {
    //const {user, error, fetchingUser} = this.state
  /*  if(fetchingUser){
  //! REPLACE THIS
      return <p>Loading...</p>
    }*/
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
         {/* <Route path="/signup" render={(routerProps) => {
            return <SignUp onSubmit={this.handleSignUp} {...routeProps}  />
          }}/>
          <Route path="/login"  render={(routeProps) => {
            return <LogIn error={error} onSubmit={this.handleLogIn} {...routeProps} /> 
          }}/>
          <Route path="/lessons/:lessonsId" render={(reouterProps) => {
            return <Lessons user={user} /> 
          }}/>
         {/* <Route path="/" render={(reouterProps) => {
            return < /> 
          }}/>
          <Route path="/" render={(reouterProps) => {
            return < /> 
          }}/>
          */}
          {/*!!! create components, link components in index.js, import components 

          <Route component={NotFound} />

          */}
        </Switch>
      </div>
    )
  }
}


export default withRouter(App);
