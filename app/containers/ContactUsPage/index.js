import React from 'react';
import Layout from 'components/Layout';
import Nav from 'components/Nav';
import GoogleMapReact from 'google-map-react';
import Footer from 'components/Footer';
import CallToAction from 'components/CallToAction';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';

import Axios from 'axios';

const AnyReactComponent = ({}) => <div>{}</div>;

class SimpleMap extends React.PureComponent {
  static defaultProps = {
    center: {
      lat: 47.8106521,
      lng: -122.3773551,
    },
    zoom: 12,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAM3sdC6tww3txGA3_LDw2SgbGc-ee_AxU' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={47.8106521} lng={-122.3773551} />
        </GoogleMapReact>
      </div>
    );
  }
}

const initialState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  open: false,
  error: '',
};

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, email, phone, subject, message } = this.state;
    console.log(this);
    const apiOrigin = 'https://bigs-mobile-detailing-api.herokuapp.com';
    // const apiOrigin = "http://localhost:3000"
    const url = `${apiOrigin}/api/email/send`;
    const response = Axios.post(url, {
      name,
      email,
      phone,
      subject,
      message,
    }).then(response => {
      console.log(response.data.sent);
      if (response.data.sent) {
        this.setState({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          open: true,
          error: '',
        });
      } else {
        this.setState({
          open: true,
          error: 'Something went wrong.. try again!',
        });
      }
    });
  };

  render() {
    return (
      <Layout title="Contact Us">
        <div className="custom-main-container">
          <Nav />
          <div className="custom-content-container">
            <div className="custom-bg-black custom-color-white">
              <div className="container pt-5 pb-5">
                <h1 className="custom-font-h1 mb-5">Contact Us</h1>
                <div>We want to hear from you!</div>
              </div>
            </div>

            <div className="custom-contact-form">
              <form className="m-5">
                <TextField
                  required
                  id="standard-required"
                  label="Name"
                  margin="normal"
                  value={this.state.name}
                  onChange={this.handleChange('name')}
                  fullWidth
                />
                <TextField
                  required
                  id="standard-required"
                  label="Email"
                  margin="normal"
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                  fullWidth
                />
                <TextField
                  required
                  id="standard-required"
                  label="Phone #"
                  margin="normal"
                  value={this.state.phone}
                  onChange={this.handleChange('phone')}
                  fullWidth
                />
                <TextField
                  required
                  id="standard-required"
                  label="Subject"
                  margin="normal"
                  value={this.state.subject}
                  onChange={this.handleChange('subject')}
                  fullWidth
                />

                <TextField
                  id="standard-multiline-flexible"
                  label="Message"
                  multiline
                  rowsMax="4"
                  value={this.state.message}
                  onChange={this.handleChange('message')}
                  fullWidth
                  margin="normal"
                />
                <div className="d-flex justify-content-center align-items-center m-5">
                  <Fab
                    onClick={this.handleSubmit}
                    color="primary"
                    variant="extended"
                  >
                    send email
                  </Fab>
                </div>
              </form>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1371269.7597904876!2d-122.331484!3d47.834532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xefef99bfe1a38bda!2sBig&#39;s+Mobile+Detailing!5e0!3m2!1sen!2sus!4v1552274714781"
              height="450"
              frameBorder="0"
              className="w-100"
              allowFullScreen
            />
          </div>
          <CallToAction />
          <Footer />
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={5000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={
            this.state.error === '' ? (
              <span id="message-id">Message sent!</span>
            ) : (
              <span id="message-id">{this.state.error}</span>
            )
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Layout>
    );
  }
}

export default ContactForm;
