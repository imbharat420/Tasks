import { Navbar, Container, Nav } from 'react-bootstrap';
import { logo, phoneIcon } from '../assets/images';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar
      expand="lg"
      className="nav_section"
      style={{
        zIndex: '999',
      }}
    >
      <Container fluid className="mt-3">
        <div className="logo">
          <img className="logo-img" src={logo} alt="" />
          <h2 className="logo-txt">TravelPey</h2>
        </div>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                Flights
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/privacy">
                Privacy Policy
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/terms">
                Terms &amp; Conditions
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ display: 'flex' }}>
              <img src={phoneIcon} width="23px" height="23px" alt="phone icon" />
              <Nav.Link href="tel:+1 8886763247" style={{ marginTop: '-5px' }}>
                +1 8886763247
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
