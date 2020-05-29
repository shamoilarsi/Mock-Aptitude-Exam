/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div style={{ fontSize: 25 }}>
          <b> Exam </b>
        </div>
        <div className="nav-links-div">
          <a className="nav-link" href="#">
            Logout
          </a>
          <a className="nav-link" href="#">
            About
          </a>
        </div>
      </div>
    );
  }
}
