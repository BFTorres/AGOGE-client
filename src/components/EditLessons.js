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
    console.log('here ',)
    axios.get(`${config.API_URL}/api/lessons/${lessonsId}`, {withCredentials: true})
      .then((response) => {
        this.setState({ lessons: response.data })
      })
      .catch(() => {
        console.log('Detail fecth failed')
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
    const {onDelete} = this.props
    console.log(this.props)
    return (
      <div>
          <h5>Title</h5>
          <img style={{ width: '400px' }} src={lessons.imageUrl} alt={lessons.title} />
          <div>
          {lessons.title}
          </div>
          <input type="text" onChange={this.handleTitleChange} value={lessons.title}/>
          <h5>Description</h5> <input type="text" onChange={this.handleDescChange} value={lessons.description}/>
          
          <button onClick={ () => { onEdit(lessons) } }  >Submit Changes</button>

          <button onClick={() => { onDelete(lessons._id)  } } >Delete</button>

      </div>
    )
  }
}

export default EditLessons