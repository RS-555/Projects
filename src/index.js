import React from "react";
import "./style.css";
import ReactDOM from "react-dom";

function Lang(Props) {
  return (
    <div className="lang">
      <h1>{Props.head}</h1>
      <ul>
        <li>{Props.one}</li>
        <li>{Props.two}</li>
      </ul>
    </div>
  );
}

var app = (
  <div>
    <Lang head="Languages" one="React Native" two="React JS" />
    <Lang head="BackEnd Languages" one="Node" two="Express" />
  </div>
);

ReactDOM.render(app, document.querySelector("#app"));
