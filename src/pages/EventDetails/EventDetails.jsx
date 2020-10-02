import React, { Component } from 'react'
import * as eventAPI from '../../services/eventServices'

class EventDetails extends Component {
  state = {
    event: {
      host: '',
      attending: []
    }
  }

  async componentDidMount() {
    const event = await eventAPI.eventDetails(this.props.match.params.id)
    this.setState({ event })
  }

  handleUserAttend = async (userid, eventID) => {
    const userID = { boop: userid }
    await eventAPI.userAttend(userID, eventID)
    // const image = this.state.images.find(i => i._id === id)
    // const updatedProject = this.state.project
    // updatedProject.images.push(image)
    // this.setState({ project: updatedProject })
  }

  handleUserUnattend = async (userid, eventID) => {
    const userID = { boop: userid }
    await eventAPI.userUnattend(userID, eventID)
    // const updatedProject = this.state.project
    // const idx = updatedProject.images.findIndex(i => i._id === id)
    // updatedProject.images.splice(idx, 1)
    // this.setState({ project: updatedProject })
  }

  render() { 
    const event = this.state.event
    return (
      <>
        <h1>Event Details</h1>
        <div>
          <img src={event.image ? event.image : 'https://picsum.photos/300/200'}></img>
          {event.dateTime}
          {event.title}
          by {event.host.name}
        </div>
        <div>
          <h4>About This Event</h4>
          {event.desc}
        </div>
        <div>
          {event.attending.includes(this.props.user._id)?
           <button
           onClick={() => this.handleUserUnattend(this.props.user._id, event._id)}
           >
             Unattend
           </button>
          : 
          <>
          <button
           onClick={() => this.handleUserAttend(this.props.user._id, event._id)}
           >
             Attend Event
           </button>
          </>}
        </div>
      </>
    );
  }
}
 
export default EventDetails;