import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import "./App.css";
import EventDetails from '../EventDetails/EventDetails'
import CreateEvent from '../CreateEvent/CreateEvent'
import FilterEventsForm from "../../components/FilterEventsForm/FilterEventsForm";
import Profile from '../Profile/Profile'

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
              <FilterEventsForm />
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
          exact path="/eventdetails"
          render={() => 
            <EventDetails />
          }
        />
        <Route
          exact path="/createevent"
          render={() => 
            <CreateEvent />
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
      </>
    );
  }
}

export default App;
