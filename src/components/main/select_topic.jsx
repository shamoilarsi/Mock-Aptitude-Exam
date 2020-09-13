import React, { useState } from "react";
import "../../styles/select_topic.css";

function Main(props) {
  const topicList = [
    { id: "round1-se", title: "Round 1 - SE" },
    { id: "round1-te", title: "Round 1 - TE" },
    { id: "round1-be", title: "Round 1 - BE" },

    { id: "round2-se", title: "Round 2 - SE" },
    { id: "round2-te", title: "Round 2 - TE" },
    { id: "round2-be", title: "Round 2 - BE" },
  ];

  let [selectedTopic, setSelectedTopic] = useState(0);
  let [limit, setLimit] = useState(25);
  let [showLoader, setShoWLoader] = useState(0);

  return (
    <div className="fetch-question-outer">
      <div className="fetch-question-inner">
        <div className="card">
          <div className="card-body">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default">
                  Number of Questions
                </span>
              </div>
              <input
                type="number"
                className="form-control"
                value={limit}
                onChange={e => setLimit(e.target.value)}
                disabled={true}
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>

            {topicList.map((val, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedTopic(index);
                }}
                className={`topic-item topic-item-${
                  selectedTopic === index ? "selected" : ""
                }`}>
                {val.title}
              </div>
            ))}

            <button
              style={{ float: "right", marginTop: "40px" }}
              className="btn btn-primary"
              disabled={showLoader}
              onClick={() => {
                setShoWLoader(1);
                props.selectedTopic(topicList[selectedTopic].id, limit);
              }}>
              {showLoader ? (
                <i
                  style={{ marginRight: "5px" }}
                  className="fa fa-circle-o-notch fa-spin"
                />
              ) : (
                ""
              )}
              Start Exam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
