import React, { Component } from "react";

export default class Iterator extends Component {
  state = { submitting: false };
  render() {
    return (
      <div
        style={{
          marginTop: "20px",
        }}>
        <div className="iterator">
          <div>
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
              <i
                style={{ marginRight: "5px" }}
                className="fa fa-angle-left"></i>{" "}
              Previous
            </button>
            <button
              className="iterator-button"
              onClick={() => this.props.nextClicked()}>
              Next{" "}
              <i
                style={{ marginLeft: "5px" }}
                className="fa fa-angle-right"></i>
            </button>
          </div>

          <div className="submit-div">
            {/* <button className="report-button" onClick={this.onReport}>
            <i className="fa fa-exclamation-triangle"></i>
          </button> */}
            <button
              className="submit-button"
              disabled={this.state.submitting}
              onClick={() => {
                this.setState({ submitting: true });
                this.props.onSubmit();
              }}>
              SUBMIT EXAM{" "}
              {this.state.submitting ? (
                <i
                  style={{ marginRight: "5px" }}
                  className="fa fa-circle-o-notch fa-spin"
                />
              ) : (
                <i className="fa fa-check"></i>
              )}
            </button>
            <button
              className="view-all-button"
              onClick={() => this.props.onClickQuestionsModal()}>
              <i
                style={{ userSelect: "none", cursor: "pointer" }}
                className="fa fa-th fa-lg"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
