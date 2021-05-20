import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function Lessons(props) {

    const showLessons = () => {
    
    
        /*
            <div className="lessons-page">
        <h1>Student Portal</h1>
          <h4>Lessons</h4>
          </div>
        */
      return props.lessons.map(lessons => {
        return (
          <div>
            <h4>Lesson</h4> 
              
            <div key={lessons._id}>
              <div class="SP-img">


            

              <img  src={lessons.image} alt='image' /> 
              <div>
                <Link to={`/lessons/${lessons._id}`}><h2>{lessons.title}</h2></Link>
                
                <div class="lesson-decription">
                <p>{lessons.description}</p>
                {
                props.user?.usertype === "Teacher" &&
               <Link to={`/lessons/${lessons._id}/edit`}>
                <button>Edit</button>
                </Link>
                }
                </div>
              </div>
              </div>
            </div>  
        </div>   
        );
    });
  };
  return <div>{showLessons()}</div>;
  }






/*

class Lessons extends Component {
  
  render() {
   
    const {lessons} = this.props
    console.log(lessons)
    return (
      <div className="lessons-page">
        <h1>Student Portal</h1>
          <h4>Lessons</h4>
          {
            lessons.map((eachLesson) => {
              return <Link key={eachLesson._id} to={`/lessons/${lessons._id}`}>
                <div >{eachLesson.title}</div>
                </Link>
            })
          }
      </div>
    )
  }
}
*/

/*
const {lessons} = this.props
    return (
<div class="list-group">
<h1>Student Portal</h1>
  <h1 class="list-group-item list-group-item-action active" aria-current="true">
    Lessons
  </h1>
  <button type="button" class="list-group-item list-group-item-action">{
            lessons.map((lessons) => {
              return <Link key={lessons._id} to={`/lessons/${lessons._id}`}>
                <div >{lessons.name}</div>
                </Link>
            })
          }
          </button>
</div>
)
}
}
*/


export default Lessons;