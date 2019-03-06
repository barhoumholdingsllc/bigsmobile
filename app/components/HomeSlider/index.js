import React from 'react';
import Slider from 'react-slick';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import CoverCarImage from 'images/cover-car-image.jpg';
import ScheduleDetailButton from '../ScheduleDetailButton';

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
        <style jsx="true">
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
                    <ScheduleDetailButton />
                  </div>
                  <div className="custom-mlr-10">
                    <Link to="/our-services">
                      <Fab color="secondary" variant="extended">
                        Our services
                      </Fab>
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
        ...style,
        color: '#fff',
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
        color: '#fff',
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
