import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [requiredField,setRequiredField] = useState("required")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        
       
      try {
        let response = await axios.post('http://localhost:8000/api/v1/users/register-user',
          {
              username,
              password,
              email,
          }      
          )
        let registerdata = response;
        const {data} = registerdata;
        setEmail("");
        setUsername("");
        setPassword("");
      } catch (error) {
        console.log(error.response.data)
        let firstIndexofError = error.response.data.indexOf(":")
        let lastIndexofError = error.response.data.indexOf("&")
        console.log(":",firstIndexofError)
        console.log("&",lastIndexofError)
       let errorStr = error.response.data.slice(firstIndexofError ,lastIndexofError - 5)
       let finalStr = errorStr.slice(2)
       console.log(finalStr)
       if(finalStr === "all Fields are required"){
        setRequiredField(finalStr)
       }
        
      }
    }

    return (
        <div className='container my-3 '>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
          <input value={username} onChange={(e)=>setUsername(e.target.value)} type="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <p className=' text-danger  '>{!username.length &&requiredField}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputPassword3"/>
          <p className='  text-danger '>{requiredField}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword2"/>
          <p className='  text-danger '>{requiredField}</p>
        </div>
        <button type="submit" className="btn btn-primary">SignUp</button>
        <span>already Login</span>
        <a className=' text-decoration-none ' href="/">Login Here</a>
      </form>  
        </div>
    )
}
