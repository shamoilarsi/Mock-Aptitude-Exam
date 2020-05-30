import React, { Component } from "react";
import "../../styles/results.css";

export default class MCQ extends Component {
  loadOptions = () => {
    let res = [];
    for (let i = 0; i < 4; i++) {
      let classes = "col col-4 option-result ";

      if (this.props.mcq["answer"] === String.fromCharCode(i + 65)) {
        classes += "option-result-right";
      } else if (
        this.props.mcq["selected_index"] === String.fromCharCode(i + 65)
      ) {
        classes += "option-result-wrong";
      }

      res.push(
        <div
          key={i}
          className={classes}
          dangerouslySetInnerHTML={{
            __html:
              String.fromCharCode(i + 65) + ". " + this.props.mcq["options"][i],
          }}
        />,
      );
    }
    return res;
  };
  render() {
    return (
      <div className="each-question-div">
        {this.props.mcq["reported"] ? (
          <>
            <i
              style={{ color: "red", marginRight: "5px" }}
              className="fa fa-exclamation-triangle"></i>
            <span style={{ color: "red" }}>
              You marked this as an incorrect question
            </span>
            <br />
          </>
        ) : (
          ""
        )}
        <b>Question {this.props.id + 1} : </b>
        <div
          style={{ marginLeft: "20px", marginTop: "5px" }}
          dangerouslySetInnerHTML={{ __html: this.props.mcq["question"] }}
        />
        <b>Answer : </b>
        <div className="options-div">
          <div className="container">
            <div className="row">{this.loadOptions()}</div>
          </div>
        </div>
        <b style={{ marginTop: "10px" }}>Explanation : </b>
        <div
          style={{ marginLeft: "20px", marginTop: "5px" }}
          dangerouslySetInnerHTML={{ __html: this.props.mcq["explanation"] }}
        />
      </div>
    );
  }
}
