import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useContext } from 'react';
import { UserContext } from './UserProvider';

export const Delete = () => {
    const [user,setUser] = useContext(UserContext);
    const {id} = useParams();
    const deleteItem = (id) =>{
        const users = user.filter((user) => user.id != id);
        setUser(users);
    }
  return (
    <div
    className="modal show"
    style={{ display: 'block', position: 'initial' }}
     >
        <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure ?</Modal.Title>
        </Modal.Header>

        {/* <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body> */}

        <Modal.Footer>
          <Link to = '/'>
          <Button className='m-2' variant="primary">Cancel</Button>
          <Button className='m-2' onClick={() => deleteItem(id)}  variant="danger">Delete</  Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}
