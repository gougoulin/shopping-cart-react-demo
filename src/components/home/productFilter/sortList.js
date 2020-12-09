import React from "react";
import {
  sortByPrice,
  sortByRating,
  sortByReview,
} from "../../../actions/filterAction";
import SortListItem from "./sortListItem";

const SortList = () => {
  return (
    <>
      <SortListItem action={sortByPrice} isAscend={true} name="lowest price" />
      <SortListItem
        action={sortByPrice}
        isAscend={false}
        name="highest price"
      />
      <SortListItem
        action={sortByRating}
        isAscend={true}
        name="lowest rating"
      />
      <SortListItem
        action={sortByRating}
        isAscend={false}
        name="highest rating"
      />
      <SortListItem
        action={sortByReview}
        isAscend={true}
        name="lowest reviews"
      />
      <SortListItem
        action={sortByReview}
        isAscend={false}
        name="highest reviews"
      />
    </>
  );
};

export default SortList;
