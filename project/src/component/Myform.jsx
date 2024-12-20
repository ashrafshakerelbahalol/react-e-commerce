import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function Myform() {
  return (
    <div className='container mt-5 mb-2  ' >    
    <Form >
    <Form.Group className="mb-3" conStrolId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"  className=''/>
      <Form.Text className="text-muted  text-center ">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="Name" placeholder="Name" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" required />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Inform me by email about new products" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Contact us
    </Button>
  </Form>
  </div>
  )
}

