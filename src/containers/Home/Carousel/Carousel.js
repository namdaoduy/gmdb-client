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
          length={4}
          showControls={true}
          showIndicators={true}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="w-100" 
                  src={require("./../../../assets/images/venom-banner.jpg")} alt="" />
              </View>
              <CarouselCaption>
                <h1 className="h1-responsive capt">VENOM</h1>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
            <View>
                <img className="w-100" 
                  src={require("./../../../assets/images/venom-banner.jpg")} alt="" />
              </View>
              <CarouselCaption>
                <h1 className="h1-responsive capt">VENOM</h1>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img className="w-100" 
                  src={require("./../../../assets/images/venom-banner.jpg")} alt="" />
              </View>
              <CarouselCaption>
                <h1 className="h1-responsive capt">VENOM</h1>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img className="w-100" 
                  src={require("./../../../assets/images/venom-banner.jpg")} alt="" />
              </View>
              <CarouselCaption>
                <h1 className="h1-responsive capt">VENOM</h1>
              </CarouselCaption>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </div>
    )
  }
}