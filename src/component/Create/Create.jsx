import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserProvider';
import './Create.css'
export const Create = () => {
   const [user,setUser] = useContext(UserContext);

   const [id,setId] = useState('');
   const [name,setName] = useState('');
   const [position,setPosition] = useState('');
   const [salary,setSalary] = useState('');

   const changeId = (e) => {
       setId (e.target.value);
   }

   const changeName = (e) => {
    setName (e.target.value);
  }

   const changePosition = (e) => {
    setPosition (e.target.value);
  }
  const changeSalary = (e) => {
    setSalary (e.target.value);
  }
 const addCreate = (e) => {
    e.preventDefault()
    setUser([...user, {id : id, name : name , position : position, salary : salary}])
 }
  return (
    <div className='p-5 fomr'>
    <Form onSubmit={addCreate}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Id Number : </Form.Label>
        <Form.Control type="number" placeholder="Enter id" value={id} onChange = {changeId}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name :</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={name} onChange = {changeName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Position :</Form.Label>
        <Form.Control type="text" placeholder="Enter Position" value={position} onChange = {changePosition}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Salary : </Form.Label>
        <Form.Control type="number" placeholder="Enter Salary" value={salary} onChange = {changeSalary}/>
      </Form.Group>


      <Button className='m-2' variant="primary" type="submit">
       Create
      </Button>

      <Link to = "/" >
      <Button className='m-2' variant="primary" type="submit">
        Back To Home
      </Button>
      </Link>
    </Form>
    </div>
  )
}
