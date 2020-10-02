import React, { Component } from 'react'

class FilterEventsForm extends Component {
  state = {
    filteredEvents: [],
    invalidForm: true,
    formData: {
      catagory: '',
      startDateTime: '',
    }
  }

  

  formRef = React.createRef()

  

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleFilterEvents(this.state.formData)
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
              <option value="" disabled>Chose a catagory</option>
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