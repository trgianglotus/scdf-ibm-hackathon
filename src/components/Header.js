import React from "react";
import { Link } from "react-router-dom";

const LoggedInOrOutView = (props) => {
  if (props.currentUser) {
    return (
      <React.Fragment>
        <li className="nav-item">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/account">Account</Link>
        </li>
        {/* <li className="nav-item">
              <Link to="/">Logout</Link>
            </li> */}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/register">Register</Link>
        </li>
      </React.Fragment>
    );
  }
};

const Header = () => (
  //   <header className={`App-header${this.state.scrollY ? " shadow" : ""}`}>
  <header className="App-header">
    <div className="mow">
      <div className="App-logoy center">
        <Link id="logo" to="/">
          AAJPG
        </Link>
      </div>
      <nav>
        <ul className="row nav-items">
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <LoggedInOrOutView currentUser={false} />
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
