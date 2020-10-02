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
                <option value=""></option>
                <option value="art">Art</option>
                <option value="boardgames">Board Games</option>
                <option value="concerts">Concerts</option>
                <option value="dance">Dance</option>
                <option value="education">Education</option>
                <option value="hangouts">Hang Outs</option>
                <option value="networking">Networking</option>
                <option value="party">Party</option>
                <option value="plays">Plays</option>
                <option value="videogames">Video Games</option>
                <option value="workouts">Workout</option>
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