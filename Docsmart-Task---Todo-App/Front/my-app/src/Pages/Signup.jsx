import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import './signup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Signup() {
  const [mail, setmail] = useState('')
  const [password, setpassword] = useState()
  const navigate =useNavigate()
  const login =async (e)=>{
    e.preventDefault();
    const logdetail =await axios.post("http://localhost:4000/api/login/sign",{mail,password})
    console.log(logdetail.data);
    localStorage.setItem('user info', JSON.stringify(logdetail.data))

    if(logdetail.data.Token){
      navigate('/todo')
    }
    else{
      alert('wrong credentials')
    }
  }


  return (
    <div className='container'>
       <Card className='validation_card' >
      <Card.Body>
        <Card.Title>SignUp</Card.Title>
            
        <Form>
            <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Email
           </Form.Label>
           <Col sm="10">
              <Form.Control type="Email" placeholder="Example@gmail.com" onChange={(e)=>setmail(e.target.value)} />
           </Col>
          </Form.Group>
    
          <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} />
             </Col>
         </Form.Group>
       </Form>
          <div className="d-grid gap-2">
          <Button variant="primary" size="lg" onClick={login}>
            Login
          </Button>
        </div>
        <span className='account'><p>Didn t have an account ?<Link to='/Reg'>Register</Link></p></span>
       
      </Card.Body>
    </Card>
    </div>
  )
}

export default Signup