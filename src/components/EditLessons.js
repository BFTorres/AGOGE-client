import axios from 'axios'
import React, { Component } from 'react'
import config from '../config'

class EditLessons extends Component {

  state = {
    lessons: {}
  }

  componentDidMount(){
    console.log(this.props) 
    let lessonsId = this.props.match.params.lessonsId
    axios.get(`${config.API_URL}/api/lessons/${lessonsId}`)
      .then((response) => {
        this.setState({
          image: response.data
        })
      })
      .catch(() => {
        console.log('Detail fetch failed')
      })
  }

  handleTitleChange = (event) => {
    let text = event.target.value
    console.log(text)
    let cloneLessons = JSON.parse(JSON.stringify(this.state.lessons))
    cloneLessons.title = text

    this.setState({
      lessons: cloneLessons
    })
  }

  handleDescChange = (event) => {
    let text = event.target.value
    let cloneLessons = JSON.parse(JSON.stringify(this.state.lessons))
    cloneLessons.description = text

    this.setState({
      lessons: cloneLessons
    })
  }

  render() {
    const {lessons} = this.state
    const {onEdit} = this.props
    return (
      <div>
          <h5>Title</h5><input type="text" onChange={this.handleTitleChange} value={lessons.title}/>
          <h5>Description</h5> <input type="text" onChange={this.handleDescChange} value={lessons.description}/>
          
          <button onClick={ () => { onEdit(lessons) } }  >Submit</button>

      </div>
    )
  }
}

export default EditLessons