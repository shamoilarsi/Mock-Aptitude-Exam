import React, { Component } from "react";
import "../../styles/App.css";

export default class NavBar extends Component {
  render() {
    return (
      <>
        <div className="navBar">
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}>
            <a href="https://github.com" className="anchor">
              <b style={{ fontSize: 25 }}>Exam</b>
            </a>
          </div>
          <div style={{ fontSize: "20px" }}>
            <b style={{ userSelect: "none" }}>
              {this.props.minutes < 10
                ? `0${this.props.minutes}`
                : this.props.minutes}{" "}
              :{" "}
              {this.props.seconds < 10
                ? `0${this.props.seconds}`
                : this.props.seconds}
            </b>
          </div>
        </div>
      </>
    );
  }
}
