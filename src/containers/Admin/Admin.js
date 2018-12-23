import React, { Component } from "react"
import './admin.css'
import {
  Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink
} from 'mdbreact'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Footer } from './../../components/Footer'
import AdminComments from './AdminComments'
import AdminMovies from './AdminMovies'
import AdminTypes from './AdminTypes'

export default class EventAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      value: ""
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return(
      <div className="admin-container">
        <Navbar color="warning-color" light expand="md" scrolling>
          <NavbarBrand href="/">
            <img className="brand-img" src={require("./../../assets/images/GMDB.png")} alt=""></img>
          </NavbarBrand>
          <NavLink to="/" className="nav-title">Admin</NavLink>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem>
                <NavLink to="/admin/movies" className="nav-custom">Phim</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/admin/comments" className="nav-custom">Bình luận</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/admin/types" className="nav-custom">Thể loại</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <NavLink to="/login">Đăng xuất</NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>

        <div className="admin-inner">
          <Switch>
            <Route path="/admin/movies" component={AdminMovies} />
            <Route path="/admin/comments" component={AdminComments} />
            <Route path="/admin/types" component={AdminTypes} />
            <Redirect to="/admin/movies" />
          </Switch>
        </div>

        <Footer />
      </div>
    )
  }
}

