/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div style={{ fontSize: "1.8rem", userSelect: "none" }}>
          <b> Apti Exam </b>
        </div>
        <div className="nav-links-div">
          {this.props.options.map((val, index) =>
            val.id === undefined ? (
              <a key={index} className="nav-link" onClick={val.func}>
                {val.title}
              </a>
            ) : (
              <a style={{ cursor: "default" }} key={index} className="nav-link">
                {val.id}
              </a>
            ),
          )}
        </div>
      </div>
    );
  }
}
