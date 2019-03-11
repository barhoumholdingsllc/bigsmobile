import React from 'react';
import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftRounded';
import KeyboardArrowRightRounded from '@material-ui/icons/KeyboardArrowRightRounded';
import ExteriorCarLabel from '../ExteriorCarLabel';
import InteriorCarLabel from '../InteriorCarLabel';
import 'animate.css/animate.min.css';

const items = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

class BuildYourDetailSlider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = items.map(item => (
      <CarouselItem
        className="custom-tag"
        onExiting={this.onExiting}
        onExited={this.onExited}
        key={item.id}
      >
        {item.id == 1 ? (
          <ExteriorCarLabel
            id="BYD-exterior-view"
            packageFor={this.props.packageFor}
            vehicleType={this.props.vehicleType}
          />
        ) : (
          <InteriorCarLabel
            id="BYD-interior-view"
            packageFor={this.props.packageFor}
            vehicleType={this.props.vehicleType}
          />
        )}
      </CarouselItem>
    ));
    return (
      <div>
        <style jsx="true">
          {`
            .custom-previous,
            .custom-next {
              cursor: pointer;
            }
            .custom-carousel-control-prev-icon {
              display: inline-block;
              width: 32px;
              height: 32px;
              background: tranparent no-repeat center center;
              background-image: url(${KeyboardArrowLeftRounded});
            }
            .custom-carousel-control-next-icon {
              display: inline-block;
              width: 32px;
              height: 32px;
              background: tranparent no-repeat center center;
              background-image: url(${KeyboardArrowRightRounded});
            }
          `}
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          autoPlay={false}
          interval={false}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <a
            className="custom-previous carousel-control-prev animated slower infinite flash"
            role="button"
            tabIndex="0"
            onClick={this.previous}
          >
            <KeyboardArrowLeftRounded fontSize="large" className="custom-color-turqoise"/>
          </a>
          <a
            className="custom-next carousel-control-next animated slower infinite flash"
            role="button"
            tabIndex="0"
            onClick={this.next}
          >
            <KeyboardArrowRightRounded fontSize="large" className="custom-color-turqoise"/>
          </a>
        </Carousel>
      </div>
    );
  }
}

export default BuildYourDetailSlider;
