import React, { useState, useEffect } from "react";
import acesLogo from "./aces-logo.png";

function Login(props) {
  const [studentId, setStudentId] = useState("T214");
  const [studentPass, setStudentPass] = useState("q234");
  const [fetchingCred, setFetchingCred] = useState(0);
  const [incorrectCred, setIncorrectCred] = useState(0);

  const prepForSubmit = () => {
    setIncorrectCred(0);
    setFetchingCred(1);
  };

  useEffect(() => {
    if (props.fetchError) {
      setIncorrectCred(1);
      setFetchingCred(0);
    }
  }, [props]);

  return (
    <div className="login-outer">
      <div className="login-inner">
        <div className="login-header">
          <img src={acesLogo} style={{ width: "150px" }} alt="logo" />
          <h4 style={{ marginLeft: "5vw" }}>ACES Presents</h4>
        </div>
        <div className="card my-login-card">
          <div className="card-header">
            <b style={{ fontSize: "1.5rem" }}>Login</b>{" "}
          </div>
          <form
            style={{ padding: "30px" }}
            onSubmit={async e => {
              e.preventDefault();
              prepForSubmit();

              props.onSubmit(studentId, studentPass);
            }}>
            {incorrectCred ? (
              <div style={{ color: "red", marginBottom: "10px" }}>
                Incorrect credentials. Please try again
              </div>
            ) : (
              ""
            )}

            <div className="form-group">
              <label>Student ID</label>
              <input
                type="text"
                className="form-control"
                value={studentId}
                id="student_id"
                autoComplete="off"
                onChange={event => setStudentId(event.target.value)}
                placeholder="T214"
              />
              <small className="form-text text-muted">
                Enter the ID given at the time of registration.
              </small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="student_password"
                value={studentPass}
                autoComplete="off"
                onChange={event => setStudentPass(event.target.value)}
                placeholder="q234"
              />
              <small className="form-text text-muted">
                Enter the password given by your invigilator.
              </small>
            </div>
            <button type="submit" className="btn btn-primary">
              {fetchingCred ? (
                <i
                  style={{ marginRight: "5px" }}
                  className="fa fa-circle-o-notch fa-spin"
                />
              ) : (
                ""
              )}
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
