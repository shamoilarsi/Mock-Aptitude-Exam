import React, { Component } from "react";
import NavBar from "./navBar";
import MCQ from "./mcq";
import Footer from "./footer";
import QuestionModal from "./questionsModal";

let myInterval;

class MainEngine extends Component {
  state = {
    index: 0,
    minutes: 20,
    seconds: 0,
    absTime: 0,
    questionsModal: 0,
    mcqs: [
      {
        question:
          "<p>Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?</p>",
        options: ["(1/3)", "(1/8)", "(2/8)", "(1/16)"],
        answer: "B",
        explanation:
          " <p>This is a simple division series; each number is one-half of the previous number.</p>\n<p>In other terms to say, the number is divided by 2 successively to get the next result.</p>\n<p></p><pre>4/2 = 2\n2/2 = 1\n1/2 = 1/2\n(1/2)/2 = 1/4\n(1/4)/2 = 1/8 and so on.</pre>\n<p></p> ",
      },
      {
        question:
          "<p>Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?</p>",
        options: ["7", "10", "12", "13"],
        answer: "B",
        explanation:
          " This is a simple alternating addition and subtraction series. In the first pattern, 3 is added; in the second, 2 is subtracted. ",
      },
      {
        question:
          "<p>Look at this series: 36, 34, 30, 28, 24, ... What number should come next?</p>",
        options: ["20", "22", "23", "26"],
        answer: "B",
        explanation:
          " This is an alternating number subtraction series. First, 2 is subtracted, then 4, then 2, and so on. ",
      },
      {
        question:
          "<p>Look at this series: 22, 21, 23, 22, 24, 23, ... What number should come next?</p>",
        options: ["22", "24", "25", "26"],
        answer: "C",
        explanation:
          " In this simple alternating subtraction and addition series; 1 is subtracted, then 2 is added, and so on. ",
      },
      {
        question:
          "<p>Look at this series: 53, 53, 40, 40, 27, 27, ... What number should come next?</p>",
        options: ["12", "14", "27", "53"],
        answer: "B",
        explanation:
          " In this series, each number is repeated, then 13 is subtracted to arrive at the next number. ",
      },
      {
        question:
          "<p>Look at this series: 21, 9, 21, 11, 21, 13, 21, ... What number should come next?</p>",
        options: ["14", "15", "21", "23"],
        answer: "B",
        explanation:
          " In this alternating repetition series, the random number 21 is interpolated every other number into an otherwise simple addition series that increases by 2, beginning with the number 9. ",
      },
      {
        question:
          "<p>Look at this series: 58, 52, 46, 40, 34, ... What number should come next?</p>",
        options: ["26", "28", "30", "32"],
        answer: "B",
        explanation:
          " This is a simple subtraction series. Each number is 6 less than the previous number. ",
      },
      {
        question:
          "<p>Look at this series: 3, 4, 7, 8, 11, 12, ... What number should come next?</p>",
        options: ["7", "10", "14", "15"],
        answer: "D",
        explanation:
          " This alternating addition series begins with 3; then 1 is added to give 4; then 3 is added to give 7; then 1 is added, and so on. ",
      },
      {
        question:
          "<p>Look at this series: 8, 22, 8, 28, 8, ... What number should come next?</p>",
        options: ["9", "29", "32", "34"],
        answer: "D",
        explanation:
          " This is a simple addition series with a random number, 8, interpolated as every other number. In the series, 6 is added to each number except 8, to arrive at the next number. ",
      },
      {
        question:
          "<p>Look at this series: 31, 29, 24, 22, 17, ... What number should come next?</p>",
        options: ["15", "14", "13", "12"],
        answer: "A",
        explanation:
          " This is a simple alternating subtraction series, which subtracts 2, then 5. ",
      },
      {
        question:
          "<p>Look at this series: 1.5, 2.3, 3.1, 3.9, ... What number should come next?</p>",
        options: ["4.2", "4.4", "4.7", "5.1"],
        answer: "C",
        explanation:
          " In this simple addition series, each number increases by 0.8. ",
      },
      {
        question:
          "<p>Look at this series: 14, 28, 20, 40, 32, 64, ... What number should come next?</p>",
        options: ["52", "56", "96", "128"],
        answer: "B",
        explanation:
          " This is an alternating multiplication and subtracting  series: First, multiply by 2 and then subtract 8. ",
      },
      {
        question:
          "<p>Look at this series: 2, 4, 6, 8, 10, ... What number should come next?</p>",
        options: ["11", "12", "13", "14"],
        answer: "B",
        explanation:
          " This is a simple addition series. Each number increases by 2. ",
      },
    ],
  };

  componentWillUnmount() {
    clearInterval(myInterval);
  }

  componentDidMount() {
    myInterval = setInterval(() => {
      if (this.state.seconds === 0) {
        if (this.state.minutes === 0) {
          clearInterval(myInterval);
          this.onSubmit();
        } else {
          this.setState({ seconds: 59, minutes: this.state.minutes - 1 });
        }
      } else if (this.state.seconds > 0) {
        this.setState({ seconds: this.state.seconds - 1 });
      }

      this.setState({ absTime: this.state.absTime + 1 });
    }, 1000);

    this.setState({ mcqs: this.props.mcqs });

    // const found = localStorage.getItem("exam-state");
    // if (!found) {
    //   // console.log("fetched waale use kiye");
    // } else {
    //   this.setState(JSON.parse(found));
    //   // console.log("local waale use kiye");
    // }
  }

  // componentDidUpdate() {
  //   localStorage.setItem(
  //     "exam-state",
  //     JSON.stringify({ ...this.state, mcqs: [] }),
  //   );
  // }

  nextClicked = () => {
    if (this.state.index < this.state.mcqs.length - 1)
      this.setState({ index: this.state.index + 1 });
  };

  prevClicked = () => {
    if (this.state.index !== 0) this.setState({ index: this.state.index - 1 });
  };

  setAnswer = id => {
    let copy = this.state.mcqs;
    copy[this.state.index]["selected_index"] = String.fromCharCode(
      parseInt(id) + 65,
    );
    this.setState({ mcqs: copy });
  };

  onSubmit = () => {
    this.props.setState({
      mcqs: this.state.mcqs,
      inExam: 0,
      inResult: 1,
      absTime: this.state.absTime,
    });
  };

  onReport = reported => {
    let copy = this.state.mcqs;
    copy[this.state.index]["reported"] = reported;
    this.setState({ mcqs: copy });
  };

  onClickQuestionsModal = () => {
    this.setState({ questionsModal: !this.state.questionsModal });
  };

  goToQuestion = index => {
    this.setState({ index, questionsModal: 0 });
  };

  setIsMarked = () => {
    let copy = this.state.mcqs;
    copy[this.state.index]["isMarked"] = !copy[this.state.index]["isMarked"];
    this.setState({ mcqs: copy });
  };

  render() {
    return (
      <div style={{ height: "100vh" }}>
        {!this.state.submit && (
          <>
            <NavBar
              minutes={this.state.minutes}
              seconds={this.state.seconds}
              id={this.props.id}
            />

            {this.state.questionsModal ? (
              <QuestionModal
                mcqs={this.state.mcqs}
                onClickQuestionsModal={this.onClickQuestionsModal}
                goToQuestion={this.goToQuestion}
              />
            ) : (
              ""
            )}

            <MCQ
              mcq={this.state.mcqs[this.state.index]}
              number={this.state.index + 1}
              nextClicked={this.nextClicked}
              prevClicked={this.prevClicked}
              setIsMarked={this.setIsMarked}
              setAnswer={this.setAnswer}
            />
            <Footer
              onSubmit={this.onSubmit}
              onReport={this.onReport}
              mcq={this.state.mcqs[this.state.index]}
              onClickQuestionsModal={this.onClickQuestionsModal}
            />
          </>
        )}
      </div>
    );
  }
}

export default MainEngine;
