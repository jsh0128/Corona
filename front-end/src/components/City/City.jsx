import React from "react";
import PropTypes from "prop-types";
import "./City.scss";

const City = ({ getApi }) => {
  return (
    <>
      <div>
        <button
          onClick={() => {
            getApi();
          }}
        >
          asdfaf
        </button>
        <span>adfadf</span>
      </div>
    </>
  );
};

City.propTypes = {};

export default City;
