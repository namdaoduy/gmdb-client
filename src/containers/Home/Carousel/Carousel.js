import React, { Component } from "react"
import {
  Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask
} from 'mdbreact'

export default class Event extends Component {
  render() {
    return (
      <div id="home-carousel" className="home-carousel">
        <Carousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <img className="w-100" 
                src={require("./../../../assets/images/bumblebee-banner.jpg")} alt="" />
              <CarouselCaption>
                <h1 className="h1-responsive capt">BUMBLEBEE</h1>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
              <img className="w-100" 
                src={require("./../../../assets/images/aquaman-banner.jpg")} alt="" />
              <CarouselCaption>
                <h1 className="h1-responsive capt">AQUAMAN</h1>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="3">
              <img className="w-100" 
                src={require("./../../../assets/images/spiderman-banner.jpg")} alt="" />
              <CarouselCaption>
                <h1 className="h1-responsive capt">SPIDERMAN: INTO THE SPIDER-VERSE</h1>
              </CarouselCaption>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </div>
    )
  }
}