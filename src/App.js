import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
//import config from './config';
import './App.css';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import '@fontsource/roboto'; //! change it later, just to make materialui happy




class App extends Component {

  state = {
    user: null,
    error: null,
    fetchingUser: true,
  }



  render() {

    const {user, error, fetchingUser} = this.state
    if(fetchingUser){
  //! REPLACE THIS
      return <p>Loading...</p>
    }


    return (
      <div>
      
        <Switch>
          <Button variant="contained" color="primary">
            Hello World
         </Button>
        </Switch>
      </div>
    )
  }
}


export default withRouter(App);
