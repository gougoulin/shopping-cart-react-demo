import React, { useState } from "react";
import testImg from "../asset/img/earphone.jpg";
import CardProduct from "../component/cardproduct";
import { useSelector } from "react-redux";
import Modal from "../component/modal";
import Header from "../page/header";
import Footer from "../component/footer";

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
    <>
      <div id="home">
        {/* <Header /> */}
        <div className="home__inner">
          <div className="container__filter">
            <div className="container__sticky">
              <h2 className="title__cards">50 Products</h2>
              <nav>
                <li>
                  <span type="button" className="btn__filter">
                    Sort
                  </span>
                </li>
                <li>
                  <span type="button" className="btn__filter">
                    Price range
                  </span>
                </li>
                <li>
                  <span type="button" className="btn__filter">
                    max deliver fee
                  </span>
                </li>
                <li>
                  <span type="button" className="btn__filter">
                    category
                  </span>
                </li>
                <li>
                  <span type="button" className="btn__filter">
                    clear all
                  </span>
                </li>
              </nav>
            </div>
          </div>
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
          {/* <div className="container__cards__more">
            <button className="button button__round button__textonly">
              view more
            </button>
          </div> */}
          {/* <Modal>modal</Modal> */}
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Home;
