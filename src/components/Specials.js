import React from "react";
import greek_salad from "../asset/greek salad.jpg";
import bruchetta from "../asset/bruchetta.svg";
import lemon_dessert from "../asset/lemon dessert.jpg";
import bicycle from "../asset/bicycle.jpg";
import { Link } from "react-router-dom";

const Specials = () => {
  let specials = [
    {
      id: 1,
      image: greek_salad,
      title: "Greek salad",
      price: 12.99,
      desctription: `The famous greek salad of crispy lettuce, peppers, olives and our
      Chicago style feta cheese, garnished with crunchy garlic and
      rosemary croutons.`,
    },
    {
      id: 2,
      image: bruchetta,
      title: "Bruchetta",
      price: 5.99,
      desctription: `Our Bruschetta is made from grilled bread that has been smeared with
      garlic and seasoned with salt and olive oil.`,
    },
    {
      id: 3,
      title: "Lemon Dessert",
      image: lemon_dessert,
      price: 5.0,
      desctription: `This comes straight from grandma’s recipe book, every last
      ingredient has been sourced and is as authentic as can be imagined.`,
    },
  ];

  return (
    <div id='order' className="container" style={{ marginBlock: "8rem" }}>
      <div className="d-flex justify-content-between align-items-center">
        <h1>This weeks specials!</h1>
        <div>
          <button className="btn btn-warning">Online Menu</button>
        </div>
      </div>
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-3">
          {specials.map((special) => (
            <div key={special.id} className="col p-1">
              <div className="card">
                <img
                  src={special.image}
                  className="card-img-top"
                  alt={special.title}
                  height={200}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <h5 className="card-title">{special.title}</h5>
                    <p className="text-danger">$ {special.price.toFixed(2)}</p>
                  </div>
                  <p className="card-text" style={{ height: "6rem" }}>
                    {special.desctription}
                  </p>
                  <Link href="#" className="btn btn-primary">
                    Order a delivery{" "}
                    <img src={bicycle} alt="bicycle" width={24} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specials;
