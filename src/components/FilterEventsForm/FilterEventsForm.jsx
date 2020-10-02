import React, { Component } from 'react'
import * as eventAPI from '../../services/eventServices'

class FilterEventsForm extends Component {
  state = {
    invalidForm: true,
    formData: {
      catagory: '',
      startDateTime: '',
    }
  }

  

  formRef = React.createRef()

  handleFilterEvents = async filterData => {
    await eventAPI.filter(filterData)
      // .then(() => this.props.history.push(`/projects/${this.props.user._id}`))
  }

  handleSubmit = e => {
    e.preventDefault();
    this.handleFilterEvents(this.state.formData)
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
        <form ref={this.formRef} onSubmit={this.handleSubmit}>
          <div>
            <select name="catagory" onChange={this.handleChange} value={this.state.formData.catagory} required>
              <option value="" disabled selected>Chose a catagory</option>
              <option value="concert">Concert</option>
              <option value="forum">Forum</option>
              <option value="hang">Hang Out</option>
            </select>
          </div>
          <div>
              <label></label>
              <input name="startDateTime" type="datetime-local" value={this.state.formData.startDateTime} onChange={this.handleChange} required />
            </div>
          <div className=''>
            <button
              className=''
              type="submit"
              disabled={this.state.invalidForm}
            >
              Find Events
            </button>
          </div>
        </form>
      </>
    );
  }
}
 
export default FilterEventsForm;