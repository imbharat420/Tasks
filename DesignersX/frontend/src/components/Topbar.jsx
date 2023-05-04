
import {AiOutlineSearch } from  "react-icons/ai"
import {FaCartArrowDown, FaUserAlt} from "react-icons/fa"
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
import Logo from "../assets/logo.png"

const Topbar = () => {

  return (
    <>
     <style type="text/css">
        {`
        .w-logo{
          width: 200px;
        }
        .w-full{
          width: 100%;
        }
        .text-pink{
          color: #de9481 !important;
        }
        .c-flex-end{
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
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

      .c-btn{
        border-radius: 0px 8px 8px 0px !important;
        border: 1px solid #de9481 !important
      }
      
      .c-border-pink{
        border-radius: 8px 0px 0px 8px !important;
        border: 1px solid #de9481 !important
      }
    `}
      </style>
     <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="w-logo me-5" >
            <Image src={Logo} alt="Logo" className="w-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
          <Row className="d-flex justify-content-between w-full">
            <Col className="" xl={8}>
                <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="c-border-pink"

                    aria-label="Search"
                />
                <Button variant="outline-success" className="c-btn">
                    <AiOutlineSearch />
                </Button>
            </Form> 
            </Col>
            <Col xl={3}>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
              <Nav className="me-auto c-flex-end" >
                 <Nav.Link as={Link} to="/profile" className="d-flex justify-content-center align-items-center flex-row">
                   <span className="me-2">
                       Welcome
                       <span className="text-pink mx-2">
                         DesignerX,
                       </span>
                    </span> 
                    <FaUserAlt fontSize={"1.3rem"}/>
                </Nav.Link>
                <Nav.Link as={Link} to="/cart">
                  <FaCartArrowDown fontSize={"1.3rem"}/>
                </Nav.Link>
              </Nav>
              </Navbar.Collapse>
              

            </Col>
          </Row>
       
      </Container>
    </Navbar>
    </>
  );

}


export default Topbar