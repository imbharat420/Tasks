import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
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
    <Container className="slider-container">
      <Row>
        <Col>
          <Slider {...settings} className="mx-2">
            <div className="card-box">
              <div className="card7 card-inner">
                <div className="popular-card-text d-flex justify-content-between">
                  <h3>Mumbai to Bangkok</h3>
                </div>
              </div>
            </div>
            <div className="card-box">
              <div className="card4 card-inner">
                <div className="popular-card-text d-flex justify-content-between">
                  <h3>Mumbai to Bangkok</h3>
                </div>
              </div>
            </div>
            <div className="card-box">
              <div className="card1 card-inner">
                <div className="popular-card-text d-flex justify-content-between">
                  <h3>Washington to London</h3>
                </div>
              </div>
            </div>
            <div className="card-box">
              <div className="card2 card-inner">
                <div className="popular-card-text d-flex justify-content-between">
                  <h3>Newyork to Maldives</h3>
                </div>
              </div>
            </div>
            <div className="card-box">
              <div className="card3 card-inner">
                <div className="popular-card-text d-flex justify-content-between">
                  <h3>Ohio to Paris</h3>
                </div>
              </div>
            </div>
            <div className="card-box">
              <div className="card4 card-inner">
                <div className="popular-card-text d-flex justify-content-between">
                  <h3>San Francisco to Sydney</h3>
                </div>
              </div>
            </div>
            <div className="card-box">
              <div className="card4 card-inner">
                <div className="popular-card-text d-flex justify-content-between">
                  <h3>Mumbai to Bangkok</h3>
                </div>
              </div>
            </div>
            <div className="card-box">
              <div className="card5 card-inner">
                <div className="popular-card-text d-flex justify-content-between">
                  <h3>Mumbai to Bangkok</h3>
                </div>
              </div>
            </div>
            <div className="card-box">
              <div className="card7 card-inner">
                <div className="popular-card-text d-flex justify-content-between">
                  <h3>Mumbai to Bangkok</h3>
                </div>
              </div>
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

const SliderSection = () => {
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
      <SliderComponent />
    </Container>
  );
};

export default SliderSection;
