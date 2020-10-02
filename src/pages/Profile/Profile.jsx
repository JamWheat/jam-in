import React, { Component } from 'react'
import * as eventAPI from '../../services/eventServices'
// import './Profile.css'

class Profile extends Component {
   state = {
      events: []
   }

   // async componentDidMount() {
   //    const events = await eventAPI.getForUser(this.props.user.id);
   //    this.setState({ events })
   // }

   render() { 
      return (
         <>
         <h1>Profile</h1>
         </>
      );
   }
}
 
export default Profile;

// export default class userProfile extends Component{
   
//    render(){
//       let usrId = this.props.history.location.pathname.split('/')
//       usrId = usrId[2]
//       let x=[]
//       // this will be used to grab all the event data and format it into a table. for loop will be replaced with map
//       function eventDates(){
//          for(let i = 0; i < 10; i++)
//          {x.push(<tr><td>calender</td><td>data</td><td>goes</td><td>here</td></tr>)}
//          return x
//       }
      
//       return(
//          <>
//          { this.props.user!==null ?
//             <div className="profile">
//                <div className='L'>
//                   <h1>Hello!</h1>
//                </div>
//                <div className='C'>
//                   <h1>Hello {this.props.user._id===usrId?'yeah':'nope'}!</h1>
//                   <div>
//                      <table>
//                         <tbody>
//                            <tr><td colSpan='2'>name: {this.props.user.name}</td><td colSpan='2'>other info</td></tr>
//                            <tr><td colSpan='4'>bio</td></tr>
//                            {eventDates()}
//                         </tbody>
//                      </table>
//                   </div>
//                </div>
//                <div className='R'>
//                   <h1>Hello!</h1>
//                </div>
//             </div>
//          :
//             <div className="profile">
//                <div className='L'>
//                   <h1>Hello!</h1>
//                </div>
//                <div className='C'>
//                   <h1>Hello stranger!</h1>
//                   <div>
//                      <table>
//                         <tbody>
//                            <tr><td colSpan='2'>name goes here</td><td colSpan='2'>other info</td></tr>
//                            <tr><td colSpan='4'>bio</td></tr>
//                            {eventDates()}
//                         </tbody>
//                      </table>
//                   </div>
//                </div>
//                <div className='R'>
//                   <h1>Hello!</h1>
//                </div>
//             </div>
//          }
//          </>
         
//       );
//    }
// }