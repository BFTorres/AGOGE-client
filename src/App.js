import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import config from './config';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto';

import {
  HomePage, //landing page
  Lessons, //student portal
  LogIn,
  NotFound,
  MyNav,
  SignUp,
  AddLessons,
  LessonsDetail,
  EditLessons,
} from './components';

class App extends Component {
  state = {
    user: null,
    error: null,
    fetchingUser: true,
    lessons: [],
  };

  handleSignUp = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    let newUser = {
      username: username.value,
      password: password.value,
    };

    axios
      .post(`${config.API_URL}/api/signup`, newUser, { withCredentials: true })
      .then((response) => {
        this.setState(
          {
            user: response.data,
          },
          () => {
            this.props.history.push('/');
          },
        );
        //! CHECK
      })
      .catch(() => {
        console.log('SignUp failed');
      });
  };

  handleLogIn = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    let newUser = {
      username: username.value,
      password: password.value,
    };

    axios
      .post(`${config.API_URL}/api/login`, newUser, { withCredentials: true })
      .then((response) => {
        this.setState(
          {
            user: response.data,
            error: null,
          },
          () => {
            this.props.history.push('/lessons');
          },
        );
      })
      .catch((err) => {
        console.log('Something went wrong', err);
      });
  };

  handleLogout = () => {
    axios.post(`${config.API_URL}/api/logout`, {}, { withCredentials: true }).then(() => {
      this.setState(
        {
          user: null,
        },
        () => {
          this.props.history.push('/');
        },
      );
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let title = event.target.title.value;
    let description = event.target.description.value;
    let image = event.target.imageUrl.files[0];
    let formData = new FormData();
    formData.append('imageUrl', image);

    axios
      .post(`${config.API_URL}/api/upload`, formData)
      .then((response) => {
        //chaining promises
        return axios.post(
          `${config.API_URL}/api/create`,
          {
            title: title,
            description: description,
            image: response.data.image,
          },
          { withCredentials: true },
        );
      })
      .then((response) => {
        this.setState(
          {
            lessons: [response.data, ...this.state.lessons],
          },
          () => {
            this.props.history.push('/');
          },
        );
      })
      .catch((err) => {
        console.log('Create failed', err);
      });
  };

  handleEditLessons = (lessons) => {
    console.log(lessons);
    axios
      .patch(
        `${config.API_URL}/api/lessons/${lessons._id}`,
        {
          title: lessons.title,
          description: lessons.description,
        },
        { withCredentials: true },
      )
      .then(() => {
        let newLessons = this.state.lessons.map((singleLessons) => {
          if (lessons._id === singleLessons._id) {
            singleLessons.title = lessons.title;
            singleLessons.description = lessons.description;
          }
          return singleLessons;
        });
        this.setState(
          {
            lessons: newLessons,
          },
          () => {
            this.props.history.push('/');
            //this.props.history.push(`/lessons/${lessons._id}`)
          },
        );
      })
      .catch((err) => {
        console.log('Edit failed', err);
      });
  };

  handleDelete = (lessonsId) => {
    axios
      .delete(`${config.API_URL}/api/lessons/${lessonsId}`, { withCredentials: true })
      .then(() => {
        let filteredLessons = this.state.lessons.filter((lessons) => {
          return lessons._id !== lessonsId;
        });

        this.setState(
          {
            lessons: filteredLessons,
          },
          () => {
            this.props.history.push('/');
          },
        );
      })
      .catch((err) => {
        console.log('Delete failed', err);
      });
  };

  componentDidMount() {
    axios
      .get(`${config.API_URL}/api/lessons`, { withCredentials: true })
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

  render() {
    /*
    const {lessons, error, user, fetchingUser} = this.state
    if(fetchingUser){
  //! REPLACE THIS
      return <p>Loading...</p>
    }
    */
    const { lessons, error, user } = this.state;

    return (
      <div>
        <MyNav onLogout={this.handleLogout} user={this.state.user} />
        {/*<div className="pages">*/}
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => {
              return <HomePage {...routeProps} />;
            }}
          />
          <Route
            exact
            path="/lessons"
            render={() => {
              return <Lessons user={user} lessons={lessons} />;
            }}
          />
          {/* <Route exact path="/travels" render={(routeProps) => {
            return <Travels {...routeProps} />;
          } }/> */}
          {/* <Route exact path="/aboutme" render={(routeProps) => {
            return <AboutMe {...routeProps} />;
          } }/>   */}
          <Route
            path="/signup"
            render={(routeProps) => {
              return <SignUp error={error} onSubmit={this.handleSignUp} {...routeProps} />;
            }}
          />
          <Route
            path="/login"
            render={(routeProps) => {
              return <LogIn onSubmit={this.handleLogIn} {...routeProps} />;
            }}
          />
          <Route
            path="/addlessons/"
            render={() => {
              return <AddLessons onAdd={this.handleSubmit} />;
            }}
          />
          <Route
            path="/lessons/:lessonsId/edit"
            render={(routeProps) => {
              return (
                <EditLessons
                  user={user}
                  onEdit={this.handleEditLessons}
                  onDelete={this.handleDelete}
                  {...routeProps}
                />
              );
            }}
          />
          <Route
            exact
            path="/lessons/:lessonsId"
            render={(routeProps) => {
              return <LessonsDetail user={user} onDelete={this.handleDelete} {...routeProps} />;
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
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
