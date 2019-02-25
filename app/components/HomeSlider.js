import React from 'react';
import Slider from 'react-slick';
import Button from '@material-ui/core/Button';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import CoverCarImage from 'images/cover-car-image.jpg';

class HomeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      activeSlide2: 0,
    };
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      draggable: true,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            centerPadding: '0',
            swipeToSlide: true,
            draggable: true,
            nextArrow: <MobileNextArrow />,
            prevArrow: <MobilePrevArrow />,
          },
        },
      ],
      nextArrow: <WebNextArrow />,
      prevArrow: <WebPrevArrow />,
      accessibility: true,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current }),
    };
    return (
      <div>
        <style jsx>
          {`
            .custom-slide-first {
              background-image: url(${CoverCarImage});
            }
            .custom-slide-second {
              background-color: #17252a;
              color: #feffff;
            }
            .custom-slide-third {
              background-color: #2b7a78;
              color: #feffff;
            }
            .custom-slide {
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center center;
            }
          `}
        </style>
        <Slider className="" {...settings}>
          <div className="">
            <div className="custom-slide-first custom-slide">
              <div className="custom-color-white d-flex justify-content-center align-items-center custom-width-height-100 custom-col custom-text-left">
                <h2 className="custom-font-h2 custom-mb-40">Quality.</h2>
                <h2 className="custom-font-h2 custom-mb-40">Convenient.</h2>
                <h2 className="custom-font-h2 custom-mb-40">Detailed.</h2>
                <div className="custom-row">
                  <div className="custom-mlr-10">
                    <a
                      className="custom-bring-to-front"
                      href="https://booking.appointy.com/BigsMobile"
                      target="_blank"
                    >
                      <Button color="primary" variant="extendedFab">
                        schedule a detail
                      </Button>
                    </a>
                  </div>
                  <div className="custom-mlr-10">
                    <Link to="/our-services">
                      <Button color="secondary" variant="extendedFab">
                        Our services
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="custom-slide-second custom-slide">
              <div className="custom-color-white d-flex justify-content-center align-items-center custom-width-height-100 custom-col custom-text-left">
                <div className="container">
                  <div className="row">
                    <div className="col-sm">video goes here</div>
                    <div className="col-md">
                      <h2 className="custom-font-h2 custom-mb-40">
                        [another title]
                      </h2>
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="custom-slide-third custom-slide">
              <div className="custom-color-white d-flex justify-content-center align-items-center custom-width-height-100 custom-col custom-text-left">
                <h2 className="custom-font-h2 custom-mb-40">Quality.</h2>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

function MobileNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'fixed',
        right: '50px',
        zIndex: '9998',
      }}
      onClick={onClick}
    />
  );
}

function MobilePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'fixed',
        left: '50px',
        zIndex: '9998',
      }}
      onClick={onClick}
    />
  );
}

function WebNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        position: 'fixed',
        right: '125px',
        zIndex: '9998',
      }}
      onClick={onClick}
    >
      <KeyboardArrowRight />
    </div>
  );
}

function WebPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'fixed',
        left: '125px',
        zIndex: '9998',
      }}
      onClick={onClick}
    >
      <KeyboardArrowLeft />
    </div>
  );
}

export default HomeSlider;
