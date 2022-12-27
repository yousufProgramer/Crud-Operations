import React from 'react'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../UserProvider'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import './Edit.css'
const Edit = () => {
    const [user,setUser] = useContext(UserContext);

     const {id} = useParams();

     const users = user.filter((user) => user.id == id);

     const [name,setName] = useState(users[0].name);
     const [position,setPosition] = useState(users[0].position);
     const [salary,setSalary] = useState(users[0].salary);


 
    const changeName = (e) => {
     setName (e.target.value);
     const edit_name = name ;
     users[0].name = edit_name;
   }
 
    const changePosition = (e) => {
     setPosition (e.target.value);
     const edit_position = position ;
     users[0].position = edit_position ;
   }
   const changeSalary = (e) => {
     setSalary (e.target.value);
     const edit_salary = salary;
     user[0].salary = edit_salary;
   }
   const editNow = (e) => {
    e.preventDefault()
    setUser([...user])
   }
  return (
    <div>
        <div className='p-5 fomr'>
    <Form>
      <h1>Id : {users[0].id}</h1>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name :</Form.Label>
        <Form.Control type="text" placeholder={users[0].name} value={name} onChange = {changeName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Position :</Form.Label>
        <Form.Control type="text" placeholder={users[0].position} value={position} onChange = {changePosition}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Salary : </Form.Label>
        <Form.Control type="number" placeholder={users[0].salary} value={salary} onChange = {changeSalary}/>
      </Form.Group>

     <Link to = '/'>
      <Button onClick={() => editNow} className='m-2' variant="primary" type="submit">
       Edit Done
      </Button>
      </Link>

      <Link to = "/" >
      <Button className='m-2' variant="primary" type="submit">
        Back To Home
      </Button>
      </Link>
    </Form>
    </div>
    </div>
  )
}

export default Edit