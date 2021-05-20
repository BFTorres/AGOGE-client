import axios from 'axios'
import React, { Component } from 'react'
import config from '../config'
import {Link, Redirect} from 'react-router-dom'

 class LessonsDetail extends Component {

  state = {
    lessons: {}
  }

  componentDidMount(){
    console.log(this.props) 
 
   let lessonsId = this.props.match.params.lessonsId
    axios.get(`${config.API_URL}/api/lessons/${lessonsId}`, {withCredentials: true})
      .then((response) => {
        this.setState({ lessons: response.data })
      })
      .catch(() => {
        console.log('Detail fecth failed')
      })
  }

  render() {
    const {lessons} = this.state
    const {onDelete, user} = this.props
    console.log(this.props)

    if(!user){
      return <Redirect to={'/login'} />
    }

    return (
      <div>
        <h4>Lesson:</h4>
        <div>Title: {lessons.title}</div>
        {
          lessons.image && (
            <img style={{ width: '400px' }} src={lessons.image} alt={lessons.title} loading="lazy"/>
          )
        }
        <div>Description: {lessons.description}</div>
        <Link to={`/lessons/${lessons._id}/edit`}>
          <button>Edit</button>
        </Link>
        <button onClick={() => { onDelete(lessons._id)  } } >Delete</button>
      </div>
    )
  }
}

export default LessonsDetail