import React from "react";
import PropTypes from "prop-types";

const Execute = ( { onClick }) =>
  <div class="card p-5">
      <button class="btn btn-primary" onClick={onClick}> Execute </button>
  </div>;

Execute.propTypes = {
  onClick: PropTypes.func
};

export default Execute;