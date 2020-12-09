import React from "react";
import QA from "../component/qa";
import "../css/style.scss";

function Help() {
  return (
    <>
      <div className="help__container">
        <h1>Find your answers here</h1>
        <QA />
        <QA />
        <QA />
        <QA />
        <QA />
        <div>
          <p style={{ marginTop: "20px" }}>
            Feel free to contact us at <a href="">info@aotao.com</a>, if you
            cannot find the answers of your questions.
          </p>
        </div>
      </div>
    </>
  );
}

export default Help;
