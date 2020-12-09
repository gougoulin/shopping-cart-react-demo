import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "../components/common/breadcrumb";
import BackArrowUrl from "../asset/svg/chevron-left-solid.svg";
import { useDispatch, useSelector } from "react-redux";
import { getProductByID } from "../actions/productDetailAction";
import ProductDetail from "../components/product/productDetail";
import Loading from "../components/common/loading";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductByID(id));
    return () => {
      // cleanup;
    };
  }, []);

  const { detail, loading, errLoad } = useSelector(
    (state) => state.currentProduct
  );

  return loading ? (
    <Loading />
  ) : errLoad !== undefined ? (
    <div>Error: {errLoad}</div>
  ) : detail != null ? (
    <div className="productpage">
      <Header />
      <div className="productpage__box">
        <Breadcrumb>
          <Link to="/">
            <img src={BackArrowUrl} alt="" />
            Back to homepage
          </Link>
        </Breadcrumb>
        <main className="productpage__main">
          <ProductDetail detail={detail} />
        </main>
      </div>
      <Footer />
    </div>
  ) : (
    <div>Product not found</div>
  );
};

export default Product;
