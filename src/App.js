import React, {useState} from 'react';
import Modal from 'react-modal';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Popup from './Popup';
import Popup1 from './Popup1';

function App() {
  const handleClick=(e)=>{
    console.log(e.target.value)
  }
  const [modalIsOpen1,setModalIsOpen1] = useState(false);
  const [modalIsOpen2,setModalIsOpen2] = useState(false);

  const setModalIsOpenToTrue1 =()=>{
      setModalIsOpen1(true)
  }

  const setModalIsOpenToFalse1 =()=>{
      setModalIsOpen1(false)
  }

  const setModalIsOpenToTrue2 =()=>{
    setModalIsOpen2(true)
}

const setModalIsOpenToFalse2 =()=>{
    setModalIsOpen2(false)
}

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor       : 'purple'      
    }
};

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="h2">Task 1</h2>
      <ButtonGroup onClick={handleClick}>
        <Button variant="success" value="Login" onClick={setModalIsOpenToTrue1}>Login</Button>

        <Modal isOpen={modalIsOpen1} style={customStyles} onRequestClose={()=> setModalIsOpen1(false)}>
                  <button className="close-icon" onClick={setModalIsOpenToFalse1}>x</button>
                  <Popup/>
        </Modal>

        <Button variant="danger" value="SignUp" onClick={setModalIsOpenToTrue2}>Sign-Up</Button>

        <Modal isOpen={modalIsOpen2} style={customStyles} onRequestClose={()=> setModalIsOpen2(false)}>
                  <button className="close-icon" onClick={setModalIsOpenToFalse2}>x</button>
                  <Popup1/>
        </Modal>
      </ButtonGroup>
      </header>
    </div>
  );
}

export default App;
