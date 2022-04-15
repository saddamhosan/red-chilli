import React from "react";
import features1 from "../../images/adult-blur-blurred-background-687824.png";
import features3 from "../../images/architecture-building-city-2047397.png";
import features2 from "../../images/chef-cook-food-33614.png";
import Feature from "./Feature";

const allData = [
  {
    id: 1,
    name: "Fast Delivery",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus vitae aperiam sunt veniam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus vitae aperiam sunt veniam id?",
    img: features1,
  },
  {
    id: 2,
    name: "A Good Auto Responder",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus vitae aperiam sunt veniam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus vitae aperiam sunt veniam id? ",
    img: features2,
  },
  {
    id: 3,
    name: "Home Delivery",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus vitae aperiam sunt veniam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus vitae aperiam sunt veniam id?",
    img: features3,
  },
];

const Features = () => {
  return (
    <div>
      <div className="m-10">
        <h1>Why you choose us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Natus vitae
          aperiam sunt veniam id?
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 m-10 ">
        {allData.map((data) => (
          <Feature key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Features;
