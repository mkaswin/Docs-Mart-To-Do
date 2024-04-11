import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './register.css'
import axios from 'axios'

function Register() {
  const [name, setname] = useState('')
  const [mail, setmail] = useState('')
  const [password, setpassword] = useState('')
  const [confirmpassword, setconfirmpassword] = useState('')

  const navigate =useNavigate()
  
  const reg = async (e)=>{
    e.preventDefault();
    const RegDetails =await axios.post("https://docs-mart-to-do.vercel.app/api/login/reg",{name,password,mail,confirmpassword})
    console.log(RegDetails.data);
    localStorage.setItem('userinfo',JSON.stringify(RegDetails.data))
    if(RegDetails.data){
        navigate("/Signup")
    }
    else{
      alert('Something Went Wrong /n Fill the form Properly')
    }
  }
  return (
    <div className='container'>
       <Card className='Reg_card' >
      <Card.Body>
        <Card.Title>Register</Card.Title>
            
        <Form>
            <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Name
           </Form.Label>
           <Col sm="10">
              <Form.Control type="Text" placeholder="Enter Your Name" onChange={(e)=>setname(e.target.value)} />
           </Col>
          </Form.Group>
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
          <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm="2">
              Confirm Password
            </Form.Label>
            <Col sm="10">
              <Form.Control type="password" placeholder="Password" onChange={(e)=>setconfirmpassword(e.target.value)} />
             </Col>
         </Form.Group>
       </Form>
          <div className="d-grid gap-2">
          <Button variant="primary" size="lg" onClick={reg}>
            Register
          </Button>
        </div>
        <span className='account'><p>Already  have an account ?<Link to='/Signup'>Signup</Link></p></span>
       
      </Card.Body>
    </Card>
    </div>
  )
}

export default Register
