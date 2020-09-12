import React, { Component } from "react";
import "../../styles/results.css";
// import MCQ from "./mcq";
import Footer from "./footer";

export default class Result extends Component {
  render() {
    return (
      <div>
        <div
          className="card"
          style={{ width: "50%", marginLeft: "25%", marginTop: "30vh" }}>
          <div className="card-header">Engineers Day 2020</div>
          <div className="card-body">
            <h5 className="card-title">Thank you for participating</h5>
            <p className="card-text">You can close the tab now</p>
          </div>
        </div>
        {/* <div className="marks-outer-div">
          <i>Your Score : </i>
          <div className="marks-inner-div">
            <b>
              {this.props.result} / {this.props.mcqs.length}
            </b>
          </div>
        </div>
        <div className="questions-div">
          {this.props.mcqs.map((val, index) => {
            return <MCQ mcq={val} key={index} id={index} />;
          })}
        </div> */}
        <Footer />
      </div>
    );
  }
}
