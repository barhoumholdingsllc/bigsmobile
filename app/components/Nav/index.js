import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Collapse, Navbar, Nav, NavItem } from 'reactstrap';
import BigsLogo from 'images/bigs-mobile-detailing-logo.png';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Navbar
        className="sticky-top custom-bg-nav-grey custom-color-white custom-bring-to-front-nav"
        dark
        expand="md"
      >
        <Link to="/">
          <img
            src={BigsLogo}
            alt="bigs mobile detailing logo"
            width="50"
            height="50"
          />
        </Link>
        <Button className="navbar-toggler" onClick={this.toggle}>
          <span className="navbar-toggler-icon" />
        </Button>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto mt-2 mb-2 w-100" navbar>
            <NavItem className="m-1">
              <Link className="nav-item custom-naked-a nav-link" to="/">
                Home
              </Link>
            </NavItem>
            <NavItem className="m-1">
              <Link
                className="nav-item custom-naked-a nav-link"
                to="/our-services"
              >
                Our services
              </Link>
            </NavItem>
            <NavItem className="m-1">
              <Link
                className="nav-item custom-naked-a nav-link"
                to="/contact-us"
              >
                Contact us
              </Link>
            </NavItem>
            <NavItem className="m-1">
              <a
                className="nav-item custom-naked-a nav-link"
                href="https://booking.appointy.com/BigsMobile"
                target="_blank"
              >
                Schedule a detail
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
