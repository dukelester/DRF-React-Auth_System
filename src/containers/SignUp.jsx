import React, {useState} from 'react'
import {Form, Container, Row,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Navbar } from 'react-bootstrap';
import NavBar from '../components/NavBar';

const schema = yup.object().shape({
  firstName : yup.string().required(),
  lastName : yup.string().required(),
  phoneNumber : yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().required()

});

const SignUp = () => {
  return (
    <>
    <NavBar/>
   <Formik
   validationSchema={schema}
   onSubmit={console.log}
   initialValues={{
     firstName:"duke",
     lastName:'',
     phone: '',
     email:'',
     password:'',
     confirmPassword:'',
   }} >
   {
     ({
       handleSubmit,handleChange,handleBlur, values,touched,isValid,errors,
     }) =>(

 
     <Container className='Col'>
       <Row>
         <h2>Welcome to Sign Up</h2>
         <Form onSubmit={handleSubmit}>
           {/* <Form.Group className='mb-3' controllId='formBasicInput'>
           <Form.Label>First Name</Form.Label>
           <Form.Control type="text" placeholder='Enter first name'/>
           </Form.Group> */}
           <Form.Floating>
             <Form.Control type='text' id='firstname' placeholder='First name' className='mb-3'
               onChange={handleChange} value={values.firstName} name='firstName'
               isValid={touched.firstName && !errors.firstName}
               isInvalid={!!errors.firstName}
             />
           <label htmlFor='firstname'>First Name</label>
           {!errors.firstName &&
           <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
           }
           
          
           </Form.Floating>
           <Form.Floating>
             <Form.Control type='text' placeholder='Enter last name' id="lastname" className='mb-3'
               onChange={handleChange} value={values.lastName} name='lastName'
               isValid={touched.lastName && !errors.firstName}
               isInvalid={!!errors.lastName}
             />
             <label htmlFor='lastname'>Last Name</label>
             {!errors.lastName &&
           <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
           }
           {errors.lastName}
           </Form.Floating>
           <Form.Floating>
             <Form.Control type="text" placeholder='phone' id='phone' className='mb-3'
               onChange={handleChange} value={values.phone} name='phone'
               isvalid={touched.phone && !errors.phone}
               isInvalid={errors.phone}
             />
             <label htmlFor='phone'>Phone Number</label>
             {!errors.phone &&
           <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
           }
             {errors.phone}
           </Form.Floating>
           <Form.Floating>
             <Form.Control type='email' placeholder="email" id='email' className='mb-3'/>
             <label htmlFor='email'>Enter Email</label>
           </Form.Floating>
           <Form.Floating>
             <Form.Control type='password' placeholder='password' id='password' className='mb-3' minLength={6}/>
             <label htmlFor='password'>Password</label>
           </Form.Floating>
           <Form.Floating>
             <Form.Control type='password' placeholder='password' id='confirmPassword' className='mb-3'/>
             <label htmlFor='confirmPassword'>Confirm Password</label>
           </Form.Floating>

           <Button type='submit' className='btn btn-success'>Register</Button>
         </Form>
       </Row>
       <p>Have an account already? <Link to="/login">Login </Link></p>
     </Container>
     )
   }
   </Formik>
   </>
  )
}

export default SignUp