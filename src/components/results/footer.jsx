import React from "react";
import "../../styles/results.css";

function Footer(props) {
  return (
    <div className="footer-result">
      <hr />
      <i style={{ marginRight: "5px" }} className="fa fa-code"></i>
      with <i style={{ color: "red" }} className="fa fa-heart"></i> by Shamoil
      Arsiwala
    </div>
  );
}

export default Footer;
