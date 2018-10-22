import React, { Component } from "react"
import "./home.css"
import { 
  Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask
} from 'mdbreact'
import { Event } from './Event'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  render() {
    return (
      <div className="home">
        <Navbar color="warning-color" light expand="md" scrolling>
          <NavbarBrand href="/">
            <strong>EasyEvent</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem active width={50}>
                <NavLink to="#">Trang chủ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Tham gia</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Tạo sự kiện</NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>Thể loại</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="#">Mới nhất</DropdownItem>
                    <DropdownItem href="#">Phổ biến nhất</DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem href="#">Công nghệ</DropdownItem>
                    <DropdownItem href="#">Hội thảo</DropdownItem>
                    <DropdownItem href="#">Giải trí</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
              </NavItem>
              <NavItem>
                <NavLink to="#">Đăng nhập</NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>

        <div id="home-carousel" className="home-carousel">
          <Carousel
            visible={false}
            activeItem={1}
            length={4}
            showControls={true}
            showIndicators={true}
            className="z-depth-1">
            <CarouselInner>
              <CarouselItem itemId="1">
                <View>
                  <img className="d-block w-100" src={require("./../../assets/images/google.jpg")} alt="First slide" />
                  <Mask overlay="black-light"></Mask>
                </View>
                <CarouselCaption>
                  <h3 className="h3-responsive">GOOGLE DIGITAL 4.0</h3>
                  <p>Hà Nội</p>
                </CarouselCaption>
              </CarouselItem>
              <CarouselItem itemId="2">
                <View>
                  <img className="d-block w-100" src={require("./../../assets/images/carousel.jpg")} alt="Second slide" />
                  <Mask overlay="black-light"></Mask>
                </View>
                <CarouselCaption>
                  <h3 className="h3-responsive">GOOGLE DIGITAL 4.0</h3>
                  <p>Hà Nội</p>
                </CarouselCaption>
              </CarouselItem>
              <CarouselItem itemId="3">
                <View>
                  <img className="d-block w-100" src={require("./../../assets/images/google.jpg")} alt="Third slide" />
                  <Mask overlay="black-light"></Mask>
                </View>
                <CarouselCaption>
                  <h3 className="h3-responsive">GOOGLE DIGITAL 4.0</h3>
                  <p>Hà Nội</p>
                </CarouselCaption>
              </CarouselItem>
              <CarouselItem itemId="4">
                <View>
                  <img className="d-block w-100" src={require("./../../assets/images/carousel.jpg")} alt="Mattonit's item" />
                  <Mask overlay="black-light"></Mask>
                </View>
                <CarouselCaption>
                  <h3 className="h3-responsive">GOOGLE DIGITAL 4.0</h3>
                  <p>Hà Nội</p>
                </CarouselCaption>
              </CarouselItem>
            </CarouselInner>
          </Carousel>
        </div>

        <div id="home-list" className="home-list">
          <div className="row">
            <Event />
            <Event />
            <Event />

            <Event />
            <Event />
            <Event />

            <Event />
            <Event />
            <Event />
          </div>
        </div>
      </div>
    )
  }
}