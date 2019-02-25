import React from 'react';
import { Link } from 'react-router-dom';
import Facebook from 'images/facebook.png';
import Instagram from 'images/instagram.png';
import Twitter from 'images/twitter.png';
import BigsLogo from 'images/bigs-mobile-detailing-logo.png';

const Footer = () => (
  <div className="custom-footer-container custom-bg-footer-grey custom-color-white">
    <div className="custom-footer-section container">
      <div className="custom-footer-topline custom-border-bottom">
        <div className="custom-topline-text">Connect with us!</div>
        <div className="custom-footer-social-media-container">
          <div className="custom-footer-social-media-section">
            <a
              className="mr-5"
              href="https://www.facebook.com/bigsmobiledetailing/"
              target="_blank"
            >
              <img src={Facebook} alt="facebook icon" width="20" height="20" />
            </a>
            <a
              className="mr-5"
              href="https://www.instagram.com/bigsmobile/"
              target="_blank"
            >
              <img
                src={Instagram}
                alt="instagram icon"
                width="20"
                height="20"
              />
            </a>
            <a
              className="mr-5"
              href="https://twitter.com/bigsmobile"
              target="_blank"
            >
              <img src={Twitter} alt="twitter icon" width="20" height="20" />
            </a>
          </div>
        </div>
      </div>
      <div className="custom-footer-bottomline">
        <div>
          <h1 className="custom-footer-navigation-title">NAVIGATION</h1>
          <div className="custom-footer-navigation-items">
            <Link className="custom-naked-a" to="/">
              Home
            </Link>
          </div>
          <div className="custom-footer-navigation-items">
            <Link className="custom-naked-a" to="/our-services">Our Services
            </Link>
          </div>
          <div className="custom-footer-navigation-items">Careers</div>
          <div className="custom-footer-navigation-items">
            <Link className="custom-naked-a" to="/contact-us">Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="custom-footer-copyright-terms-of-service d-flex align-items-center">
        <Link className="custom-naked-a custom-bring-to-front" to="/">
          <img
              src={BigsLogo}
              alt="bigs mobile detailing logo"
              width="50"
              height="50"
            />
        </Link>
        <Link className=" custom-naked-a custom-bring-to-front" to="/">
            <div>&copy; Big's Mobile Detailing</div>
        </Link>
      </div>
    </div>
  </div>
);

export default Footer;
