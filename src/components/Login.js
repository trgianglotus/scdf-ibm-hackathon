import React from "react";
import { Redirect } from "react-router-dom";
// import { logInUser } from "../constants/actionCreators";
import { InputBox } from "./subcomponents/InputBox";
// import { login } from "../api";

export default class extends React.Component {
  state = {
    username: "",
    password: "",
    usernameReqPF: false,
    pwdReqPF: false,
    errMsg: "",
    redirect: null,
    loginErrMsg: "",
  };
  onLogin = async () => {
    // this.props.logInUser(this.state.username, this.state.password);
  };

  handleUsername = (e) => {
    let username = e.target.value;
    this.setState({ username });
  };

  handlePassword = (e) => {
    let password = e.target.value;

    this.setState({ password });
    if (password.length < 8) {
      this.setState({ errMsg: "Password must be longer than 8 chars" });
    }
    if (password.length === 0) {
      this.setState({ errMsg: "" });
    }
  };

  render() {
    // console.log(this.props);
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div>
        <section className="mow" id="loginP">
          <div className="card">
            <div className="card-content">
              <h1 className="title is-3">Login</h1>
              <InputBox
                label="Username"
                placeholder="Username"
                icon="user"
                value={this.state.username}
                inputHandler={this.handleUsername}
                reqPF={this.state.usernameReqPF}
                dangerTexts={[]}
              ></InputBox>

              <InputBox
                label="Password"
                placeholder="Password"
                type="password"
                icon="lock"
                value={this.state.password}
                inputHandler={this.handlePassword}
                reqPF={this.state.pwdReqPF}
                dangerTexts={[]}
              ></InputBox>
              <div>
                <input className="inp-cbx" id="noon" type="checkbox" />
                <label className="cbx" htmlFor="noon">
                  <span>
                    <svg width="12px" height="10px">
                      <use xlinkHref="#check"></use>
                    </svg>
                  </span>
                  <span>Remember me</span>
                </label>
                <svg className="inline-svg">
                  <symbol id="check" viewBox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                  </symbol>
                </svg>
              </div>

              <div className="control mtb20">
                {/* <p className="help is-danger">{this.props.users.loginErrMsg}</p> */}
                <p className="help is-danger">{this.state.loginErrMsg}</p>
                <button onClick={this.onLogin} className="button is-primary">
                  Login
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

// export default Login;
