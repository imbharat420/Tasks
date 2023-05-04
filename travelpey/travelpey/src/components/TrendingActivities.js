import { Container, Row, Col, Image } from 'react-bootstrap';
import { trending } from '../assets/images';

function TrendingActivities() {
  return (
    <Container className="my-5">
      <Container className="my-5">
        <Row className="heading-row">
          <Col className="popular-heading-text">
            <h1 className="section-heading">Trending Activities</h1>
            <p className="section-subheading">
              Top 3 offers for you in this month! Grab these amazing offers using the coupon codes.
            </p>
          </Col>
          {/* <p className="seeall">See All</p> */}
        </Row>
      </Container>
      <Row className="">
        <Col
          className=""
          style={{
            backgroundImage: `url(${trending})`,
            height: '400px',
            // backgroundAttachment: 'fixed',
            backgroundPosition: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></Col>
      </Row>
    </Container>
  );
}

export default TrendingActivities;
