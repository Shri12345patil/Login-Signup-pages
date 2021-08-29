import React, { useState,useEffect } from 'react'
import APIService from './APIService'
import { useHistory } from "react-router-dom";
import Userdetail from './Userdetail';
import StudentList from './StudentList';

function Edit (props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        setUsername(props.student.username)
        setPassword(props.student.password)
    },[props.student])

    const updateStudent = () => {
        APIService.UpdateStudent(props.student.id, {username, password})
        .then(resp => props.updatedData(resp))
        .catch(error => console.log(error))
        alert("updated data..!");
         window.open("http://localhost:3000/Userdetail","_self");
    }

 return (
    <div>
        {props.student ? (
            <div className="mb-1">
                <label>Edit Here!</label><br /> <hr/>
            <div class="row">
            <div class="col-25">
            <label >Username</label>
            </div>
            <div class="col-75">
            <input type="text" 
            className="form-control" 
            value={username}
            autoComplete="off"
            onChange= {(e) => setUsername(e.target.value)} />
            </div>
            </div>
            
            <div class="row">
            <div class="col-25">
            <label >Password</label>
            </div>
            <div class="col-75">
            <input className="form-control"
             value={password}
             autoComplete="off"
            onChange= {(e) => setPassword(e.target.value)} />
            </div>
            </div>

            {
                <button className = "btn btn-success mt-3"
                onClick = {updateStudent}>Edit</button>
            }
            </div>
        ):null }
    </div>
)

}
export default Edit