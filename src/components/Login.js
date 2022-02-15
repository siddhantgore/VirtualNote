import React from "react";

function Login() {
  return (
    <div>
    <div className="form">
      <form>
        <div className="form-group">
          <label htmlFor="title">Email</label>
          <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="title" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Password</label>
          <input type="text" className="form-control" id="description" name="description" placeholder="description" />
        </div>
        <button  type="submit" className="btn btn-primary" >Login</button>
      </form>
      </div>
    </div>
  );
}

export default Login;
