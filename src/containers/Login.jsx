import React, {useState} from 'react'
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button'
import {Button , Alert, Container, Row, Col, Stack, Form} from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';
import {Formik} from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const [formData, setFormData] = useState({
        email:"",
        password:""
    });

    const { email, password } = formData;
    const onChange = (e) => {
        setFormData({...formData, [e.target.value]: e.target.value});
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        //login function
    };

    //for the alert
    const [show, setShow] = useState(true)
    const schema = Yup.object().shape({

    })

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event)=>{
        const form = event.currentTarget;
        if (form.checkValidity() === false){
            event.preventDefault();
            event.stopPropagation();
        }
        event.preventDefault();
        setValidated(true);

    }


  return (
      <React.Fragment>

        <NavBar/>
        <Container>
        <Row>
            <Form onSubmit={handleSubmit} noValidate validated={validated}>
            <FloatingLabel className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder='jonh doe'/>
                </FloatingLabel>

                <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Enter Email Address</Form.Label>
                    <Form.Control type="email" placeholder='email'/>
                    <Form.Text className="text-muted">
                        We'll not share your info
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">Required field</Form.Control.Feedback>
                </Form.Group>
                

                <Form.Group className='mb-3' controlId='formBasicBassword'>
                    <Form.Label >Enter your pasword</Form.Label>
                    <Form.Control type="password" placeholder='password' minLength={6}/>
                </Form.Group>
                <Form.Group controlId='formFileMultiple' className='md-4'>
                <Form.Label >Add the advert images</Form.Label>
                <Form.Control type='file' multiple/>
                </Form.Group>
                <Form.Select aria-label="Select here">
                <option value="">-----</option>
                <option vlaue="duke">duke</option>
                <option vlaue="lester">lester</option>
                <option value="dlester">dlester</option>

                </Form.Select>
                <Form.Check type="switch" id="custom-switch" label="Male"/>
                <Form.Check type="switch" id="custom-switch" label="Female"/>
                <Form.Check type="switch" id="custom-switch" label="Prefer not to say"/>
              <Form.Label>Price Range</Form.Label>
              <Form.Range/>

              <InputGroup className='mb-3'>
              <InputGroup.Text>@username</InputGroup.Text>
                  <FormControl placeholder='Username' aria-label='Username'/>
              </InputGroup>
              <FloatingLabel controlId='floatingInput' label="Enter Email" className="mb-3">
                  <Form.Control type="email" placeholder='enter email'/>
              </FloatingLabel>
                <style type="text/css">
                    {
                        `
                        .btn-success{
                            color:black;
                            width: 120px;
                        }
                        `
                    }
                </style>
                <Button variant='success' type="submit">Login Now</Button>
            </Form>
            </Row>
    </Container>
    
    
    </React.Fragment>
  )
}

const mapStateToProps = state =>(
    {
//is authenticated
    })


export default Login;