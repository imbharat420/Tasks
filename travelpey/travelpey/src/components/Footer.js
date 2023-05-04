import { Container, Row, Col, Image, Nav } from 'react-bootstrap';
import { FaEnvelope, FaFacebookSquare, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-bg.png';
import { mahel2 } from '../assets/images';

const Mahel = () => {
  return (
    <Container
      fluid
      style={{
        marginBottom: '-50px',
      }}
    >
      <Row className="justify-content-center overflow-hidden">
        <Col className="d-flex justify-content-center">
          <Image src={mahel2} alt="mahel2" />
        </Col>
      </Row>
    </Container>
  );
};

const Footer = () => {
  return (
    <>
      <Mahel />

      <div className="footer">
        <Container fluid>
          <Container>
            <Row className="footer-main">
              <Col sm={12} md={4}>
                <div className="div-links">
                  <h2>Our products</h2>
                  <ul>
                    <li>Flights</li>
                  </ul>
                </div>
              </Col>
              <Col sm={12} md={4}>
                <div className="div-links">
                  <h2>About TravelPey</h2>
                  <ul>
                    <li>
                      <Nav.Link as={Link} to="/privacy" style={{ color: '#13595a' }}>
                        Privacy Policy
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link as={Link} to="/privacy" style={{ color: '#13595a' }}>
                        Terms and Conditions
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link as={Link} to="/privacy" style={{ color: '#13595a' }}>
                        Contact Us
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link as={Link} to="/" style={{ color: '#13595a' }}>
                        Home
                      </Nav.Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col sm={12} md={4}>
                <div className="div-links">
                  <h2>Connect With TravelPey</h2>
                  <ul className="footer-social-icons">
                    <li>
                      <a href="#" style={{ color: '#13595a' }} target="_blank">
                        <FaFacebookSquare />
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: '#13595a' }} target="_blank">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#" style={{ color: '#13595a' }} target="_blank">
                        <FaWhatsapp />
                      </a>
                    </li>
                  </ul>
                  <ul className="d-flex flex-column justify-content-center align-items-center">
                    <li className="d-flex flex-col justify-content-center align-items-center">
                      <FaPhone
                        style={{
                          color: '#13595a',
                          fontSize: '1rem',
                          marginRight: '10px',
                        }}
                      />
                      <a href="tel:+1 8886763247" style={{ color: '#13595a' }}>
                        +18886763247
                      </a>
                    </li>
                    <li className="d-flex flex-col justify-content-center align-items-center mx-3">
                      <FaEnvelope
                        style={{
                          color: '#13595a',
                          fontSize: '1rem',
                          marginRight: '10px',
                        }}
                      />
                      <a href="mailto:info@TravelPey.com" style={{ color: '#13595a' }}>
                        info@TravelPey.com
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="logo footer-logo d-flex justify-content-center align-items-center">
                <img src={logo} alt="" className="logo-img" />
                <h2 className="logo-txt">TravelPey</h2>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </>
  );
};

export default Footer;
