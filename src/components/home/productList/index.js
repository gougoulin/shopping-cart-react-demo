import React from "react";
import ProductListItem from "./productListItem";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { products, loading, err } = useSelector((state) => state.productList);
  const { display } = useSelector((state) => state.filter);
  const loadingElement = <div>Products loading</div>;
  const errElement = <div>Error found! {err} </div>;
  /**
   * no errors, products is not undefined
   * if error messages exist, print it out
   */
  let loaded = display || products;

  const loadedProducts = loaded ? (
    loaded.map((item) => {
      return (
        <ProductListItem
          url={item.url}
          price={item.price}
          rating={item.rating}
          title={item.title}
          numReviews={item.numReviews}
          key={item.id}
          id={item.id.toString()}
          isLike={item.isLike}
        />
      );
    })
  ) : err ? (
    errElement
  ) : (
    <div>Unknown error found</div>
  );
  const productElements = loading ? loadingElement : loadedProducts;

  return <>{productElements}</>;
};

export default ProductList;
