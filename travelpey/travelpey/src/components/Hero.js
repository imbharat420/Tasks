import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { bags } from '../assets/images';
import { FaUserAlt, FaCalendarAlt, FaLocationArrow } from 'react-icons/fa';
import CallModal from './CallModal';
const Hero = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <Container fluid className="landing d-flex justify-content-center align-items-center ">
      <CallModal setShow={setShow} show={show} />
      <Container className="d-flex justify-content-center align-items-center ">
        <Row className="flex flex-col d-flex justify-content-center align-items-center ">
          <Col sm={12} md={12} lg={4} xl={4} className="d-none d-md-flex justify-content-center">
            <img className="flights-landing-img" src={bags} alt="" />
          </Col>
          <Col sm={12} md={12} lg={6} xl={6}>
            <h1
              className="landing-hefirst m-none"
              style={{ color: 'white', fontWeight: 900, fontSize: '5rem', lineHeight: '0' }}
            >
              FLIGHTS
            </h1>
            <p
              style={{ backgroundColor: '#ffd700', fontSize: '19px', padding: '4px' }}
              className="my-5 fw-bold rounded p-2"
            >
              Get 20% off on your first flight
            </p>
            <ul
              className="submenu mt-2 d-flex justify-content-center"
              style={{
                'font-size': '1rem',
              }}
            >
              <div className="form-check form-check-inline text-center">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flight_type"
                  id="inlineRadio1"
                  checked
                  value="1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  One-way
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="flight_type" id="inlineRadio2" value="2" />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Round-trip
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="flight_type" id="inlineRadio3" value="3" />
                <label className="form-check-label" htmlFor="inlineRadio3">
                  Multi-city
                </label>
              </div>
            </ul>
            <Row className="d-flex justify-content-center align-items-center mb-2">
              <Col sm={5} md={5} lg={6} xl={6}>
                <div className="item-landing">
                  <span className="m-2">
                    <FaLocationArrow
                      style={{
                        color: '#2e7e7f',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                      }}
                    />
                  </span>
                  <input
                    name="check-in "
                    type="text"
                    id="search"
                    className="form-control  form-select form-select-sm"
                    placeholder="Where form ?"
                  />
                  <ul className="list-group" id="result" />
                </div>
              </Col>
              <Col sm={5} md={5} lg={6} xl={6}>
                <div className="item-landing ">
                  <span className="m-2">
                    <FaLocationArrow
                      style={{
                        color: '#2e7e7f',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                      }}
                    />
                  </span>
                  <input
                    name="check-in"
                    type="text"
                    id="search1"
                    className="form-control form-select form-select-sm"
                    placeholder="Where to ?"
                  />
                  <ul className="list-group" id="result1" />
                </div>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center mb-2">
              <Col sm={5} md={5} lg={6} xl={6}>
                <div className="item-landing">
                  <span className="m-2">
                    <FaCalendarAlt
                      style={{
                        color: '#2e7e7f',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                      }}
                    />
                  </span>
                  <input
                    name="check-in "
                    type="date"
                    id="search"
                    className="form-control  form-select form-select-sm"
                  />
                  <ul className="list-group" id="result" />
                </div>
              </Col>
              <Col sm={5} md={5} lg={6} xl={6}>
                <div className="item-landing ">
                  <span className="m-2">
                    <FaUserAlt
                      style={{
                        color: '#2e7e7f',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                      }}
                    />
                  </span>
                  <input
                    name="check-in"
                    type="text"
                    id="search1"
                    className="form-control form-select form-select-sm"
                    placeholder="Email"
                  />
                  <ul className="list-group" id="result1" />
                </div>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-center mb-2">
              <Col sm={5} md={5} lg={6} xl={6}>
                <div className="item-landing">
                  <span className="m-2">
                    <FaUserAlt
                      style={{
                        color: '#2e7e7f',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                      }}
                    />
                  </span>
                  <input
                    name="check-in "
                    type="text"
                    id="search"
                    className="form-control  form-select form-select-sm"
                    placeholder="Name"
                  />
                  <ul className="list-group" id="result" />
                </div>
              </Col>
              <Col sm={5} md={5} lg={6} xl={6}>
                <div className="item-landing ">
                  <span className="m-2">
                    <FaUserAlt
                      style={{
                        color: '#2e7e7f',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                      }}
                    />
                  </span>
                  <input
                    name="check-in"
                    type="text"
                    id="search1"
                    className="form-control form-select form-select-sm"
                    placeholder="Phone"
                  />
                  <ul className="list-group" id="result1" />
                </div>
              </Col>
            </Row>
            <div class="btn-row mt-4 d-flex justify-content-center align-items-center mb-2">
              <button class="landing-btn" onClick={handleShow}>
                Instant Book
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Hero;
