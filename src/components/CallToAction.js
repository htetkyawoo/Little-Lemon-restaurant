import React from "react";
import heroSection from "../asset/restauranfood.jpg";
const CallToAction = () => {
  return (
    <section id="menu" className="container-fluid bg-primary">
      <div className="container d-flex justify-content-between position-relative p-4">
        <div className="markazi">
          <h1 className="text-warning fs-1">Little Lemon</h1>
          <h2 className="text-white fs-2">Chicago</h2>
          <p className="text-white fs-4 w-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="btn btn-warning">Reserve a Table</button>
        </div>
        <img
          className="rounded-4 position-absolute d-none d-md-inline"
          style={{
            top : '25%',
            left : '70%'
          }}
          id="heroImg"
          src={heroSection}
          alt="heroSection"
          height={300}
          width={300}
        />
      </div>
    </section>
  );
};

export default CallToAction;
