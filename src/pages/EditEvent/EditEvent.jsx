import React, { Component } from 'react'

class EditEvent extends Component {
  state = {
    invalidForm: false,
    formData: ''
  }

  formRef = React.createRef()

  handleUpdateEvent = async updatedEventData => {
    await eventAPI.update(updatedEventData)
      // .then(() => this.props.history.push(`/gallery/${this.props.user._id}`))
  }

  handleSubmit = e => {
    e.preventDefault();
    this.handleUpdateEvent(this.state.formData)
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
        <div className=''>
          <form ref={this.formRef} onSubmit={this.handleSubmit}>
            <div>
              <label>Ti  tle</label>
              <input name="title" type="text" value={this.state.formData.title} onChange={this.handleChange} required />
            </div>
            <div>
              <label>Description</label>
              <input name="desc" type="text" value={this.state.formData.desc} onChange={this.handleChange} required />
            </div>
            {/* <div>
              <label>Event Url</label>
              <input name="url" type="text" value={this.state.formData.url} onChange={this.handleChange} required />
            </div> */}
            <div>
              <label>Date and Time</label>
              <input name="dateTime" type="datetime-local" value={this.state.formData.date} onChange={this.handleChange} required />
            </div>
            <div>
              <label>Time Zone</label>
              <select name="zone" onChange={this.handleChange} value={this.state.formData.zone} required>
                <option value=""></option>
                <option value="EST">EST</option>
                <option value="CST">CST</option>
                <option value="MST">MST</option>
                <option value="PST">PST</option>
              </select>
            </div>
            {/* <div>
              <label>Time</label>
              <input name="time" type="time" value={this.state.formData.time} onChange={this.handleChange} required />
            </div> */}
            <div>
              <label>Catagory</label>
              <select name="catagory" onChange={this.handleChange} value={this.state.formData.catagory} required>
                <option value=""></option>
                <option value="concert">Concert</option>
                <option value="forum">Forum</option>
                <option value="hang">Hang Out</option>
              </select>
            </div>
            <div>
              <label>Ticketed?</label>
              <select name="ticketed" onChange={this.handleChange} value={this.state.formData.tickered} required>
                <option value=""></option>
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
 
export default EditEvent;