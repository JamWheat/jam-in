import React, { Component } from 'react'
import * as eventAPI from '../../services/eventServices'

class EventDetails extends Component {
  state = {
    event: {}
  }

  async componentDidMount() {
    const event = await eventAPI.eventDetails(this.props.match.params.id)
    this.setState({ event })
  }

  render() { 
    return (
      <>
        <h1>Event Details</h1>
      </>
    );
  }
}
 
export default EventDetails;