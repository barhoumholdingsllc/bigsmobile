import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Axios from 'axios';
const initialState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  open: false,
  error: '',
};

class ContactForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    // this.handleClose = this.handleClose.bind(this);
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
      <div>
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
            <Button
              onClick={this.handleSubmit}
              color="primary"
              variant="extendedFab"
            >
              send email
            </Button>
          </div>
        </form>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={600000}
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
            <Button
              key="undo"
              color="secondary"
              size="small"
              onClick={this.handleClose}
            >
              UNDO
            </Button>,
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
      </div>
    );
  }
}

export default ContactForm;
