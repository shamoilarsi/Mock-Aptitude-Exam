import React, { Component } from "react";
import NavBar from "./navBar";
import Login from "./login";
import SelectTopic from "./select_topic";
import MCQEngine from "../exam/main";
import Result from "../results/main";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/index.css";

export default class Main extends Component {
  state = {
    inExam: 0,
    inResult: 0,
    loggedIn: 0,
    fetchError: 0,
    id: 0,
    mcqs: [],
  };

  componentDidMount() {
    const storage = localStorage.getItem("main-state");
    storage && this.setState(JSON.parse(storage));
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("main-state", JSON.stringify(this.state));
  }

  calcResult = mcqs => {
    let res = 0;

    mcqs.forEach(val => {
      if (val["answer"] === val["selected_index"]) {
        res++;
      }
    });

    return res;
  };

  onSubmit = async (id, pass) => {
    await fetch(
      `https://apti-exam-backend.herokuapp.com/api/credentials?id=${id}&pass=${pass}`,
      {
        method: "POST",
        headers: {
          accepts: "application/json",
        },
      },
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        if (json.status === "success") {
          this.setState({ loggedIn: 1, id });
        } else {
          this.setState({ fetchError: 1 });
        }
      });
  };

  selectedTopic = (id, limit) => {
    fetch(
      `https://apti-exam-backend.herokuapp.com/api/apti?topic=${id}&limit=${limit}`,
      {
        method: "POST",
        headers: {
          accepts: "application/json",
        },
      },
    )
      .then(res => res.json())
      .then(json => {
        this.setState({ mcqs: json.mcq, inExam: 1 });
      });
  };

  handleSetState = data => {
    fetch(
      `https://apti-exam-backend.herokuapp.com/api/saveResult?id=${
        this.state.id
      }&result=${this.calcResult(data.mcqs)}`,
      {
        method: "POST",
        headers: {
          accepts: "application/json",
        },
      },
    )
      .then(res => res.json())
      .then(json => {
        if (json.msg === "success") this.setState(data);
        else {
          console.log("error while saving result");
        }
      });
  };

  logout = () => {
    localStorage.clear();
    this.setState({
      loggedIn: 0,
      inExam: 0,
      inResult: 0,
      id: 0,
      fetchError: 0,
    });
  };

  render() {
    let navOptions = [];

    if (this.state.loggedIn) {
      navOptions = [
        { id: this.state.id },
        { title: "Logout", func: this.logout },
      ];
    }

    return (
      <div>
        {this.state.inExam ? (
          <MCQEngine
            mcqs={this.state.mcqs}
            id={this.state.id}
            state={this.state}
            setState={this.handleSetState}
          />
        ) : (
          <>
            <NavBar options={navOptions} />
            {this.state.inResult ? (
              <Result
                mcqs={this.state.mcqs}
                result={this.calcResult(this.state.mcqs)}
              />
            ) : (
              <>
                {this.state.loggedIn ? (
                  <SelectTopic selectedTopic={this.selectedTopic} />
                ) : (
                  <Login
                    onSubmit={this.onSubmit}
                    fetchError={this.state.fetchError}
                  />
                )}
              </>
            )}
          </>
        )}
      </div>
    );
  }
}
