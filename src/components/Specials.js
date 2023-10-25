import React from "react";
import special1 from "../asset/special_1.jpg";
import special3 from '../asset/special_3.jpg';
import special4 from '../asset/special_4.jpg';
import bicycle from '../asset/bicycle.jpg';

const Specials = () => {
  return (
    <section id="specials" className="container">
      <div className="d-flex justify-content-between">
        <h2>This week speicals</h2>
        <div>
          <button>Online Menu</button>
        </div>
      </div>
      <div className="cards">
        <div>
          <div className="cardImg">
            <img className="img" src={special1} alt="special1" height={180} />
          </div>
          <div className="card-head">
            <h3 style={{fontSize : '1.25rem', fontWeight : 'bold'}}>Greek Salad</h3>
            <h5>$12.99</h5>
          </div>
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            iure odio omnis eos possimus sed, quas consequatur reiciendis, dicta
            pariatur sint temporibus quam unde quos? Voluptatum earum saepe quos
            illum!
          </p>
          <button className="d-flex">
            <p>Order a delivery</p>
            <img src={bicycle} alt="delivery" width={24} />
          </button>
        </div>
        <div>
          <img className="img" src={special4} alt="special4" height={180} />
          <div className="card-head">
            <h3 style={{fontSize : '1.25rem', fontWeight : 'bold'}}>Greek Salad</h3>
            <h5>$12.99</h5>
          </div>
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            iure odio omnis eos possimus sed, quas consequatur reiciendis, dicta
            pariatur sint temporibus quam unde quos? Voluptatum earum saepe quos
            illum!
          </p>
          <button className="d-flex">
            <p>Order a delivery</p>
            <img src={bicycle} alt="delivery" width={24} />
          </button>
        </div>
        <div>
          <img className="img" src={special3} alt="special3" height={180} />
          <div className="card-head">
            <h3 style={{fontSize : '1.25rem', fontWeight : 'bold'}}>Greek Salad</h3>
            <h5>$12.99</h5>
          </div>
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            iure odio omnis eos possimus sed, quas consequatur reiciendis, dicta
            pariatur sint temporibus quam unde quos? Voluptatum earum saepe quos
            illum!
          </p>
          <button className="d-flex">
            <p>Order a delivery</p>
            <img src={bicycle} alt="delivery" height={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specials;
