import React from 'react'
import './All.css'
import {Row,Form,Col} from 'react-bootstrap';
const Formsection = () => {
  return (
    <div id='Form-section'>
         <Form>
          <h1 style={{margin:"20px 0px 10px 0px "}}>Welcome Back :)</h1><br />
          <p className='desciption'>To keep connected with us please login with your personal information by address and password....</p><br />
      <Row className='form-row'>
          <Form.Label className='form-label'>EMAIL ADDRESS</Form.Label>
          <Form.Control placeholder="First name" className='input'/>
      </Row>
      <Row className='form-row'>
      <Form.Label className='form-label'>password</Form.Label>
          <Form.Control placeholder="Enter password"  className='input'/>
      </Row>
      <Row className='check-section'><Col className='section'><input type="checkbox" id='checkbox' />Show Password</Col>
      <Col className='section'>Forgot Password?</Col>
      </Row>
      <Row>
        <Col><button  className='submit'>Submit</button> </Col>
        <Col className='section'><button className='create'>Create Account</button> </Col>
      </Row>
    </Form>
    <br />
    </div>
  )
}

export default Formsection
