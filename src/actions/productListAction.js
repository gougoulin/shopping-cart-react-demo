// import Data from "./data.json"; // abandoned, data is from Contentful API now

import { DATA_RQEUST, DATA_FETCH_SUCCESS, DATA_FETCH_FAIL } from "./constants";
import Client from "../contentful";

const getProductList = () => {
  return async (dispatach) => {
    try {
      dispatach({ type: DATA_RQEUST });
      const res = await Client.getEntries({
        content_type: "products",
        // order: "fields.price",
      });
      const data = res.items;

      const products = data.map((item) => {
        return {
          id: item.sys.id,
          ...item.fields,
          url: item.fields.images[0].fields.file.url,
        };
      });

      dispatach({ type: DATA_FETCH_SUCCESS, payload: products });
    } catch (err) {
      dispatach({ type: DATA_FETCH_FAIL, payload: err.message });
    }
  };
};

export { getProductList };
