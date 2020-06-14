import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { InputBox } from "./subcomponents/InputBox";

class Register extends React.Component {
  state = {
    email: "",
    username: "",
    password: "",
    emailErrMsg: "",
    usernameErrMsg: "",
    usernameLenErrMsg: "",
    pwdLenErrMsg: "",
    emailAlrExist: "",
    usernameAlrExist: "",
    validEmail: false,
    validUsername: false,
    validPwd: false,
    emailReqPF: true,
    usernameReqPF: true,
    pwdReqPF: true,
    redirect: null,
  };

  onRegister = async () => {
    // this.props.registerUser(
    //   this.state.email,
    //   this.state.username,
    //   this.state.password
    // );
  };

  handleEmail = (e) => {
    const email = e.target.value;

    this.setState({
      email,
      validEmail: true,
      emailErrMsg: "",
      emailAlrExist: "",
    });

    if (!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) {
      this.setState({
        validEmail: false,
        emailErrMsg: "This email is invalid",
      });
    }

    if (email.length === 0) {
      this.setState({
        validEmail: false,
        emailErrMsg: "",
      });
    }
  };

  handleUsername = (e) => {
    const username = e.target.value;
    let minUsrLen = 5;

    this.setState({
      username,
      validUsername: true,
      usernameErrMsg: "",
      usernameLenErrMsg: "",
      usernameAlrExist: "",
    });

    if (0 < username.length && username.length < minUsrLen) {
      this.setState({
        validUsername: false,
        usernameLenErrMsg: `Username must be at least ${minUsrLen} chars`,
      });
    }
    if (!/^[a-zA-Z0-9]*$/.test(username)) {
      this.setState({
        validUsername: false,
        usernameErrMsg: "Username must be alphanumeric",
      });
    }
    if (username.length === 0) {
      this.setState({
        validUsername: false,
      });
    }
  };

  handlePassword = (e) => {
    let password = e.target.value;
    let minPwdLen = 8;
    this.setState({ password, validPwd: true, pwdLenErrMsg: "" });
    if (0 < password.length && password.length < minPwdLen) {
      this.setState({
        pwdLenErrMsg: `Password must be at least ${minPwdLen} chars`,
        validPwd: false,
      });
    }
    if (password.length === 0) {
      this.setState({
        validPwd: false,
      });
    }
  };

  render() {
    // console.log(this.props);
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        <section className="mow" id="regP">
          <div className="card">
            <div className="card-content">
              <h1 className="title is-3">Register</h1>

              <InputBox
                label="Phone"
                placeholder="+65 9389 8429"
                icon="phone"
                value={this.state.email}
                inputHandler={this.handleEmail}
                reqPF={this.state.emailReqPF}
                validity={this.state.validEmail}
                dangerTexts={[this.state.emailAlrExist, this.state.emailErrMsg]}
              ></InputBox>

              <InputBox
                label="Username"
                placeholder="Username"
                icon="user"
                value={this.state.username}
                inputHandler={this.handleUsername}
                reqPF={this.state.usernameReqPF}
                validity={this.state.validUsername}
                dangerTexts={[
                  this.state.usernameAlrExist,
                  this.state.usernameErrMsg,
                  this.state.usernameLenErrMsg,
                ]}
              ></InputBox>

              <InputBox
                label="Password"
                placeholder="Password"
                type="password"
                icon="lock"
                value={this.state.password}
                inputHandler={this.handlePassword}
                reqPF={this.state.pwdReqPF}
                validity={this.state.validPwd}
                dangerTexts={[this.state.pwdLenErrMsg]}
              ></InputBox>

              <InputBox
                label="Address"
                placeholder="Blk 123 Bishan St 12 #12-345"
                type=""
                icon="home"
                value=""
                inputHandler={this.handlePassword}
                reqPF={this.state.pwdReqPF}
                validity={this.state.validPwd}
                dangerTexts={[this.state.pwdLenErrMsg]}
              ></InputBox>

              {/* id="regBtn" */}
              <div className="mtb30">
                {/* <div>{this.props.users.regErrMsg}</div> */}
                <button
                  onClick={this.onRegister}
                  // disabled={
                  //   !(
                  //     this.state.validEmail &&
                  //     this.state.validPwd &&
                  //     this.state.validUsername
                  //   )
                  // }
                  className="button is-primary"
                >
                  Register
                </button>
              </div>

              <div className="field mtb10">
                <div className="control">
                  <span>
                    Already have an Account?{" "}
                    <Link className="link" to="/login">
                      Sign-in here.
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Register;
