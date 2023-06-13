import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addgame } from '../redux/gameslice';
import { useDispatch } from 'react-redux';


function Addgame() {
    const [show, setShow] = useState(false);
    const [newgame, setnewgame] = useState({ 
      id:Math.random(),
      name:"",
      description:"",
      img:"",
    })
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch=useDispatch();
  
  return (
    <div>
        <>
      <Button variant="primary" onClick={handleShow}>
        Add New Game
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Game</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Game Name</Form.Label>
        <Form.Control type="text" placeholder="Enter game name" onChange={(e)=>setnewgame({...newgame, name:e.target.value })} />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Game description</Form.Label>
        <Form.Control type="text" placeholder="Enter game description" onChange={(e)=>setnewgame({...newgame, description:e.target.value })}  />
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Game image</Form.Label>
        <Form.Control type="text" placeholder="Enter game image" onChange={(e)=>setnewgame({...newgame, img:e.target.value })}  />
      
      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(addgame(newgame));handleClose()}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default Addgame