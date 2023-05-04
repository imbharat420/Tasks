import { Container, Row, Col, Image } from 'react-bootstrap';
import { quote, user1, user2 } from '../assets/images';

const Testimonial = () => {
  return (
    <Container className="py-5">
      <Row className="heading-row">
        <Col>
          <h1 className="section-heading text-center">What do people feel...</h1>
        </Col>
      </Row>
      <Row className="mt-4 d-flex justify-content-center align-items-center box-shadow">
        <Col xs={12} md={12} lg={6} className="mb-3 mb-md-0 d-flex justify-content-center align-items-center">
          <div className="testimonial-card text-center border shadow p-5 mb-5 bg-body rounded">
            <Image src={user1} alt="user1" fluid roundedCircle />
            <Image className="quote" src={quote} alt="quote" fluid />
            <div className="testi-card-text testimonial-text">
              <h2>RICHARD</h2>
              <p className="mb-0">Great experience buying tickets from you, I will buy it again for my next trip.</p>
            </div>
          </div>
        </Col>
        <Col xs={12} md={12} lg={6} className="d-flex justify-content-center align-items-center">
          <div className="testimonial-card text-center border shadow p-5 mb-5 bg-body rounded">
            <Image src={user2} alt="user2" fluid roundedCircle />
            <Image className="quote" src={quote} alt="quote" fluid />
            <div className="testi-card-text testimonial-text">
              <h2>THOMAS</h2>
              <p className="mb-0">I find TravelPey quick &amp; easy, the pricing is great. Thank you SAM.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonial;
