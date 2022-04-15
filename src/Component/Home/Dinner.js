import React from "react";
import dinner1 from "../../images/dinner/dinner1.png";
import dinner2 from "../../images/dinner/dinner2.png";
import dinner3 from "../../images/dinner/dinner3.png";
import dinner4 from "../../images/dinner/dinner4.png";
import dinner5 from "../../images/dinner/dinner5.png";
import dinner6 from "../../images/dinner/dinner6.png";
import SingleD from "./SingleD";



const allData = [
  {
    id: 1,
    name: "Healthy Meal Plan",
    detail: "How we dream our future ",
    price: 23.99,
    img: dinner1,
  },
  {
    id: 2,
    name: "Fried Chicken Bento",
    detail: "How we dream our future ",
    price: 23.99,
    img: dinner2,
  },
  {
    id: 3,
    name: "Tarragon Rubbed Salmon",
    detail: "How we dream our future ",
    price: 23.99,
    img: dinner3,
  },
  {
    id: 4,
    name: "Indian Lunch",
    detail: "How we dream our future ",
    price: 23.99,
    img: dinner4,
  },
  {
    id: 5,
    name: "Beef Steak",
    detail: "How we dream our future ",
    price: 23.99,
    img: dinner5,
  },
  {
    id: 6,
    name: "Honey Soy Glazed Salmon with Peppers",
    detail: "How we dream our future ",
    price: 23.99,
    img: dinner6,
  },
];

const Dinner = () => {
  return (
    <div className="grid grid-cols-3 gap-10 m-10 ">
      {allData.map((data) => (
        <SingleD key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Dinner;
