import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Profile from '../../components/Profile/Profile'
import "./App.css";
import EventDetails from '../EventDetails/EventDetails'
import CreateEvent from '../CreateEvent/CreateEvent'
import FilterEventsForm from "../../components/FilterEventsForm/FilterEventsForm";

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
        <Route path='/profile/:id' render={({history})=>(<Profile history={history} user={user}/>)} />
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
      </>
    );
  }
}

export default App;
