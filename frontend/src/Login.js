import React, { useState } from 'react'
import APIService from './APIService'

function Login (props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginStudent = () => {
    APIService.LoginStudent({username,password})
    .then(resp=> {if(resp.signed_in == "True")
  {
    alert("login sucessful..!");
    window.open("http://localhost:3000/","_self");
  }
  else{
    alert(" invalid Username and password...");
  }})
    .catch(error => console.log(error))
}
 return (
            <div>
              <label>SignUp</label><br /> <hr/>
              <div>
                <lable>Username</lable> &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" 
                        name="username" 
                        placeholder="enter Username" 
                        autoComplete="off"
                        value={username}
                        onChange= {(e) => setUsername(e.target.value)} />&nbsp;&nbsp;
              </div>
              <div style={{ marginTop: 10 }}>
                <label>Password</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="password" 
                        name="password" 
                        placeholder="Enter password" 
                        autoComplete="off"
                        value={password}
                        onChange= {(e) => setPassword(e.target.value)} />
              </div><br/>
            <input type="button" value='Login' onClick={() => {loginStudent();}} /><br />
          </div> 
        );

}
export default Login