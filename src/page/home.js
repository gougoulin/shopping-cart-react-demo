import React, { useState } from "react";
import testImg from "../asset/img/earphone.jpg";
import CardProduct from "../component/cardproduct";
import { useSelector } from "react-redux";
import Modal from "../component/modal";

function Home() {
  const { products } = useSelector((state) => state.products);
  const [modal, setModal] = useState(null);
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

  const productList = products.map((elem) => {
    return (
      <CardProduct
        key={elem.id}
        data={{
          id: elem.id,
          price: elem.price,
          rpp: elem.rpp,
          title: elem.title,
          buttonLeft: "Add to card",
          buttonRight: "Buy Now",
          imgURI: elem.uri,
          imgAlt: "product",
          isLike: elem.isLike,
        }}
      />
    );
  });
  return (
    <div id="home">
      <div className="container__cards">
        {productList}
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
      <Modal>modal</Modal>
    </div>
  );
}

export default Home;
