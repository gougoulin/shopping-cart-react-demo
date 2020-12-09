import React from "react";
import PropTypes from "prop-types";

const Filter = (props) => {
  return (
    <>
      <aside class="homepage__aside">
        <div class="aside__sticky">
          <h2>50 products</h2>
          <div class="filterlist">
            <div class="filterlist__item">
              <h3 class="filterlist__item__title">Sort</h3>
              <a href="#" class="filterlist__link">
                lowest price
              </a>
              <a href="#" class="filterlist__link">
                highest price
              </a>
              <a href="#" class="filterlist__link">
                lowest rating
              </a>
              <a href="#" class="filterlist__link">
                highest rating
              </a>
              <a href="#" class="filterlist__link">
                lowest reviews
              </a>
              <a href="#" class="filterlist__link">
                highest reviews
              </a>
            </div>
            <div class="filterlist__item">
              <h3 class="filterlist__item__title">Price</h3>
              <input class="min__price" type="text" /> to
              <input class="max__price" type="text" />
              <button class="btn">go</button>
            </div>
            <div class="filterlist__item">
              <h3 class="filterlist__item__title">Brand</h3>
              <div>
                <input type="checkbox" name="" id="" />
                apple
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                dyson
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                samsung
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

Filter.propTypes = {};

export default Filter;
