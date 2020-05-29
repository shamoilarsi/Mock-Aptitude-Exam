import React, { Component } from "react";

export default class Iterator extends Component {
  render() {
    return (
      <div className="iterator">
        <button
          style={{
            backgroundColor: "#2196F3",
            border: "2px solid #2196F3",
            color: "white",
          }}
          onClick={() => this.props.setIsMarked()}
          className="iterator-button">
          <i
            style={{ marginRight: "0px" }}
            className={
              "fa fa-bookmark" + (this.props.isMarked ? "" : "-o")
            }></i>
        </button>
        <button
          className="iterator-button"
          onClick={() => this.props.prevClicked()}>
          <i style={{ marginRight: "5px" }} className="fa fa-angle-left"></i>{" "}
          Previous
        </button>
        <button
          className="iterator-button"
          onClick={() => this.props.nextClicked()}>
          Next{" "}
          <i style={{ marginLeft: "5px" }} className="fa fa-angle-right"></i>
        </button>
      </div>
    );
  }
}
