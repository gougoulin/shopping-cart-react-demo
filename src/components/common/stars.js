import React from "react";
import PropTypes from "prop-types";
import StarSolid from "../../asset/svg/star-solid.svg";
import StarReg from "../../asset/svg/star-regular.svg";
import StarHalf from "../../asset/svg/star-half-alt-solid.svg";

const Stars = ({ rating }) => {
  if (rating < 0 && rating > 5) {
    throw Error(
      "incorrect data, rating must be larger than 0 and no more than 5"
    );
  }
  const solids = Math.floor(rating);
  const halfs = Math.ceil(rating - solids);
  const elemStarts = Array(5)
    .fill(0)
    .map((item, idx) => {
      /**
       * generating the 5 stars rating image
       */
      if (idx + 1 <= solids) {
        return (
          <img key={idx} className="ratingstar" alt="star" src={StarSolid} />
        );
      } else if (idx === solids && halfs === 1) {
        return (
          <img key={idx} className="ratingstar" alt="star" src={StarHalf} />
        );
      } else
        return (
          <img key={idx} className="ratingstar" alt="star" src={StarReg} />
        );
    });

  return (
    <>
      <span className="stars">{elemStarts}</span>
    </>
  );
};

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Stars;
