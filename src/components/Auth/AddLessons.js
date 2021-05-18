import React, { Component } from 'react'

class AddLessons extends Component {

  render() {
    return (
      <form onSubmit={this.props.onAdd}>
        <input name="title" type="text" placeholder="Enter Lesson"/>
        <input name="description" type="text" placeholder="Enter description"/>
        <input name="imageUrl" type="file"  accept="image/jpeg, image/jpg"></input>
        <button type="submit" >Submit</button>
      </form>
    )
  }
}


export default AddLessons