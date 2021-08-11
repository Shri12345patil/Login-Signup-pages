import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function App() {

  function handleClick1(e) {
    e.preventDefault();
    alert("Login");
    console.log('Login button');
  }

  function handleClick2(e) {
    e.preventDefault();
    alert("Signup");
    console.log('Singup button.');
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="h2">Task 1</h2>
      <ButtonGroup >
        <Button variant="success" value="Login" onClick={handleClick1}>Login</Button>
        <Button variant="danger" value="SignUp" onClick={handleClick2}>SignUp</Button>
      </ButtonGroup>
      </header>
    </div>
  );
}

export default App;