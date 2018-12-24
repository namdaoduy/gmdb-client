import React, { Component } from "react"
import "./navbar.css"
import { 
  Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'mdbreact'

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      value: ""
    };
    this.onClick = this.onClick.bind(this);
    this.handleSubmit = this.props.handleSubmit;
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  onSubmit = (e) => {
    if (e.key === 'Enter') {
      this.handleSubmit(this.state.value)
    }
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
              <NavLink to="/" className="nav-custom">Trang chủ</NavLink>
            </NavItem>
            <NavItem>
              <Dropdown>
                <DropdownToggle nav caret className="nav-custom">Thể loại</DropdownToggle>
                <DropdownMenu className="drop-menu-custom">
                  <DropdownItem href="/type/Action">Hành động</DropdownItem>
                  <DropdownItem href="/type/Adventure">Phiêu lưu</DropdownItem>
                  <DropdownItem href="/type/Fiction">Khoa học viễn tưởng</DropdownItem>
                  <DropdownItem href="/type/Horror">Kinh dị</DropdownItem>
                  <DropdownItem href="/type/Family">Gia đình</DropdownItem>
                  <DropdownItem href="/type/Comedy">Hài</DropdownItem>
                  <DropdownItem href="/type/Romance">Tình cảm</DropdownItem>
                  <DropdownItem href="/type/Drama">Tâm lý</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
            <NavItem>
              <NavLink to="/login" className="nav-custom">Quản lý</NavLink>
            </NavItem>
          </NavbarNav>
          <NavbarNav right>
            <NavItem>
              <input className="form-control" type="text" placeholder="Tìm tên phim" aria-label="Tìm tên phim" 
                onChange={e => this.setState({value: e.target.value})}
                onKeyPress={e => { this.onSubmit(e) }}
              />
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    )
  }
}