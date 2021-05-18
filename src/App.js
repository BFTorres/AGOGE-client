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
    }).catch(() => { 
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
        error: null
      }, () => {
        this.props.history.push('/')
      })
    }).catch((errorObj) => {
      this.setState({
        error: errorObj.response.data,
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

  handleSubmit = (event) => {
    event.preventDefault()
    let name = event.target.name.value
    let description = event.target.description.value

    axios.post(`${config.API_URL}/api/create`, {
      name: name,
      description: description,
      completed: false,
    }, {withCredentials: true})
      .then((response) => {
          this.setState({
            todos: [response.data, ...this.state.todos]
          }, () => {
            this.props.history.push('/')
          })

      })
      .catch((err) => {
        console.log('Create failed', err)
      })
  }


  //!_________________________________________________________________________

  componentDidMount() {
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
      .get(`${config.API_URL}/api/user`, { withCredentials: true })
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
        <MyNav onLogout={this.handleLogout} user={this.state.loggedInUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signup"  render={(routeProps) => {
                return  <SignUp onSignUp={this.handleSignUp} {...routeProps}  />
          }}
          />
          <Route path="/login"  render={(routeProps) => {
                return  <LogIn onLogIn={this.handleLogIn} {...routeProps}  />
          }}
          />
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
