import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const settings = {
  places: 777,
};

ReactDOM.render(
    <App
      places = {settings.places}
    />,
    document.querySelector(`#root`)
);
