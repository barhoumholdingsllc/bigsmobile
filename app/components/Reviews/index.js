import React from 'react';
import StarRounded from '@material-ui/icons/StarRounded';
import Facebook from 'images/facebook128x128.png';
import Yelp from 'images/yelp128x128.png';
import Google from 'images/google128x128.png';

const Reviews = () => (
  <div className="custom-call-to-action-container custom-bg-sub-footer-black custom-color-white">
    <div className="custom-call-to-action-section container">
      <h3 className="custom-font-h3">Reviews</h3>
      <div className="d-flex w-100 justify-content-around custom-review-social-media-container">
        <div className="w-100 custom-mb-40 d-flex flex-column align-items-center">
          <img
            className="mb-3"
            width="64"
            height="64"
            src={Facebook}
            alt="facebook"
          />
          <div className="pb-3 d-flex align-center">
            <StarRounded />
            <span className="d-flex align-items-center">4.9/5</span>
          </div>
          <div className="custom-review-quote pl-3 pr-3">
            "Mark came and did the most thorough detail and shampooing of the
            interior of my car. Will recommend and call again"
            <div className="text-muted">
              <i>-Lisa F.</i>
            </div>
          </div>
        </div>
        <div className="w-100 custom-mb-40 d-flex flex-column align-items-center">
          <img className="mb-3" width="64" height="64" src={Yelp} alt="yelp" />
          <div className="pb-3 d-flex align-center">
            <StarRounded />
            <span className="d-flex align-items-center">4.3/5</span>
          </div>
          <div className="custom-review-quote pl-3 pr-3">
            "It was beyond what I was expecting and definitely met my
            satisfaction...."
            <div className="text-muted">
              <i>-Thanh H.</i>
            </div>
          </div>
        </div>
        <div className="w-100 custom-mb-40 d-flex flex-column align-items-center">
          <img
            className="mb-3"
            width="64"
            height="64"
            src={Google}
            alt="google"
          />
          <div className="pb-3 d-flex align-center">
            <StarRounded />
            <span className="d-flex align-items-center">4.6/5</span>
          </div>
          <div className="custom-review-quote pl-3 pr-3">
            "Thank you for the quick service, the punctuality and the amazing
            results. 10/10 would recommend and would use them again"
            <div className="text-muted">
              <i>-Thasit A.</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Reviews;
