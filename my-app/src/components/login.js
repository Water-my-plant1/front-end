import React, { useState } from "react";
import axiosWithAuth from "./axiosWithAuth"
import styled from 'styled-components'


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
   .post('/api/users/login',credentials)
    .then(res =>{
      window.localStorage.setItem('token',res.data.payload)
      props.history.push("/protected")
    })

  }

  const LogText = styled.p`
  color: white;
  text-align: left
  `
  const Button = styled.button`
  font-size: 1em;
  margin: .5em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-radius: 350px;

  `


  return (
    <div className="login-card">
      
      <form onSubmit={login}>
        <LogText>Username</LogText>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
       <LogText>Password</LogText>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <LogText>Phone Number</LogText>
          <input
          type="text"
          name="phonenumber"
          value={credentials.phonenumber}
          onChange={handleChange}
        />
        <Button>Log in</Button>
      </form>
    </div>
  );
};

export default Login; 