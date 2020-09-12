import React, { Component } from "react";
import "../../styles/results.css";
import MCQ from "./mcq";
import Footer from "./footer";
import firebase from "../../firebase";

export default class Result extends Component {
  render() {
    const db = firebase.firestore();
    db.collection("EnggDay2020")
      .doc("Round1-SE")
      .set({ email: { score: 10 } });

    return (
      <div>
        <div className="marks-outer-div">
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
        </div>
        <Footer />
      </div>
    );
  }
}
