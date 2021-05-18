import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Lessons extends Component {
  
  render() {
    const {lessons} = this.props
    return (
      <div className="lessons-page">
        <h1>Student Portal</h1>
          <h4>Lessons</h4>
          {
            lessons.map((lessons) => {
              return <Link key={lessons._id} to={`/lessons/${lessons._id}`}>
                <div >{lessons.name}</div>
                </Link>
            })
          }
        
      </div>



    )
  }
}



export default Lessons;