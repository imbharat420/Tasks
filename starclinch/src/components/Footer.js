import React from "react";
import logo from "../resources/Vectorlogo.png";
import payment from "../resources/payment.png";
import "./styles/Footer.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";





function Footer() {
  return (
    <div className="Footer maxWidth">
      <div className="FooterLogoDiv">
        <div className="Footerlogo">
          <img src={logo} alt="" />
          <p className="large">StarClinch</p>
        </div>
        <div className="foooterSocialMedia">
          <FacebookRoundedIcon fontSize="small" style={{ color: '#1877f2' }} />
          <TwitterIcon fontSize="small" style={{ color: '#1da1f2' }} />
          <YouTubeIcon fontSize="small" style={{ color: '#ff0000' }} />
          <InstagramIcon fontSize="small" style={{ color: '#fa7e1e' }} />
        </div>
      </div>
      <div className="FooterParentdiv">
        <div className="links_div">
          <div>
            <p className="medium footerHeading" style={{ fontWeight: 600 }}>
              FOR BUYERS
            </p>
            <div className="links">
              <p className="small" style={{ color: "#18BC9C" }}>
                Our Buyers
              </p>
              <p className="small" style={{ color: "#18BC9C" }}>
                Browse
              </p>
              <p className="small" style={{ color: "#18BC9C" }}>
                Post Your Requirement
              </p>
              <p className="small" style={{ color: "#18BC9C" }}>
                Entertainment on EMI
              </p>
            </div>


          </div>
          <div>
            <p className="medium footerHeading" style={{ fontWeight: 600 }}>
              FOR BUYERS
            </p>
            <div className="links">
              <p className="small" style={{ color: "#18BC9C" }}>
                Our Buyers
              </p>
              <p className="small" style={{ color: "#18BC9C" }}>
                Browse
              </p>
              <p className="small" style={{ color: "#18BC9C" }}>
                Post Your Requirement
              </p>
              <p className="small" style={{ color: "#18BC9C" }}>
                Entertainment on EMI
              </p>
            </div>

            <p className="medium footerHeading" style={{ fontWeight: 600 }}>
              ABOUT US
            </p>
            <div className="links">
              <p className="small" style={{ color: "#18BC9C" }}>
                Our Story
              </p>
              <p className="small" style={{ color: "#18BC9C" }}>
                Careers
              </p>
            </div>
          </div>
        </div>
        <div className="address_div">
          <div>
            <p className="medium footerHeading" style={{ fontWeight: 600 }}>
              REGISTERED OFFICE <br /> ADDRESS:
            </p>
            <p className="small">
              VINSM Globe Private Limited <br />
              Percept House, Ground Floor <br />
              East of Kailash, New Delhi
              <br />
              CIN: U52605DL2012PTC236944
              <br />
              Phone: +91 11 498 498 01
            </p>
            <div className="links">
              <p
                className="small"
                style={{ color: "#18BC9C", marginTop: "5px" }}
              >
                Contact Us
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="paymentd">
        <div className="PaymentImage">
          {/* <img src={payment} alt="" /> */}
        </div>
          <p className="small">
            © Copyright 2015-2023 |{" "}
            <span style={{ color: "#18BC9C" }}>Global Pvt. Ltd.</span> |
            All Rights Reserved.
          </p>
      </div>
    </div>
  );
}

export default Footer;
