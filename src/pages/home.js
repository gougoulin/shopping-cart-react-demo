import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ProductList from "../components/home/productList";
import ProductFilter from "../components/home/productFilter";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../actions/productListAction";
import { initCart } from "../actions/add2cartAction";

const Home = () => {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.cartList);
  useEffect(() => {
    if (Object.keys(cartList).length === 0) dispatch(initCart());
    dispatch(getProductList());
  }, []);
  return (
    <div className="homepage">
      <Header />
      <div className="homepage__box">
        <aside className="homepage__aside">
          <ProductFilter />
        </aside>
        <main className="homepage__main">
          <div className="homepage__products">
            <ProductList />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
