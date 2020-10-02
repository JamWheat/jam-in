import React, { Component } from 'react'
import EventCard from '../../components/EventCard/EventCard';
import FilterEventsForm from '../../components/FilterEventsForm/FilterEventsForm';
import * as eventAPI from '../../services/eventServices'

class LandingPage extends Component {
  state = {
    filteredEvents: []
  }

  handleFilterEvents = async filterData => {
    const filteredEvents = await eventAPI.filter(filterData)
    // .then(() => this.props.history.push(`/projects/${this.props.user._id}`))
    this.setState({ filteredEvents })
    // (console.log(filteredEvents))
  }

  render() { 
    return (
      <>
        <FilterEventsForm 
          handleFilterEvents = {this.handleFilterEvents}
        />
        {this.state.filteredEvents.map(event => 
          <div key={event._id}>
            <a href={`/eventdetails/${event._id}`}>
              <EventCard 
              event = {event}
              />
            </a>
          </div>
          )}
      </>
    );
  }
}
 
export default LandingPage;