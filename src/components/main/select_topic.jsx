import React, { useState } from "react";
import "../../styles/select_topic.css";

function Main(props) {
  const topicList = [
    { id: "number-series", title: "Number Series" },
    { id: "logical-problems", title: "Logical Problems" },
    { id: "odd-man-out-and-series", title: "Odd Man Out" },
    { id: "series-completion", title: "Series Completion" },
  ];

  let [selectedTopic, setSelectedTopic] = useState(0);
  let [limit, setLimit] = useState(10);
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
