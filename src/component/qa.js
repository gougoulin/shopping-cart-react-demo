import React from "react";
import "../css/style.scss";
import { useState } from "react";

function QA() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="container__qa">
      <h3
        className="question"
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        <span>lorem lorem lorem lorem </span>
        <span>+</span>
      </h3>
      <p className={isShow ? "answer" : "answer hidden"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        doloremque impedit quis eum. Quisquam nobis perferendis culpa recusandae
        magni numquam itaque cumque hic nulla vero dolores molestiae voluptas
        labore aliquam, ipsum odit aperiam pariatur enim dolor! Facere sequi
        labore excepturi inventore fuga corporis, dolor voluptatem totam dicta
        aperiam, consectetur ipsam?
      </p>
    </div>
  );
}

export default QA;
