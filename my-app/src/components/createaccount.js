import React, { useState } from "react";
import axiosWithAuth from "./utils/axiosWithAuth"


const createaccount = (props) => {

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

  const create =e=>{
    e.preventDefault();
    setCredentials({username:"",password:"",phonenumber: "",})

   axiosWithAuth()
   .post('/register',credentials)
    .then(res =>{
      window.localStorage.setItem('token',res.data.payload)
      props.history.push("/protected")
    })

  }


  return (
    <div className="createaccount-card">
      <form onSubmit={create}>
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
        <button>Create Account</button>
      </form>
    </div>
  );
};

export default createaccount; 