import React, { Component } from 'react';
// import ReactGA from 'react-ga';

import FixedBRButton from '../FixedBRButton';

// const Layout = (props) => (
//     <div>
//         <Head title={props.title}>
//             </Head>
//         {props.children}
//     </div>
// );

export default class Layout extends Component {
  componentDidMount() {
    // ReactGA.initialize("UA-76850691-1");
    // ReactGA.pageview(document.location.pathname);
  }

  render() {
    return (
      <div>
        {this.props.children}
        <FixedBRButton />
      </div>
    );
  }
}
