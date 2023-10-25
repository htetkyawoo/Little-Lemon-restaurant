import React from "react";
import heroSection from "../asset/heroSection.jpg";
const CallToAction = () => {
  return (
    <section id="hero">
      <div id="heroText" className="container">
        <h1 style={{fontSize: '4rem', fontWeight: 'normal', marginBlock : '1rem'}}>Little Lemon</h1>
        <h3 style={{fontSize: '2.5rem', fontWeight: 'normal', marginBlock : '1rem'}}>Chicago</h3>
        <p style={{fontSize: '1.5rem', marginBlock : '1rem'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ratione
          quis officia nesciunt optio voluptates sunt, hic dolore sint quos!
          Nesciunt expedita a fugiat. Molestiae blanditiis eveniet laborum
          aperiam inventore.
        </p>
        <button>Reserve a Table</button>
        <img
          className="img"
          id="heroImg"
          src={heroSection}
          alt="heroSection"
          width={200}
          height={280}
        />
      </div>
    </section>
  );
};

export default CallToAction;
