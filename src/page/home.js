import React from "react";
import testImg from "../asset/img/earphone.jpg";
import CardProduct from "../component/cardproduct";

function Home() {
  console.log(testImg);
  const data = {
    price: "$130.00",
    rpp: "$199.00",
    title: "Mob Earphone",
    buttonLeft: "add to card",
    buttonRight: "buy now",
    imgURI: testImg,
    imgAlt: "earphone",
  };
  const data1 = {
    price: "$130.00",
    rpp: "$199.00",
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, laudantium.",
    buttonLeft: "add to card",
    buttonRight: "buy now",
    imgURI: testImg,
    imgAlt: "earphone",
  };

  return (
    <div id="home">
      <div className="container__cards">
        <CardProduct data={data} />
        <CardProduct data={data} />
        <CardProduct data={data} />
        <CardProduct data={data} />
        <CardProduct data={data} />
        <CardProduct data={data} />
        <CardProduct data={data} />
        <CardProduct data={data} />
        <CardProduct data={data} />
        <CardProduct data={data} />
        <CardProduct data={data} />
        <CardProduct data={data} />
        <CardProduct data={data} />
        <CardProduct data={data} />
      </div>
      <div className="container__cards__more">
        <button className="button button__round button__textonly">
          view more
        </button>
      </div>
    </div>
  );
}

export default Home;
