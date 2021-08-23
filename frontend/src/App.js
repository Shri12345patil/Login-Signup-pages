import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Login from './Login';
import Signup from './Signup';

function App() {
  const handleClick=(e)=>{
    console.log(e.target.value)
  }
  const [modalIsOpen1,setModalIsOpen1] = useState(false);
  const [modalIsOpen2,setModalIsOpen2] = useState(false);

  const setModalIsOpenToTrue1 =()=>{setModalIsOpen1(true) }
  const setModalIsOpenToFalse1 =()=>{setModalIsOpen1(false)}

  const setModalIsOpenToTrue2 =()=>{setModalIsOpen2(true)}
  const setModalIsOpenToFalse2 =()=>{setModalIsOpen2(false) }

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

const[students, setStudents] = useState([])
const[editedStudent, setEditedStudent] = useState(null)

const openForm = () => {
  setEditedStudent({username:'',password:''})
}


const insertedStudent = (student)=> {
  const new_students = [...students,student]
  setStudents(new_students)
}

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="h2">Login and Signup page (Flask + React.js)</h2>
      <ButtonGroup onClick={handleClick}>
        <Button variant="success" value="Login" onClick={setModalIsOpenToTrue1}>Login</Button>

        <Modal isOpen={modalIsOpen1} style={customStyles} onRequestClose={()=> setModalIsOpen1(false)}  ariaHideApp={false}>
                  <button className="close-icon" onClick={setModalIsOpenToFalse1}>x</button>
                  <Login/>
        </Modal>

        <Button variant="danger" value="SignUp" onClick={setModalIsOpenToTrue2}>Sign-Up</Button>

        <Modal isOpen={modalIsOpen2} style={customStyles} onRequestClose={()=> setModalIsOpen2(false)} ariaHideApp={false}>
                  <button className="close-icon" onClick={setModalIsOpenToFalse2}>x</button>
                  <Signup student = {editedStudent} insertedStudent = {insertedStudent} /> 
        </Modal>
      </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
