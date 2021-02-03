import React, { useState } from "react";
import axiosWithAuth from "./axiosWithAuth"


const Login = (props) => {

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    phonenumber: "",

  });

  const handleChange = (e) => { 

    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login =e=>{
    e.preventDefault();
    setCredentials({username:"",password:"",phonenumber: "",})

   axiosWithAuth()
   .post('/login',credentials)
    .then(res =>{
      window.localStorage.setItem('token',res.data.payload)
      props.history.push("/protected")
    })

  }


  return (
    <div className="login-card">
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
          <input
          type="text"
          name="phonenumber"
          value={credentials.phonenumber}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login; 