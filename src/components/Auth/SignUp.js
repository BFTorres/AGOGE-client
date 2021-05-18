//import axios from 'axios';
import React from 'react';

function SignUp(props){

    const { onSubmit } = props
    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="InputUsername">Username</label>
                <input type="text" className="form-control" id="InputUsername" name="username" />
            </div>
            <div className="form-group">
                <label htmlFor="InputPassword">Password</label>
                <input name="password" type="password" className="form-control" id="InputPassword" />
            </div>
            {/*} !insert usertype through DB
            <div clasName="form-group">
                <label for="Student">Student</label>
                <input type="radio" name="usertype" value="Student"/>
                <label for="Teacher">Teacher</label>
                <input type="radio" name="usertype" value="Teacher"/>
            </div>
            */}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default SignUp