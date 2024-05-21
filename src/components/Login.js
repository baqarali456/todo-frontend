import React,{useState} from 'react'
import axios from 'axios'

export default function Login() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async() =>{
     const response = await axios.post('http://localhost:8000/api/v1/users/login-user',
        {
            username,
            email,
            password
        }
      )
      let data = response;
      console.log(data)
    }
  return (
    <>
     <form>
  <div class="mb-3">
    <input type="text" class="form-control" placeholder="Enter email or username" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <input placeholder='Enter your password' type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
    </>
  )
}
