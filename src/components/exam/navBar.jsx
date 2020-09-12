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
            <div className="anchor">
              <b style={{ fontSize: 25, userSelect: "none" }}>
                Engineers Day 2020
              </b>
            </div>
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
          <div>
            <b style={{ fontSize: "1.2rem" }}>{this.props.id}</b>
          </div>
        </div>
      </>
    );
  }
}
