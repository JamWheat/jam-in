import React, { Component } from 'react'
import AddEventForm from '../../components/AddEventForm/AddEventForm'

class CreateEvent extends Component {
  state = {

  }

  render() { 
    return (
      <>
        <h1>Create an Event</h1>
        <AddEventForm />
      </>
    );
  }
}
 
export default CreateEvent;