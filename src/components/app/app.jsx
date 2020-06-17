import React from "react";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";

const onHeaderClick = () => {};

const App = (props) => {
  const {places, descriptions} = props;

  return (
    <Main
      places = {places}
      descriptions = {descriptions}
      onHeaderClick = {onHeaderClick}
    />
  );
};

App.propTypes = {
  places: PropTypes.number.isRequired,
  descriptions: PropTypes.array.isRequired,
};

export default App;
