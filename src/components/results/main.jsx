import React, { Component } from "react";
import "../../styles/results.css";
import NavBar from "./navBar";
import MCQ from "./mcq";
import Footer from "./footer";

export default class Result extends Component {
  constructor(props) {
    super(props);
    this.calcResult();
  }

  calcResult = () => {
    let res = 0;

    this.props.mcqs.forEach((val, index) => {
      if (
        this.props.mcqs[index]["answer"].charCodeAt(0).toString() - 65 ===
        this.props.mcqs[index]["selected_index"]
      ) {
        res++;
      }
    });

    return res;
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="marks-outer-div">
          <i>Your Score : </i>
          <div className="marks-inner-div">
            <b>
              {this.calcResult()} / {this.props.mcqs.length}
            </b>
          </div>
        </div>
        <div className="questions-div">
          {this.props.mcqs.map((val, index) => {
            return <MCQ mcq={this.props.mcqs[index]} key={index} id={index} />;
          })}
        </div>
        <Footer />
      </div>
    );
  }
}
