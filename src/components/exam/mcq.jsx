import React, { Component } from "react";
import Iterator from "./iterator";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/mainEngine.css";

export default class MCQ extends Component {
  loadOptions = () => {
    let op = [];
    for (let i = 0; i < 4; i++)
      op.push(
        <div
          onClick={() => this.props.setAnswer(i)}
          className={
            "col col-4 option " +
            (i === this.props.mcq["selected_index"] ? "option-disabled" : "")
          }
          key={i}
          id={"option-" + i}
          dangerouslySetInnerHTML={{
            __html:
              String.fromCharCode(i + 65) + ". " + this.props.mcq.options[i],
          }}
        />,
      );
    return op;
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="mcq">
          <p style={{ marginLeft: 20 }}>
            {" "}
            {this.props.mcq["reported"] ? (
              <i
                style={{ color: "red" }}
                className="fa fa-exclamation-triangle"></i>
            ) : (
              ""
            )}{" "}
            {this.props.mcq["isMarked"] ? (
              <i style={{ color: "#2196F3" }} className="fa fa-bookmark"></i>
            ) : (
              ""
            )}{" "}
            Question No. {this.props.number}
          </p>
          <div className="questionDiv">
            <div
              className="question"
              dangerouslySetInnerHTML={{ __html: this.props.mcq.question }}
            />
          </div>
          <div className="optionsDiv">
            <div className="container my-container">
              <div className="row my-row">{this.loadOptions()}</div>
            </div>
          </div>
          <Iterator
            isMarked={this.props.mcq["isMarked"]}
            nextClicked={() => this.props.nextClicked()}
            prevClicked={() => this.props.prevClicked()}
            setIsMarked={() => this.props.setIsMarked()}
          />
        </div>
      </div>
    );
  }
}
