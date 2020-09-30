import React from "react";
import { connect } from "react-redux";
import {User} from '../includes';
import {
  userNameChange,
  userPasswordChange,
  userLoginSubmit
} from "../includes/actions.js";
class Login extends React.Component {
  isLogin() {
    if (User.isLogin()) {
      this.props.history.push("/quiz");
    }
  }
  componentDidUpdate() {
    this.isLogin();
  }
  componentWillMount() {
    this.isLogin();
  }
  handleChange = name => event => {
    if (name === "username") {
      this.props.onUserNameChange(event.target.value);
    } else if (name === "password") {
      this.props.onUserPasswordChange(event.target.value);
    }
  };
  onSubmit(event) {
    event.preventDefault();
    this.props.onLoginSubmit(
      this.props.login.username,
      this.props.login.password
    );
  }


  render() {
    return (
      <div>
        <div>
          <h1>Login</h1>
        </div>
        <form name="loginForm" onSubmit={this.onSubmit}>
          <label>Email</label>
          <input
            type="text"
            value={this.props.login.username}
            name="username"
            onChange={this.handleChange("username")}
          />
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={this.props.login.password}
            onChange={this.handleChange("password")}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

//dispatchleri maplemeye yarar
const mapDispatchToProps = {
  onUserNameChange: userNameChange,
  onUserPasswordChange: userPasswordChange,
  onLoginSubmit: userLoginSubmit
};

export default connect(mapStateToProps,
  mapDispatchToProps) (Login);
