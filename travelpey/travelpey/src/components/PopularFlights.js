import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container, Row, Col } from 'react-bootstrap';

const InternationalSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Row className="heading-row mt-5">
        <Col>
          <div className="popular-heading-text">
            <h1 className="section-heading">Popular Flights Near You</h1>
            <p className="section-subheading">Find dashing deals on domestic and international flights!</p>
          </div>
        </Col>
      </Row>
      <Slider {...settings} className="mx-4" id="international-slide">
        <Col className="m-3 card-box-int card-inter card4">
          <div className="inter-card-text d-flex justify-content-between">
            <h3>Maldives</h3>
            <p>1 jan</p>
          </div>
        </Col>
        <Col className="m-3 mt-0 card-box-int card-inter d-flex justify-content-between">
          <div className="w-100 card1 bg-center inner-box">
            <div className="inter-card-text d-flex justify-content-between">
              <h3>Amsterdam</h3>
              <p>17 feb</p>
            </div>
          </div>
          <div className="w-100 card5 mt-2 bg-center inner-box end">
            <div className="inter-card-text d-flex justify-content-between">
              <h3>Oakland</h3>
              <p>29 dec</p>
            </div>
          </div>
        </Col>
        <Col className="m-3 mt-0 card-box-int card-inter d-flex justify-content-between">
          <div className="w-100 card3 bg-center inner-box">
            <div className="inter-card-text d-flex justify-content-between">
              <h3>Mumbai</h3>
              <p>7jan</p>
            </div>
          </div>
          <div className="w-100 card2 mt-2 bg-center inner-box end">
            <div className="inter-card-text d-flex justify-content-between">
              <h3>new York</h3>
              <p>21jan</p>
            </div>
          </div>
        </Col>
        <Col className="m-3 card-box-int card-inter card2">
          <div className="inter-card-text d-flex justify-content-between">
            <h3>Delhi</h3>
            <p>10 Offers</p>
          </div>
        </Col>
      </Slider>
    </Container>
  );
};

export default InternationalSection;
