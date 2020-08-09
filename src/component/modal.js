import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../action/productActions";

function Modal({ children }) {
  const { isModalVisible, modalContent, modalTitle } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  const handleCloseClick = () => {
    dispatch(closeModal());
  };
  return (
    <div
      className={
        isModalVisible ? "modal__container modal__in" : "modal__container"
      }
    >
      <div className="modal__header">
        <h3 className="modal__title">{modalTitle || "Modal Section"}</h3>
        <span className="close modal__close" onClick={handleCloseClick}>
          X
        </span>
      </div>
      {modalContent}
    </div>
  );
}

export default Modal;
