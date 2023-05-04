import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FaPhone, FaTimes } from 'react-icons/fa';

const CallModal = ({ show, setShow }) => {
  const handleShow = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleShow} centered>
        <Modal.Body className="bg-theme">
          <div className="container call-screen">
            <span className="fs-3 text-nowrap d-block" style={{ color: 'rgb(38, 38, 38)' }}>
              Call for reservation
            </span>
            <span className="text-center" style={{ fontSize: '16px', fontWeight: 600, color: 'rgb(38, 38, 38)' }}>
              Bookings, Cancellations, Changes and Inquiry
            </span>
            <span className="mobile-no text-nowrap" style={{ color: 'rgb(38, 38, 38)' }}>
              +1 8886763247
            </span>
            <span className="fs-1 text-nowrap" style={{ color: 'rgb(38, 38, 38)' }}>
              Click To Call :
            </span>
            <button
              className="btn btn-link"
              onClick={handleShow}
              style={{ position: 'absolute', top: '10px', right: '10px' }}
            >
              <FaTimes className="fa-xmark" />
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ padding: '0px' }}>
          <a target="_parent" href="tel:+1 8886763247" className="bottom-no bg-yellow">
            <FaPhone />
            <span
              className="text-nowrap"
              href="tel:+1 8886763247"
              style={{ color: 'rgb(38, 38, 38)', fontWeight: 500 }}
            >
              {' '}
              +1 8886763247
            </span>
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CallModal;
