
import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Checkbox from '@mui/material/Checkbox';

import axios from 'axios';
import { Button } from '@mui/material';
import Nav from './Navbar'




const Todo = () => {
    const [todo,setTodo]=useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/app/')
          .then((res) => {
            setTodo(res.data);
          })
          .catch((err) => console.error("Error fetching:", err));
      }, []);


      const handleDelete = async (_id) => {
        try {
          await axios.delete(`http://localhost:3000/app/delete/${_id}`);
          setTodo(todo.filter((record) => record._id !== _id));
          console.log('deleted successfully!');
        } catch (err) {
          console.error("Error deleting", err);
        }
      };


  return (
    <>
    <Nav/>
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {todo.map((value) => {
      const labelId = `checkbox-list-secondary-label-${value}`;
      return (
       

        <ListItem
          key={value.todoDescription}
          secondaryAction={
            <Checkbox
              edge="start"
            //   onChange={handleToggle(value)}
            //   checked={checked.includes(value)}
              inputProps={{ 'aria-labelledby': labelId }}
            />
          }
          
        >
          <ListItemButton>
          
          <ListItemText primary={value.todoDescription}  sx={{  alignContent:'left' }}/> 
          <Button onClick={handleDelete}>DELETE</Button>     
          <ListItemText primary={value.status}  sx={{  alignContent:'left' }}/>
          </ListItemButton>
         
        </ListItem>
      );
    })}
  </List>
  </>
  )
}

export default Todo