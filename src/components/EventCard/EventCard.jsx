import React from 'react'

const EventCard = ({event}) => {
  return (
    <>
      
      <img src={event.image ? event.image : 'https://picsum.photos/100/50'}></img>
      {event.dateTime}
      {event.title}
      <span className='event-title'>{event.title}</span>
    </>
  );
}
 
export default EventCard;