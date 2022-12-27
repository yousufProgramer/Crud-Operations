import React from 'react'
import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../component/UserProvider'
import Button from 'react-bootstrap/Button';
import './Read.css'
export const Read = () => {
    const [user,serUser] = useContext(UserContext);
    const {id} = useParams();
    const users = user.filter((user) => user.id == id);
  return (
    <div className='read'>
        <h1>ID : {users[0].id}</h1>
        <h3>Name : {users[0].name}</h3>
        <h3>Position : {users[0].position}</h3>
        <h3>Salary : {users[0].salary}</h3>
        <Link to = '/'>
        <Button className='m-2' variant="primary">Go to Home</Button>
        </Link>
        
    </div>
  )
}
