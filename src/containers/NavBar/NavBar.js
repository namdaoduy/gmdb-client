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
          <img className="brand-img" src={require("./../../assets/images/GMDB.png")} alt=""></img>
        </NavbarBrand>
        <NavLink to="/" className="nav-title">GMDb</NavLink>
        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
        <Collapse isOpen={this.state.collapse} navbar>
          <NavbarNav left>
            <NavItem active>
              <NavLink to="#" className="nav-custom">Trang chủ</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#" className="nav-custom">Lịch chiếu</NavLink>
            </NavItem>
            <NavItem>
              <Dropdown>
                <DropdownToggle nav caret className="nav-custom">Thể loại</DropdownToggle>
                <DropdownMenu className="drop-menu-custom">
                  <DropdownItem href="#">Đang chiếu</DropdownItem>
                  <DropdownItem href="#">Sắp chiếu</DropdownItem>
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
              <input className="form-control" type="text" placeholder="Tìm tên phim" aria-label="Tìm tên phim"/>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    )
  }
}