import React from 'react';

function LogIn(props) {
  const { onSubmit, error } = props;
  return (
    <form className="container mt-10" onSubmit={onSubmit}>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="InputUsername">Username</label>
        <input type="username" className="form-control" id="InputUsername" name="username" />
      </div>
      <div className="form-group">
        <label htmlFor="InputPassword">Password</label>
        <input name="password" type="password" className="form-control" id="InputPassword" />
      </div>
      <button type="submit" className="home_btn3 mt-5p">
        Submit
      </button>
      {error && <p style={{ color: 'red' }}>{error.error}</p>}
    </form>
  );
}

export default LogIn;
