import React, {useState} from 'react'
import {Alert, Button, Accordion, Breadcrumb, Card,Image,ProgressBar,Spinner,Toast, Container,Row, Carousel, Nav, Navbar} from 'react-bootstrap';
import image from '../assests/JOJOThemes.png'
import image2 from '../assests/image2.jpg'
import image3 from '../assests/image3.png'
import image4 from '../assests/image4.png'
import image5 from '../assests/image5.webp'
const Home = () => {
  const [show, setShow]  = useState(true);
  return (
   <>
   <Navbar fixed='top' bg='primary'>
     <Container>
       <Navbar.Brand Link to="/">Lester Softs</Navbar.Brand>
       <Nav className="justify-content-between">
     <Nav.Item>
       <Nav.Link href="#">Home</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href='#'>About Us</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="#">Contact</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href='#'>Register</Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href='#'>Login</Nav.Link>
     </Nav.Item>
   </Nav>
     </Container>
   </Navbar>
  

<Toast delay={300} autohide>
  <Toast.Header className='me-auto'><strong>A push up notification</strong>
  <small>10 mins ago</small>
  </Toast.Header>
<Toast.Body>Here is the body to disappear in 3 seconds</Toast.Body>

</Toast>
   
   
   <Breadcrumb>
   <Breadcrumb.Item>Home</Breadcrumb.Item>
   <Breadcrumb.Item active>Contact</Breadcrumb.Item>

   </Breadcrumb>

   <Carousel fade >

     <Carousel.Item>
       <Image fluid thumbnail src={image} alt=""/>
     
     <Carousel.Caption>
       <h2>Slide Show</h2>
       <p>If you already have the Chrome extension installed, it should autoupdate within the next week. You can also head to chrome://extensions and click “Update extensions now” if you’d like to get the new version today. If you installed the devtools beta, please remove it and switch back to the version from the store
        to make sure you always get the latest updates and bug fixes. </p>
     </Carousel.Caption>
     </Carousel.Item>

     <Carousel.Item>
       <img src={image3} alt='' className='image-responsive'/>
       <Carousel.Caption>
       <h2>Slide Show</h2>
       <p>If you already have the Chrome extension installed, it should autoupdate within the next week. You can also head to chrome://extensions and click “Update extensions now” if you’d like to get the new version today. If you installed the devtools beta, please remove it and switch back to the version from the store
        to make sure you always get the latest updates and bug fixes. </p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img src={image5} alt='' className='image-responsive'/>
       <Carousel.Caption>
       <h2>Slide Show</h2>
       <p>If you already have the Chrome extension installed, it should autoupdate within the next week. You can also head to chrome://extensions and click “Update extensions now” if you’d like to get the new version today. If you installed the devtools beta, please remove it and switch back to the version from the store
        to make sure you always get the latest updates and bug fixes. </p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img src={image4} alt='' className='image-responsive'/>
       <Carousel.Caption>
       <h2>Slide Show</h2>
       <p>If you already have the Chrome extension installed, it should autoupdate within the next week. You can also head to chrome://extensions and click “Update extensions now” if you’d like to get the new version today. If you installed the devtools beta, please remove it and switch back to the version from the store
        to make sure you always get the latest updates and bug fixes. </p>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>
   <Container>
   <Row xs={2} md={3} lg={4} xl={4}className='g-4'>
   <Card bg="primary">
   <Image fluid src={image}/>
   <Card.Title>My Card</Card.Title>
   <Card.Header as="h5">Intro Card</Card.Header>
   <Card.Text>
   If you already have the Chrome extension installed,
    it should autoupdate within the next week. You can also head to
     chrome://extensions and click “Update extensions now” if you’d like 
     to get the new version today. If you installed the devtools beta, 
     please remove it and switch back to the version from the 
   store to make sure you always get the latest updates and bug fixes.
   </Card.Text>
    <Button variant='success' className='btn-success'>Read More</Button>
   </Card>
   <Card style={{width:'25rem'}} border="success">
   <Card.Img variant='tob' src={image4}/>
   <Card.Title>My Card</Card.Title>
   <Card.Text>
   If you already have the Chrome extension installed,
    it should autoupdate within the next week. You can also head to
     chrome://extensions and click “Update extensions now” if you’d like 
     to get the new version today. If you installed the devtools beta, 
     please remove it and switch back to the version from the 
   store to make sure you always get the latest updates and bug fixes.
   </Card.Text>
    <Button variant='success' className='btn-success'>Read More</Button>
   </Card>
   <Card style={{width:'25rem'}}>
   <Card.Img variant='tob' src={image2}/>
   <Card.Title>My Card</Card.Title>
   <Card.Text>
   If you already have the Chrome extension installed,
    it should autoupdate within the next week. You can also head to
     chrome://extensions and click “Update extensions now” if you’d like 
     to get the new version today. If you installed the devtools beta, 
     please remove it and switch back to the version from the 
   store to make sure you always get the latest updates and bug fixes.
   </Card.Text>
    <Button variant='success' className='btn-success'>Read More</Button>
   </Card>
   <Card style={{width:'25rem'}}>
   <Card.Img variant='tob' src={image3}/>
   <Card.Title>My Card</Card.Title>
   <Card.Text>
   If you already have the Chrome extension installed,
    it should autoupdate within the next week. You can also head to
     chrome://extensions and click “Update extensions now” if you’d like 
     to get the new version today. If you installed the devtools beta, 
     please remove it and switch back to the version from the 
   store to make sure you always get the latest updates and bug fixes.
   </Card.Text>
    <Button variant='success' className='btn-success'>Read More</Button>
   </Card>
   <Card style={{width:'25rem'}}>
   <Card.Img variant='tob' src={image5}/>
   <Card.Title>My Card</Card.Title>
   <Card.Text>
   If you already have the Chrome extension installed,
    it should autoupdate within the next week. You can also head to
     chrome://extensions and click “Update extensions now” if you’d like 
     to get the new version today. If you installed the devtools beta, 
     please remove it and switch back to the version from the 
   store to make sure you always get the latest updates and bug fixes.
   </Card.Text>
    <Button variant='success' className='btn-success'>Read More</Button>
   </Card>
</Row>
   </Container>
   
    {
      [
        'primary','secondary','success','warning','info','light', 'dark'

      ].map((variant) =>(
        <Alert key={variant} variant={variant} show={show} >
        <Alert.Heading>
        The {variant}
        </Alert.Heading>
        This is the {variant} alert!
        <Button onClick={() => setShow(false)}>Hide Me</Button>

        </Alert>
        


      ))
    }
    {!show &&
    <Button onClick={() =>setShow(true)}>Show Me</Button>
    }
    <Accordion defaultActiveKey='0'>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>My Accordion</Accordion.Header>
      </Accordion.Item>
      <Accordion.Body>
        lorem ipsum dolor sit amet, consectetur adip

      </Accordion.Body>
    </Accordion>
    <ProgressBar now={90} label='progress' className='mb-8'/>
    <Spinner animation="grow" variant="success"/>

   </>

  )
}

export default Home