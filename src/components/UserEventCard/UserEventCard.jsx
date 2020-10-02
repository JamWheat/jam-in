import React from 'react'
import { Link } from 'react-router-dom'

const UserEventCard = ({event, user}) => {
  // const dateTime = props.event.dateTime
  // const month = dateTime.toDateString()
  return (
    <>
      <img src={event.image ? event.image : 'https://picsum.photos/100/50'}></img>
      {event.dateTime}
      <span className='event-title'>{event.title}</span>
      {event.host = user._id ? 
        <>
         {/* <Link
            className=''
            to={{
              pathname: '/editevent',
              // state: {thisEvent} 
            }}
          >
            Edit
        </Link> */}
        <button
          onClick={() => this.handleCancelEvent(event._id)}
        >
          Cancel
        </button>
       </>
      : 
       <>
       </>}
    </>
  );
}
 
export default UserEventCard;