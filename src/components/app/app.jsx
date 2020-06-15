import React from "react";
import PropTypes from "prop-types";

import Main from "../main/main.jsx";

const App = (props) => {
  const {places, descriptions} = props;

  return (
    <Main
      places = {places}
      descriptions = {descriptions}
    />
  );
};

App.propTypes = {
  places: PropTypes.number.isRequired,
  descriptions: PropTypes.array.isRequired,
};

export default App;
