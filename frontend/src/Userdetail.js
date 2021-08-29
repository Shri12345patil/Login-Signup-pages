import './Userdetail.css';
import {useState,useEffect} from 'react';
import StudentList from './StudentList';
import { useHistory } from "react-router-dom";
// import Form from './components/Form';
// import Modal from 'react-modal';
// import Button from 'react-bootstrap/Button';
// import Edit from './Edit';

function Userdetail() {
  // logout code
  const history = useHistory();
  const handleLogout = () => {
    history.push("/");
  }//finish logout

  const[students, setStudents] = useState([])
  const[editedStudent, setEditedStudent] = useState(null)

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get', {
      'method':'GET',
      headers: {
        'Content-Type': 'application/json'
      }
      })
     .then(resp => resp.json())
     .then(resp => setStudents(resp))
     .catch(error => console.log(error))

  },[])

  const editStudent = (student) => {
    setEditedStudent(student)
  }

  // const updatedData = (student) =>{
  //   const new_student = students.map(my_student =>{
  //     if(my_student.id === student.id){
  //       return student
  //     } else{
  //       return my_student
  //     }
  //   }) 
  //   setStudents(new_student)
  // }

//   // modal aprt 
//   const [modalIsOpen1,setModalIsOpen1] = useState(false);

//   const setModalIsOpenToTrue1 =()=>{setModalIsOpen1(true) }
//   const setModalIsOpenToFalse1 =()=>{setModalIsOpen1(false)}
//   const customStyles = {
//     content : {
//       top                   : '50%',
//       left                  : '50%',
//       right                 : 'auto',
//       bottom                : 'auto',
//       marginRight           : '-50%',
//       transform             : 'translate(-50%, -50%)',
//       backgroundColor       : 'LightSlateGray'      
//     }
// };

  return (
    <div className="Userdetail">
      <div className="row">
        <div className="col">
        <h1>Welcome Home</h1>
        <hr/>
        </div>
        <div className="col">
        <input type="button" onClick={handleLogout} value="Logout" />
        </div>
      </div>
      
      <br/>
      <br/>
      <StudentList students = {students} editStudent = {editStudent} />
      {/* <Button variant="success" value="Edit2" onClick={setModalIsOpenToTrue1}>Edit2</Button> */}

        {/* <Modal isOpen={modalIsOpen1} style={customStyles} onRequestClose={()=> setModalIsOpen1(false)}  ariaHideApp={false}>
                  <button className="close-icon" onClick={setModalIsOpenToFalse1}>x</button>
                  <Edit student = {editedStudent} updatedData = {updatedData} />
        </Modal> */}

      {/* {editedStudent ? <Form student = {editedStudent} updatedData = {updatedData} /> : null } */}

    </div>
  );
  }
  
export default Userdetail;