import React ,{useState} from "react";
import { useNavigate } from 'react-router-dom';

function Login() {

  const [credential, setcredential] = useState({email:"",password:""})
  const navigate = useNavigate();

  const onChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value })
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
     body:JSON.stringify({email:credential.email,password:credential.password})
    });
    const json=await response.json()
    console.log(json)
    if(json.success){
      //redirect
      localStorage.setItem('token',json.auth_token)
      navigate('/');
    }
  }
  return (
    <div>
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={credential.email} onChange={onChange} aria-describedby="emailHelp" placeholder="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={credential.password} onChange={onChange} placeholder="password" />
        </div>
        <button  type="submit" className="btn btn-primary" >Login</button>
      </form>
      </div>
    </div>
  );
}

export default Login;
