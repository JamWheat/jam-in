import React, { Component } from 'react'
import * as eventAPI from '../../services/eventServices'

class AddEventForm extends Component {
  state = {
    invalidForm: true,
    formData: {
      title: '',
      desc: '',
      dateTime: '',
      // time: '',
      catagory: '',
      ticketed: false,
      url: ''
    }
  }

  formRef = React.createRef()

  handleAddImage = async newEventData => {
    await eventAPI.create(newEventData)
      .then(
        console.log()
      )
      // .then(() => this.props.history.push(`/gallery/${this.props.user._id}`))
  }

  handleSubmit = e => {
    e.preventDefault();
    this.handleAddImage(this.state.formData)
  }

  handleChange = e => {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value };
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  }
  
  render() { 
    return (
      <>
        <div className='form-div'>
          <form ref={this.formRef} onSubmit={this.handleSubmit}>
            <div>
              <label>Title</label>
              <input name="title" type="text" value={this.state.formData.title} onChange={this.handleChange} required />
            </div>
            <div>
              <label>Description</label>
              <input name="desc" type="text" value={this.state.formData.desc} onChange={this.handleChange} required />
            </div>
            <div>
              <label>Event Url</label>
              <input name="url" type="text" value={this.state.formData.url} onChange={this.handleChange} required />
            </div>
            <div>
              <label>Date and Time</label>
              <input name="dateTime" type="datetime-local" value={this.state.formData.date} onChange={this.handleChange} required />
            </div>
            {/* <div>
              <label>Time</label>
              <input name="time" type="time" value={this.state.formData.time} onChange={this.handleChange} required />
            </div> */}
            <div>
              <select name="catagory" onChange={this.handleChange} value={this.state.formData.catagory} required>
                <option value=""></option>
                <option value="concert">Concert</option>
                <option value="forum">Forum</option>
                <option value="hang">Hang Out</option>
              </select>
            </div>
            <div>
              <select name="ticketed" onChange={this.handleChange} value={this.state.formData.tickered} required>
                <option value="false">Not Ticketed</option>
                <option value="true">Ticketed</option>
              </select>
            </div>
            <div className=''>
              <button
                className=''
                type="submit"
                disabled={this.state.invalidForm}
              >
                Add Event
              </button>
            </div>
            {/* cancel button */}
          </form>
        </div>
      </>
    );
  }
}
 
export default AddEventForm;