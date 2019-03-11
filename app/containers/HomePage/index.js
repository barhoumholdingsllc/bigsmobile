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
import Reviews from 'components/Reviews';

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
                  className="w-100 custom-bg-black custom-color-white custom-grid-cell molten-leading"
                >
                  <h3 className="custom-font-h3 w-100">Quality</h3>
                  <div className="custom-mb-40">
                    All of our products are locally sourced, from Mukilteo
                    Washington, and the the highest quality on the market! Our
                    auto detailers are well trained and have a strong
                    understanding of how to perform the perfect auto detail.
                    From the washing and drying of the paint, to the vacuuming
                    of the interior, our team is focused on making your vehicle
                    look brand new!
                  </div>
                  <Fab variant="extended">View our past work</Fab>
                </div>

                <div
                  id="cell-two"
                  className="w-100 custom-grid-cell molten-leading"
                >
                  <h3 className="custom-font-h3 w-100">Convenient</h3>
                  <div className="custom-mb-40">
                    Our company was built around making it simple and affordable
                    for the everyday person to get their car detailed. Whether
                    it’s in your driveway, at your workplace, or at a friend’s
                    house, we want you to be able to fit an auto detailing
                    appointment into your schedule! Just use our online booking
                    to find a date that works for you, tell us where you would
                    like to have your car detailed, and we will be there. It’s
                    really that easy!
                  </div>
                  <Fab variant="extended">View our services</Fab>
                </div>
              </div>
              <ReviewsOfUs />
              <div className="row-two">
                <div
                  id="cell-three"
                  className="w-100 custom-bg-black custom-color-white custom-grid-cell molten-leading"
                >
                  <h3 className="custom-font-h3 w-100">Detailed</h3>
                  <div className="custom-mb-40">
                    Whether it’s applying wax to the paint, or cleaning the
                    interior, every step of the processes requires taking the
                    extra time to attention to detail. This is why our auto
                    detailers only have 1 or 2 appointments per day! We want
                    your car to be their main focus. Along with that, our auto
                    detailers are thoroughly vetted and trained. Only about 1/20
                    applicants become auto detailers, and about 1/10 auto
                    detailers come on full time after training. We want the best
                    people with the best products working on your vehicle.
                  </div>
                  <Fab variant="extended">Contact us</Fab>
                </div>
                <div
                  id="cell-four"
                  className="w-100 custom-grid-cell molten-leading"
                >
                  <h3 className="custom-font-h3 w-100">Local</h3>
                  <div className="custom-mb-40">
                    Big’s Mobile Detailing started in Edmonds washington in
                    2014. We have now serviced thousands of vehicles from
                    Bellingham all the way to downtown Seattle. Whether you’re
                    on the east side in the Kirkland and Bellevue area, or
                    you’re on the Shoreline, Ballard, and Lynnwood side of town,
                    we are your local auto detailer! Give us a call and we will
                    come to you wherever you’re at in the Puget Sound!
                  </div>
                  <Fab variant="extended">Schedule a detail</Fab>
                </div>
              </div>
            </div>
          </div>
          <Reviews />
          <ViewSocialMedia />
          <CallToAction />
          <Footer />
        </div>
      </Layout>
    );
  }
}
