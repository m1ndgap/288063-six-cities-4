import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const settings = {
  places: 777,
  descriptions: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `This place is amazing`, `Terrible locations`, `Landlord is a douche`],
};

ReactDOM.render(
    <App
      places = {settings.places}
      descriptions = {settings.descriptions}
    />,
    document.querySelector(`#root`)
);
