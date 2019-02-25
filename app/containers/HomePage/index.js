/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

// importing components

import Layout from 'components/Layout';
import Nav from 'components/Nav';
import Footer from 'components/Footer';
import CallToAction from 'components/CallToAction';
import ViewSocialMedia from 'components/ViewSocialMedia';
import ReviewsOfUs from 'components/ReviewsOfUs';

import HomeSlider from 'components/HomeSlider';

// importing from material-ui library

import Fab from '@material-ui/core/Fab';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Layout title="Home">
        <div className="custom-main-container">
          <Nav />
          <HomeSlider />
          <div className="custom-content-container">
            <div className="custom-two-by-two-grid-container">
              <div className="row-one">
                <div
                  id="cell-one"
                  className="custom-bg-black custom-color-white custom-grid-cell molten-leading"
                >
                  <h3 className="custom-font-h3 w-100">About us</h3>
                  <div className="custom-mb-40">
                    Our detailing products are top notch. Many of them come from
                    Wesmar out of Mukilteo Washington. Our processes are fine
                    tuned and we have the best interior and exterior mobile
                    detailing services in the Seattle area.
                  </div>
                  <Fab variant="extended">Schedule an appointment</Fab>
                </div>

                <div id="cell-two" className="custom-grid-cell molten-leading">
                  <h3 className="custom-font-h3 w-100">History</h3>
                  <div className="custom-mb-40">
                    Our detailing products are top notch. Many of them come from
                    Wesmar out of Mukilteo Washington. Our processes are fine
                    tuned and we have the best interior and exterior mobile
                    detailing services in the Seattle area.
                  </div>
                  <Fab variant="extended">Schedule an appointment</Fab>
                </div>
              </div>
              <div className="row-two">
                <div
                  id="cell-three"
                  className=" custom-bg-black custom-color-white custom-grid-cell molten-leading"
                >
                  <h3 className="custom-font-h3 w-100">Our services</h3>
                  <div className="custom-mb-40">
                    Our detailing products are top notch. Many of them come from
                    Wesmar out of Mukilteo Washington. Our processes are fine
                    tuned and we have the best interior and exterior mobile
                    detailing services in the Seattle area.
                  </div>
                  <Fab variant="extended">Schedule an appointment</Fab>
                </div>
                <div
                  id="cell-four"
                  className=" custom-grid-cell molten-leading"
                >
                  <h3 className="custom-font-h3 w-100">Schedule now!</h3>
                  <div className="custom-mb-40">
                    Our detailing products are top notch. Many of them come from
                    Wesmar out of Mukilteo Washington. Our processes are fine
                    tuned and we have the best interior and exterior mobile
                    detailing services in the Seattle area.
                  </div>
                  <Fab variant="extended">Schedule a detail</Fab>
                </div>
              </div>
            </div>
          </div>
          <ViewSocialMedia />
          <ReviewsOfUs />

          <CallToAction />
          <Footer />
        </div>
      </Layout>
    );
  }
}
