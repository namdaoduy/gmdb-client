import React, { Component } from "react"
import { Form, Text } from 'informed'
import { Card, CardTitle, Button } from 'mdbreact'
import './login.css'
import API from './../../services/apis'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      error: ""
    }
  }
  
  validateRequired = (value) => {
    return (!value) ? 'This field is required' : null;
  }

  onSubmit = (values) => {
    // this.setState({
    //   disabled: true,
    //   error: ""
    // })
    // API.postLogin(values.username, values.password)
    // .then(res => {
    //   this.setState({disabled: false})
    //   if (res.error) {
    //     this.setState({error: JSON.stringify(res.error)})
    //   }
    //   else if (res.success) {
    //     localStorage.setItem('easy_event_token', res.token);
    //     this.props.history.push('/admin')
    //   }
    // })
  }

  render() {
    return(
      <div className="login-container">
        <div className="login-img">
          <img src={require("./../../assets/images/GMDB.png")} alt=""/>
        </div>
        <Form className="login-form" id="login" 
          onSubmit={this.onSubmit}>
        {({ formState }) => (
          <Card className="login-card">
            <CardTitle className="login-title">Đăng nhập</CardTitle>
            <Text type="text" 
              field="username" 
              placeholder=" Username" 
              className={"login-form-input" + (formState.errors.username ? " error" : "")}
              validate={this.validateRequired}/>
            <Text type="password" 
              field="password" 
              placeholder=" Password" 
              className={"login-form-input" + (formState.errors.password ? " error" : "")}
              validate={this.validateRequired}/>
            <h2 className="login-error">{this.state.error}</h2>
            <Button 
              type="submit" 
              size="sm" color="yellow" 
              className="login-submit"
              disabled={this.state.disabled}>
              {this.state.disabled ? "Please Wait ..." : "Đăng nhập"}
            </Button>
            <h3 className="login-h2">Chưa có tài khoản? <a href="/signup">Đăng ký</a> tại đây</h3>
          </Card>
        )}
        </Form>
      </div>
    )
  }
}