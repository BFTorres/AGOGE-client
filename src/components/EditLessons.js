import axios from 'axios';
import React, { Component } from 'react';
import config from '../config';
import { Redirect } from 'react-router-dom';

class EditLessons extends Component {
  state = {
    lessons: {},
  };

  componentDidMount() {
    console.log(this.props);
    let lessonsId = this.props.match.params.lessonsId;
    console.log('here ');
    axios
      .get(`${config.API_URL}/api/lessons/${lessonsId}`, { withCredentials: true })
      .then((lessons) => {
        this.setState({ lessons: lessons.data });
      })
      .catch(() => {
        console.log('Detail fecth failed');
      });
  }

  handleTitleChange = (event) => {
    let text = event.target.value;
    console.log(text);
    let cloneLessons = JSON.parse(JSON.stringify(this.state.lessons));
    cloneLessons.title = text;

    this.setState({
      lessons: cloneLessons,
    });
  };

  handleDescChange = (event) => {
    let text = event.target.value;
    let cloneLessons = JSON.parse(JSON.stringify(this.state.lessons));
    cloneLessons.description = text;

    this.setState({
      lessons: cloneLessons,
    });
  };

  render() {
    const { lessons } = this.state;
    const { onEdit } = this.props;
    const { onDelete } = this.props;
    const { user } = this.props;
    console.log(this.props);

    if (!user) {
      return <Redirect to={'/login'} />;
    }

    return (
      <div className="container mt-10">
        <h2>Edit Lesson</h2>

        {/*
          <h5>Title</h5><input type="text" onChange={this.handleTitleChange} value={lessons.title}/>
          <h5>Description</h5> <input type="text" onChange={this.handleDescChange} value={lessons.description}/>
          
          <button onClick={ () => { onEdit(lessons) } }  >Submit</button>

          <button onClick={() => { onDelete(lessons._id)  } } >Delete</button>
          */}

        <div id="input-lesson" class="input-group">
          <span class="input-group-text">Title</span>
          <textarea
            name="title"
            type="text"
            onChange={this.handleTitleChange}
            value={lessons.title}
            placeholder="Enter Lesson"
            class="form-control"
            aria-label="With textarea"></textarea>
        </div>

        <div id="input-description" class="input-group">
          <span class="input-group-text">Description</span>
          <textarea
            name="description"
            type="text"
            onChange={this.handleDescChange}
            value={lessons.description}
            placeholder="Enter description"
            class="form-control"
            aria-label="With textarea"></textarea>
        </div>

        <button
          className="home_btn3 mt-5p"
          onClick={() => {
            onEdit(lessons);
          }}>
          Submit
        </button>

        <button
          className="btn4 mt-5p"
          onClick={() => {
            onDelete(lessons._id);
          }}>
          Delete
        </button>
      </div>
    );
  }
}

export default EditLessons;
