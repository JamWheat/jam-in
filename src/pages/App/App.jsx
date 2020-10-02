import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import "./App.css";
import EventDetails from '../EventDetails/EventDetails'
import CreateEvent from '../CreateEvent/CreateEvent'
import Profile from '../Profile/Profile'
import EditEvent from '../EditEvent/EditEvent'
import LandingPage from '../LandingPage/LadningPage'

class App extends Component {
  state = {
    user: authService.getUser(),
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  render() {
    const {user} = this.state
    return (
      <>
        <NavBar user={user} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <h1>Welcome to JamIn</h1>
              <LandingPage 
                user = {this.state.user}
              />
            </main>
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact path="/eventdetails/:id"
          render={({match}) => 
            <EventDetails 
              match={match}
              user={this.state.user}
            />
          }
        />
        <Route
          exact path="/createevent"
          render={({history}) => 
            <CreateEvent 
              history = {history}
            />
          }
        />
        <Route
          exact path="/profile"
          render={() => 
            <Profile 
              user = {this.state.user}
            />
          }
        />
        <Route
          exact path="/editevent"
          render={({location}) => 
            <EditEvent 
              user = {this.state.user}
              location = {location}
            />
          }
        />
      </>
    );
  }
}

export default App;
