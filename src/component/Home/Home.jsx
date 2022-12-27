import React from 'react'
import { useContext } from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserProvider';
export const Home = () => {
 const [user,setUser] = useContext(UserContext);

  return (
    <div className='p-5'>
        <div className='pb-4'>
        <Link to = '/create'><Button variant="primary">Create</Button>{' '}</Link>
        </div>

        <div>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          user.map((user)=>(
            <tr>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.position}</td>
          <td>{user.salary}</td>
            
          <td>
             <Link to = {'/read/' +user.id}>
             <Button className='m-2' variant="success">Read</Button>{' '}
             </Link>
              <Link to = {'/edit/' +user.id}>
              <Button className='m-2' variant="info">Edit</Button>{' '}
              </Link>
             


             <Link to = {'/delete/' +user.id}>
             <Button className='m-2'  variant="danger">Delete</Button>{' '}
             </Link>
          </td>
        </tr>
          ))
        }
      </tbody>
    </Table>
        </div>
    </div>
  )
}
