import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/*
class StudentProfile extends Component {

    state = {
        user: {},
        lessons: {},
    }

componentDidMount() {
        let userId = this.props.match.params.userId;
        axios
          .get(`${config.API_URL}/api/lessons/${userId}`)
          .then(response => {
            this.setState({
              userId: response.data,
              fetching: false,
             
            });
          })
          .catch(() => {
            console.log('error');
          });
      }








    render () {

        return



    }
}
*/

//! Show user lessons | todo: asign lessons 

function StudentProfile(props) {

    const showLessons = () => {
      console.log(props.user)
    
    
        
      return props.lessons.userId.map(lessons => {
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

  export default StudentProfile