import React from 'react';

function LogIn(props){

    const { onLogIn, error } = props
    return (
        <form onSubmit={onLogIn}>
            <div className="form-group">
                <label htmlFor="InputUsername">Username</label>
                <input type="username" className="form-control" id="InputUsername" name="username" />
            </div>
            <div className="form-group">
                <label htmlFor="InputPassword">Password</label>
                <input name="password" type="password" className="form-control" id="InputPassword" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            {
                error && (<p style={{color:'red'}}>{error.error}</p>)
            }
        </form>
    )
}

export default LogIn