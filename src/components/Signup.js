import React ,{useState} from "react";
import { useNavigate } from 'react-router-dom';

function Signup(props) {

  const [credential, setcredential] = useState({name:"",email:"",password:""})
  const navigate = useNavigate();

  const onChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value })
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    const {name,email,password}=credential
    const response = await fetch("https://virtualnote-sid.netlify.app/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
     body:JSON.stringify({name,email,password})
    });
    const json=await response.json()
    if(json.success){
      //redirect
      localStorage.setItem('token',json.auth_token)
      navigate('/');
      props.showAlert("Signup Successfully","success")
    }
    else{
      props.showAlert("Error","danger")
    }
  }
  return (
    <div>
    <div className="form">
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="name" className="form-control" id="name" name="name"  onChange={onChange} aria-describedby="emailHelp" placeholder="email" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" name="email"  onChange={onChange} aria-describedby="emailHelp" placeholder="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" name="password"  onChange={onChange} placeholder="password" />
        </div>
        <button  type="submit" className="btn btn-primary" >Login</button>
      </form>
      </div>
    </div>
  );
}

export default Signup;
