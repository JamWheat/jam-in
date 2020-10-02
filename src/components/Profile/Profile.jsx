import React, { Component } from 'react'
import './Profile.css'

export default class userProfile extends Component{
   
   render(){
      let usrId = this.props.history.location.pathname
      usrId = usrId.split('/')
      usrId = usrId[2]
      return(
         <>
         { this.props.user!==null ?
            <div className="profile">
               <div className='L'>
                  <h1>Hello{usrId}!</h1>
               </div>
               <div className='C'>
                  <h1>Hello {this.props.user._id===usrId?'h':'nope'}!</h1>
               </div>
               <div className='R'>
                  <h1>Hello!</h1>
               </div>
            </div>
         :
            <div className="profile">
               <div className='L'>
                  <h1>Hello!</h1>
               </div>
               <div className='C'>
                  <h1>Hello stranger!</h1>
               </div>
               <div className='R'>
                  <h1>Hello!</h1>
               </div>
            </div>
         }
         </>
         
      );
   }
}