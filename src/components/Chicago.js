import React from "react";
import restauranFood from "../asset/Mario and Adrian A.jpg";
import restaurant_chef from "../asset/restaurant chef B.jpg";

const Chicago = () => {
  return (
    <div id="about" className="container d-flex">
      <div className="markazi w-50">
        <h1 className="text-warning fs-1">Little Lemon</h1>
        <h2 className="fs-2">Chicago</h2>
        <p className="fs-4">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>
      <div className="position-relative w-50 d-none d-md-inline">
        <img
          className="position-absolute"
          width={400}
          alt="chef"
          src={restaurant_chef}
          style={{ top: "20%" }}
        />
        <img
          className="position-absolute"
          width={400}
          alt="food"
          src={restauranFood}
          style={{ left: "20%" }}
        />
      </div>
    </div>
  );
};

export default Chicago;
