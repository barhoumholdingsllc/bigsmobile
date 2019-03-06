import React from 'react';
import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';
import LeftArrow from 'images/left-arrow32.png';
import RightArrow from 'images/right-arrow32.png';
import ExteriorCarLabel from '../ExteriorCarLabel';
import InteriorCarLabel from '../InteriorCarLabel';

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
              background-image: url(${LeftArrow});
            }
            .custom-carousel-control-next-icon {
              display: inline-block;
              width: 32px;
              height: 32px;
              background: tranparent no-repeat center center;
              background-image: url(${RightArrow});
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
            className="custom-previous carousel-control-prev animated infinite pulse"
            role="button"
            tabIndex="0"
            onClick={this.previous}
          >
            <span className="custom-carousel-control-prev-icon" aria-hidden />
          </a>
          <a
            className="custom-next carousel-control-next animated infinite pulse"
            role="button"
            tabIndex="0"
            onClick={this.next}
          >
            <span className="custom-carousel-control-next-icon" aria-hidden />
          </a>
        </Carousel>
      </div>
    );
  }
}

export default BuildYourDetailSlider;
