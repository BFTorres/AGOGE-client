import React from 'react';
import { Link } from 'react-router-dom';

function Lessons(props) {
  const showLessons = () => {
    console.log(props?.lessons);
    return props.lessons.map((lessons) => {
      return (
        <div className="container">
          {props.user?.usertype === 'Teacher' && (
            <Link to={`/lessons/${lessons._id}/edit`}>
              <button className="edit-link">Edit</button>
            </Link>
          )}
          <h4 className="lessons">Lesson</h4>

          <div className="bg-color" key={lessons._id}>
            <Link to={`/lessons/${lessons._id}`}>
              <h6>{lessons.title}</h6>
            </Link>

            <div></div>
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
