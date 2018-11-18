import React, { Component } from 'react';
import "./navbar.css";

class Nav extends Component {
    render() {
      return (
        <div className="App">
        <h1 className="navBar">
          <div className="layer">Movie<img width="50" src="mandrill-shield.svg"/>Finder<hr />
          </div>
          </h1>
        </div>
      );
    }
  }

  export default Nav;