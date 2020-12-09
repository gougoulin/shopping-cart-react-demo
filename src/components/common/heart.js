import React from "react";
import HeartReg from "../../asset/svg/heart-regular.svg";
import HeartSolid from "../../asset/svg/heart-solid.svg";

const Heart = ({ isLike }) => {
  return (
    <>
      {!isLike ? (
        <img className="iconHeart" src={HeartReg} alt="empty heart" />
      ) : (
        <img className="iconHeart" src={HeartSolid} alt="solid heart" />
      )}
    </>
  );
};

export default Heart;
