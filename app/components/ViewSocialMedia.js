import React from 'react';
import Button from '@material-ui/core/Button';

const ViewSocialMedia = () => (
  <div className="custom-call-to-action-container parallax custom-color-white d-flex justify-content-center align-items-center">
    <div className="custom-call-to-action-section container">
      <div className="custom-mb-40">
        <h3 className="custom-font-h3">Our quality is proven</h3>
      </div>
      <div className="custom-mb-40 molten-leading">
        We take our work seriously. Take a look at some of our past clients on
        our instagram and see for yourself!
      </div>
      <div>
        <a href="https://www.instagram.com/bigsmobile/" target="_blank">
          <Button color="primary" variant="extendedFab">
            View instagram
          </Button>
        </a>
      </div>
    </div>
  </div>
);

export default ViewSocialMedia;
