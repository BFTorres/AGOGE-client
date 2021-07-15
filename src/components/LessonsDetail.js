import axios from 'axios';
import React, { Component } from 'react';
import config from '../config';
import { Link, Redirect } from 'react-router-dom';

class LessonsDetail extends Component {
  state = {
    lessons: {},
  };

  componentDidMount() {
    console.log(this.props);

    let lessonsId = this.props.match.params.lessonsId;
    axios
      .get(`${config.API_URL}/api/lessons/${lessonsId}`, { withCredentials: true })
      .then((lessons) => {
        this.setState({
          lessons: lessons.data,
        });
      })
      .catch(() => {
        console.log('Detail fecth failed');
      });
  }

  render() {
    const { lessons } = this.state;
    const { onDelete, user } = this.props;
    console.log(this.props);

    if (!user) {
      return <Redirect to={'/login'} />;
    }

    return (
      <div className="container ">
        <div className="SP-img ">
          {lessons.image && (
            <img
              style={{ width: '100%', height: 'auto' }}
              src={lessons.image}
              alt={lessons.title}
              loading="lazy"
            />
          )}
        </div>
        <h2 className="details">Title: {lessons.title}</h2>

        <div>
          <h3 className="lh">Description: {lessons.description}</h3>
        </div>
        <Link to={`/lessons/${lessons._id}/edit`}>
          <button className="home_btn3">Edit</button>
        </Link>
        <button
          className="btn4"
          onClick={() => {
            onDelete(lessons._id);
          }}>
          Delete
        </button>

        {/*
            {
            props.allstudents.map((eachUser) => {
              return <button onSubmit={this.handleAsign} key={eachUser._id} to={`/allstudents/${user._id}`}>
                <div >{eachUser.username}</div>
                </button>
            }
            )}
            */}
      </div>
    );
  }
}

export default LessonsDetail;
