import React, { Component } from "react"
import "./navbar.css"
import { 
  Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'mdbreact'

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
      <Navbar color="warning-color" light expand="md" scrolling>
        <NavbarBrand href="/">
          <img className="brand-img" src={require("./../../assets/images/GMDB.png")}></img>
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
    )
  }
}