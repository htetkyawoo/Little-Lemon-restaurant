import React from "react";

const CustomerSay = () => {
  let getRating = () => (Math.random() * 10).toFixed(2);
  let getImage = () => "https://randomuser.me/api/portraits/men/41.jpg";
  const customers = [
    {
      id: 1,
      name: "Jessy",
    },
    {
      id: 2,
      name: "memmy",
    },
    {
      id: 3,
      name: "loream",
    },
  ];
  return (
    <div className="container">
      <h3 className="text-center">Testimonials</h3>
      <div className=" mt-2 p-2">
        <div className="row">
          {customers.map((customer) => (
            <div className="col" key={customer.id} style={{ width: "12rem" }}>
              <div>
                <h5>Rating : {getRating()}</h5>
                <div className="d-flex align-items-center">
                  <img
                    src={getImage()}
                    alt="uesr"
                    className="rounded"
                  />
                  <div className="m-2">{customer.name}</div>
                </div>
                <p className="justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                  odio aut aliquid ex vero at in corporis, sit enim eveniet rem
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerSay;
