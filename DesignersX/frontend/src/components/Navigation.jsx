import React,{useEffect,useState} from 'react'
import Topbar from './Topbar'
import {Link} from "react-router-dom"

import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Row,
    Col,
    Form,
    Button,
    Image
} from "react-bootstrap"
import axios from "axios"
import {GiHamburgerMenu} from "react-icons/gi"
//https://jsonplaceholder.typicode.com/users/1/albums
const api = async () =>{
    return await axios.get("https://jsonplaceholder.typicode.com/users/1/albums")
}


const Title = () => {
  return(
    <div className='d-inline-flex justify-content-center align-items-center'>
      <GiHamburgerMenu size={30}/>
      <span className='mx-2'>
        Shop By Brand
      </span>
    </div>
  )
}

export default function Navigation() {
  const [data, setData] = useState([])
  useEffect(() => {
    api().then(res => setData(res.data))
  }, [])

  return (
    <>
    
      <style type="text/css">
        {`
        .w-full{
          width: 100%;
        }
      .bg-pink {
        background: #de9481 !important;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .c-bg-dark{
        background:#6b6d6f !important;
        color: white !important;
      }

      .btn-xxl {
        padding: 1rem 1.5rem;
        font-size: 1.5rem;
      }
    `}
      </style>
    <div>
      <Topbar/>
      <Navbar bg="light" expand="lg">
     
      <Row className='' style={{width:"100%"}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Row className="d-flex justify-content-around" >
            <Col className='bg-pink p-2' xl={2} >
            <NavDropdown title={<Title/>} id="basic-nav-dropdown">
              
              {data.map((item,index) =>(
                <NavDropdown.Item>
                  <Nav.Link as={Link}  key={index} className='' to={`album/${item.id}`}>{item.title}</Nav.Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            </Col>
            <Col className='c-bg-dark  p-2'>
              <Container>
             {/* <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center " > */}
              <Nav className="me-auto d-flex justify-content-center align-items-center ">
               
                <Nav.Link as={Link} className='text-white' to="/store">Store</Nav.Link>
                <Nav.Link as={Link} className='text-white' to="/store">Store</Nav.Link>
                <Nav.Link as={Link} className='text-white' to="/store">Store</Nav.Link>
                <Nav.Link as={Link} className='text-white' to="/store">Store</Nav.Link>
                <Nav.Link as={Link} className='text-white' to="/store">Store</Nav.Link>
                <Nav.Link as={Link} className='text-white' to="/store">Store</Nav.Link>
                <Nav.Link as={Link} className='text-white' to="/store">Store</Nav.Link>
                <Nav.Link as={Link} className='text-white' to="/store">Store</Nav.Link>
                <Nav.Link as={Link} className='text-white' to="/store">Store</Nav.Link>
                <Nav.Link as={Link} className='text-white' to="/store">Store</Nav.Link>
                <Nav.Link as={Link} className='text-white' to="/store">Store</Nav.Link>
                <Nav.Link as={Link} className='text-white' to="/store">Store</Nav.Link>
                <Nav.Link as={Link} className='text-white' to="/store">Store</Nav.Link>
                <Nav.Link as={Link} className='text-white' to="/store">Store</Nav.Link>
              </Nav>
              {/* </Navbar.Collapse> */}
              </Container>
            </Col>
            <Col className='bg-pink p-2' xl={2}>
                <Nav.Link as={Link} to="/gift">Gift This section</Nav.Link>
            </Col>
          </Row>
       
      </Row>
    </Navbar>
    </div>
    </>
  )
}
