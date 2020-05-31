import React, { Component } from "react";

export default class Footer extends Component {
  onReport = () => {
    this.props.onReport(!this.props.mcq["reported"]);
  };

  render() {
    return (
      <div className="footer">
        <div className="submit-div">
          {/* <button className="report-button" onClick={this.onReport}>
            <i className="fa fa-exclamation-triangle"></i>
          </button> */}
          <button className="submit-button" onClick={this.props.onSubmit}>
            SUBMIT <i className="fa fa-check"></i>
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
    );
  }
}
