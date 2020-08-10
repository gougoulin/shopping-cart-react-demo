import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

function Filter() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  const isMenuClicked = useSelector((state) => state.products.isMenuClicked);

  // console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div className={isMenuClicked ? "mask in" : "mask"}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <section className="filter__section">
          <legend className="filter__section__title">Category</legend>
          <div className="form__group">
            <input
              type="radio"
              name="categrory_phone"
              id="categrory_phone"
              ref={register}
            />
            <label htmlFor="category">phone</label>
            <input
              type="radio"
              name="categrory_cake"
              id="categrory_cake"
              ref={register}
            />
            <label htmlFor="category">cake</label>
          </div>
        </section>
        <section className="filter__section">
          <legend className="filter__section__title">gender</legend>
          <div className="form__group">
            <input
              value="test"
              type="radio"
              name="filter__gender__male"
              id="filter__gender__male"
              ref={register}
            />
            <label htmlFor="filter__gender__male">male</label>
          </div>
          <div className="form__group">
            <input
              value="test"
              type="radio"
              name="filter__gender__female"
              id="filter__gender__female"
              ref={register}
            />
            <label htmlFor="filter__gender__female">female</label>
          </div>
          <div className="form__group">
            <input
              value="test"
              type="radio"
              name="filter__gender__children"
              id="filter__gender__children"
              ref={register}
            />
            <label htmlFor="filter__gender__children">kid</label>
          </div>
        </section>
        <section className="filter__section">
          <legend className="filter__section__title">price</legend>
          <div className="form__group">
            <input
              type="range"
              name="filter__price__min"
              id="filter__price__min"
              ref={register}
            />
            <label htmlFor="filter__price__min">min</label>
          </div>
          <div className="form__group">
            <input
              type="range"
              name="filter__price__max"
              id="filter__price__max"
              ref={register}
            />
            <label htmlFor="filter__price__max">max</label>
          </div>
        </section>
        <button>Update</button>
      </form>
    </div>
  );
}

export default Filter;
