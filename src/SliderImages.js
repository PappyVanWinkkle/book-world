import React, { Component } from "react";
import book15 from "./images/posters/book15.jpg";
import book9 from "./images/posters/book9.jpg";
import book12 from "./images/posters/book12.jpg";
import book16 from "./images/posters/book16.jpg";
import book8 from "./images/posters/book8.jpg";
import book14 from "./images/posters/book14.jpg";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src: `${book15}`,
    altText: "Book Image"
  },
  {
    src: `${book12}`,
    altText: "Book Image"
  },
  {
    src: `${book9}`,
    altText: "Book Image"
  },
  {
    src: `${book8}`,
    altText: "Book Image"
  },
  {
    src: `${book16}`,
    altText: "Book Image"
  },
  {
    src: `${book14}`,
    altText: "Book Image"
  }
];

class SliderImages extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, paused: false };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.pause = this.pause.bind(this);
    this.cycle = this.cycle.bind(this);
  }
  next() {
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    this.setState({ activeIndex: newIndex });
  }

  pause() {
    this.setState({ paused: true });
  }

  cycle() {
    this.setState({ paused: false });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item, idx) => {
      return (
        <CarouselItem key={idx} src={item.src} altText={item.altText}>
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={this.state.activeIndex}
        next={this.next}
        previous={this.previous}
        paused={this.state.paused}
        hoverStart={this.pause}
        hoverEnd={this.cycle}
      >
        <CarouselIndicators
          items={slides}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default SliderImages;
