import { Button, TextField, Grid, Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';


import axios from 'axios';
import Nav from './Navbar';


const Add = () => {
    const [todo, setTodo] = useState({
        todoDescription:'',
        status:''
      });
      const fetchValue = (event) => {
        const { name, value } = event.target;
        setTodo((prevTodo) => ({
          ...prevTodo,
          [name]: value,
        }));
      };

      const sendData = () => {
       
      axios
      .post('http://localhost:3000/app/add', todo)
      .then((res) => {
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        
      })
     
    }
  useEffect(() => {
    if (location.state != null) {
      const { product: locTodo } = location.state;
      setProduct({
        todoDescription : locTodo.todoDescription,
        status: locProduct.status,
        
      });
    }
  }, [location.state]);
 
  return (
    <>
      <Nav/>
      <Box >
        <Typography variant="h4" gutterBottom ></Typography>
         
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="list" variant="outlined" fullWidth
             onChange={fetchValue} 
             name="list"
             value={value.todoDescription}
               />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="status" variant="outlined" fullWidth
            onChange={fetchValue} 
             name="list"
         value={value.status}
               />
          </Grid>
          
           
        
        </Grid> <br />
        <Button variant="contained" color="primary"
         
      onClick={sendData}
          
           >
          add
        </Button>
      </Box>
      
    </>
  );
};

export default Add;
