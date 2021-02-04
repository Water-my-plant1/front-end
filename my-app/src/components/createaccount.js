import React, { useState } from "react";
import axiosWithAuth from "./axiosWithAuth"
import styled from 'styled-components'


const CreateAccount = (props) => {

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    phone: ""
  });

  const handleChange = (e) => {

    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const create =e=>{
    e.preventDefault();
    setCredentials({username:"",password:"",phone: "",})

   axiosWithAuth()
   .post('/api/users/register',credentials)
    .then(res =>{
      window.localStorage.setItem('token',res.data.payload)
      props.history.push("/protected")
    })

  }


  return (
    <div className="createaccount-card">
      <form onSubmit={create}>
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
          name="phone"
          value={credentials.phone}
          onChange={handleChange}
        />
        <Button>Create Account</Button>
      </form>
    </div>
  );
};

export default CreateAccount; 

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