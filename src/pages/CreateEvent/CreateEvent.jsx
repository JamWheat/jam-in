import React, { Component } from 'react'
import AddEventForm from '../../components/AddEventForm/AddEventForm'
import * as eventAPI from '../../services/eventServices'

class CreateEvent extends Component {
  state = {

  }

  handleAddEvent = async newEventData => {
    const newEvent = await eventAPI.create(newEventData)
      .then(() => this.props.history.push(`/profile`))
  }

  render() { 
    return (
      <>
        <h1>Create an Event</h1>
        <AddEventForm 
          handleAddEvent = {this.handleAddEvent}
        />
      </>
    );
  }
}
 
export default CreateEvent;