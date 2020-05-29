import React from "react";

const questionList = props => {
  let ques = [];
  props.mcqs.forEach((val, index) => {
    let cond = val["selected_index"] === undefined;
    ques.push(
      <div key={index} className="col col-3 question-modal-item-outer">
        <div
          onClick={() => {
            props.goToQuestion(index);
          }}
          style={{
            backgroundColor: cond ? "gray" : "lightgreen",
            color: cond ? "white" : "black",
          }}
          className="question-modal-item">
          {index + 1}
          {val["isMarked"] ? (
            <i
              style={{ color: "#2196F3" }}
              className="fa fa-bookmark question-modal-bookmark"></i>
          ) : (
            ""
          )}
        </div>
      </div>,
    );
  });
  return ques;
};

function QuestionsModal(props) {
  return (
    <div className="question-modal-bg">
      <div className="question-modal-inner">
        <i
          onClick={() => props.onClickQuestionsModal()}
          className=" cross-icon fa fa-times fa-lg"></i>
        <div className="container">
          <div className="row">{questionList(props)}</div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsModal;
