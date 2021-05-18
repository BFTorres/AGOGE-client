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
  NotFound,
  MyNav,
  SignUp,
  AddLessons,
  
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
    lessons: []
    //lessons: [],
  }

  componentDidMount() {
    axios
      .get(`${config.API_URL}/api/lessons`,  { withCredentials: true })
      .then((response) => {
        this.setState({
          lessons: response.data,
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
          user: response.data,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.data,
        });
      });
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

  handleLogIn = (e) => {
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
        this.props.history.push('/lessons')
      })
    }).catch((err) => {
      console.log('Something went wrong', err)
  })
}

  handleLogout = () => {
    axios.post(`${config.API_URL}/api/logout`, {}, {withCredentials: true})
        .then(() => {
          this.setState({
            user: null
          }, () => {
            this.props.history.push('/')
          })
      })
    
     }

  handleSubmit = (event) => {
    event.preventDefault()
    let name = event.target.name.value
    let description = event.target.description.value
    let image = event.target.imageUrl.files[0]
    let formData = new FormData()
    formData.append( 'imageUrl' ,  image   )

    axios.post(`${config.API_URL}/api/upload`, formData)
      .then((response) => {
        //chaining promises
        return  axios.post(`${config.API_URL}/api/create`, {
                    name: name,
                    description: description,
                    completed: false,
                    image: response.data.image
                  }, {withCredentials: true})
      })
      .then((response) => {
          this.setState({
            lessons: [response.data, ...this.state.lessons]
          }, () => {
            this.props.history.push('/')
          })

      })
      .catch((err) => {
        console.log('Create failed', err)
      })
  }


  //!_________________________________________________________________________

  handleAddLessons = (event) => {
    event.preventDefault();
    const {user} = this.state;
    const {title, description} = event.target;
    let newLesson = {
      title: title.value,
      description: description.value,
      //!owner? like Jorge said
      //!img!!!
    }
    
  }

  handleEditLessons = (lessons) => {
    axios.patch(`${config.API_URL}/api/lessons/${lessons._id}`, {
      name: lessons.name,
      description: lessons.description,
      completed: lessons.completed,
    }, {withCredentials: true})
      .then(() => {
          let newLessons = this.state.lessons.map((singleLessons) => {
              if (lessons._id === singleLessons._id) {
                singleLessons.name  = lessons.name
                singleLessons.description = lessons.description
              }
              return singleLessons
          })
          this.setState({
            lessons: newLessons
          }, () => {
            this.props.history.push('/lessons')
          })

          
      })
      .catch((err) => {
        console.log('Edit failed', err)
      })
  }
  
  //!Cloudinary

  render() {
    //const {user, error, fetchingUser} = this.state
  /*  if(fetchingUser){
  //! REPLACE THIS
      return <p>Loading...</p>
    }*/
    const {lessons, error, user} = this.state

    return (
      <div>
        <MyNav onLogout={this.handleLogout} user={this.state.user}/>
        <div className="pages">
        <Switch>
          <Route exact path="/" render={(routeProps) => {
            return <HomePage {...routeProps} />;
          } }/>
          <Route path="/signup"  render={(routeProps) => {
                return  <SignUp onSubmit={this.handleSignUp} {...routeProps}  />
          }}
          />
          <Route path="/login"  render={(routeProps) => {
                return  <LogIn onSubmit={this.handleLogIn} {...routeProps}  />
          }}
          />
          <Route path="/lessons" render={() => {
            return <Lessons lessons={lessons} />;
          } }          
          />
          <Route path="/addlessons/" render={() => {
            return <AddLessons onAdd={this.handleSubmit} />;
          } }          
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
          <Route component={NotFound} />
        </Switch>
        </div>
      </div>
    )
  }
}


export default withRouter(App);
