import React from 'react'
import {useState} from 'react';
import Modal from 'react-modal';
import Edit from './Edit';

function StudentList(props) {
    const[students, setStudents] = useState([])
    const[editedStudent, setEditedStudent] = useState(null)

    const updatedData = (student) =>{
        const new_student = students.map(my_student =>{
          if(my_student.id === student.id){
            return student
          } else{
            return my_student
          }
        }) 
        setStudents(new_student)
      }
      

    // modal aprt 
  const [modalIsOpen1,setModalIsOpen1] = useState(false);

  const setModalIsOpenToTrue1 =()=>{setModalIsOpen1(true) }
  const setModalIsOpenToFalse1 =()=>{setModalIsOpen1(false)}
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor       : 'LightSlateGray'      
    }
};

const editStudent = (student) => {
    setEditedStudent(student)
  }
let p=44;

    return (
        <div>
              {props.students.map(student =>{
                  let my_student=p;
                  console.log(student);
                  if(my_student === student.id){
                    return(
                        <div key = {student.id}>
                            <h2 className="h2">{student.username}</h2>
                            <h2 className="h2" >{student.password}</h2>
        
                            <div className="row">
                                <div className="col-md-2">
                                    <button className="btn btn-primary" 
                                    onClick= {() => {editStudent(student); setModalIsOpenToTrue1();}}>Edit</button>
                                    <Modal isOpen={modalIsOpen1} style={customStyles} onRequestClose={()=> setModalIsOpen1(false)}  ariaHideApp={false}>
                                            <button className="close-icon" onClick={setModalIsOpenToFalse1}>x</button>
                                            <Edit student = {editedStudent} updatedData = {updatedData} />
                                    </Modal>
                                </div>  
                            </div>
                            <hr/>
                        </div>
                        )
                  } 
                
            })}
        </div>  
    )
}

export default StudentList
