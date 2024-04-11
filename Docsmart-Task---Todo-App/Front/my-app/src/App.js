import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import Signup from './Pages/Signup';
import Todo from './Pages/Todo';
import Register from './Pages/Register';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/todo' element={<Todo/>}></Route>
      <Route path='/Reg' element={<Register/>}></Route>

    </Routes>
    
    </BrowserRouter>
  )
}

export default App