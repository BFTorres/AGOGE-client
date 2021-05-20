import React, { Component } from 'react';


class AddLessons extends Component {

  render() {
    return (
      <form className="container mt-10" onSubmit={this.props.onAdd}>
      <h2>Add Lesson</h2>

        <div id="input-lesson" class="input-group">
        <span class="input-group-text">Enter Lesson</span>
        <textarea name="title" type="text" placeholder="Enter Lesson" 
        class="form-control" aria-label="With textarea"></textarea>
        </div>

        <div id="input-description" class="input-group">
        <span class="input-group-text">Enter Description</span>
        <textarea name="description" type="text" placeholder="Enter description" 
        class="form-control" aria-label="With textarea"></textarea>
        </div>

        {/*  //! asign students to lessons 
            {
            props.userId.map((eachUser) => {
              return <Link key={eachUser._id} to={`/studentprofile/${user._id}`}>
                <div >{eachUser.username}</div>
                </Link>
            }

        */}




        <div class="input-group mb-3">
        <input id="choose-file" type="file" class="form-control" name="imageUrl" accept="image/jpeg, image/jpg" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
      
        </div>
        <button class="btn btn-outline-secondary" type="submit" id="button-addon1">Submit</button>
        

        {/*<input name="imageUrl" type="file"  accept="image/jpeg, image/jpg"></input>
        <button type="submit" >Submit</button>
        */}
      </form>
    )
  }
}

  





export default AddLessons