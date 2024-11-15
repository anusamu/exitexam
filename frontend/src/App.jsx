import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/Todo'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'


function App() {


  return (
 
     <Routes>
    
      <Route path = '/home' element = {<Todo/>}></Route>
      <Route path = '/add' element = {<Add/>}></Route> 
      
     </Routes>
  
  )
}

export default App
