import React,{useState} from 'react'
import axios from 'axios'

export default function Login() {
    const [username, setUsername] = useState("")
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleLogin = async(e) =>{
      e.preventDefault()
     try {
      const response = await axios.post('http://localhost:8000/api/v1/users/login-user',
         {
             username ,
              email,
             password
         }
       )
       let data = response;
       console.log(data)
     } catch (error) {
       console.log(error.response.data)
       let firstIndexofError = error.response.data.indexOf(":")
       let lastIndexofError = error.response.data.indexOf("&")
       let errStr = error.response.data.slice(firstIndexofError,lastIndexofError - 5)
       let finalStr = errStr.slice(2)
       console.log(finalStr)
     }
    }
  return (
    <div className='container my-4 '>
     <form onSubmit={handleLogin}>
  <div className="mb-3">
    <input value={username || email} onChange={(e)=>setUsername(e.target.value) || setEmail(e.target.value)} type="text" className="form-control" placeholder="Enter email or username" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
    </div>
  )
}
