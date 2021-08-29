import React, {useState, useEffect} from 'react';
import { useLocation}  from 'react-router-dom';
import { useHistory } from "react-router-dom";
function Userdetail() {
  // logout code
  const history = useHistory();
  const handleLogout = () => {
    history.push("/");
  }//finish logout
// fetch data

const location = useLocation();
useEffect(() => {
  console.log(location.pathname); // result: '/secondpage'
  // console.log(location.search); // result: '?query=abc'
  let i=location.state;
  console.log(i);
}, [location]);


    return (
      <div>
          <h2 className="head">welcome to home</h2>
          <input type="button" onClick={handleLogout} value="Logout" />
          <hr/>
          <p>username </p>
          <p> password</p>
          <div className="row">
            <div className="col-md-2">
                <button className="btn btn-primary">Edit</button>
            </div>
          </div>
      </div>
    );
  }
  
export default Userdetail;