import React, {useState, useEffect} from 'react';
import { useLocation}  from 'react-router-dom';
import { useHistory } from "react-router-dom";
function Userdetail() {
  // logout code
  const history = useHistory();
  const handleLogout = () => {
    history.push("/");
  }
  //finish logout
// fetch data

const location = useLocation();
useEffect(() => {
  console.log(location.pathname); // result: '/secondpage'
  // console.log(location.search); // result: '?query=abc'
  console.log(location.state);
}, [location]);


const fetchData = () => { 
  return fetch("http://127.0.0.1:5000/get")
        .then((response) => response.json())
        .then((data) => console.log(data));}



  useEffect(() => {fetchData();}, []);

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