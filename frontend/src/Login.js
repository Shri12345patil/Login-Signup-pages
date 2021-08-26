import React, { useState } from 'react'
import APIService from './APIService'
import { useHistory } from "react-router-dom";

function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();

  const loginStudent = () => {
    APIService.LoginStudent({username,password})
    .then(resp=> {if(resp.signed_in == "True")
  {
    alert("login sucessful..!");
    //  window.open("http://localhost:3000/","_self");
    // window.location = '/App';
      history.push("/Userdetail");
  }
  else{
    alert(" invalid Username and password...");
  }})
    .catch(error => console.log(error))
}

// const history = useHistory();
    
//     const handleRoute = () =>{ 
//       history.push("/Userdetail");
//     }
 return (
            <div>
              <label>Login</label><br /> <hr/>
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
            <input type="button" value='Login' onClick={() => {loginStudent(); }} /><br />
          </div> 
        );

}
export default Login