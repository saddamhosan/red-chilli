import React from 'react';
import lunch1 from "../../images/lunch/lunch1.png";
import lunch2 from "../../images/lunch/lunch2.png";
import lunch3 from "../../images/lunch/lunch3.png";
import lunch4 from "../../images/lunch/lunch4.png";
import lunch5 from "../../images/lunch/lunch5.png";
import lunch6 from "../../images/lunch/lunch6.png";
import SingleD from './SingleD';



const allData = [
  {
    id: 1,
    name: "Healthy Meal Plan",
    detail: "How we dream our future ",
    price: 23.99,
    img: lunch1,
  },
  {
    id: 2,
    name: "Fried Chicken Bento",
    detail: "How we dream our future ",
    price: 23.99,
    img: lunch2,
  },
  {
    id: 3,
    name: "Tarragon Rubbed Salmon",
    detail: "How we dream our future ",
    price: 23.99,
    img: lunch3,
  },
  {
    id: 4,
    name: "Indian Lunch",
    detail: "How we dream our future ",
    price: 23.99,
    img: lunch4,
  },
  {
    id: 5,
    name: "Beef Steak",
    detail: "How we dream our future ",
    price: 23.99,
    img: lunch5,
  },
  {
    id: 6,
    name: "Honey Soy Glazed Salmon with Peppers",
    detail: "How we dream our future ",
    price: 23.99,
    img: lunch6,
  },
];

const Lunch = () => {
    return (
      <div className="grid grid-cols-3 gap-10 m-10 ">
        {allData.map((data) => (
          <SingleD key={data.id} data={data} />
        ))}
      </div>
    );
};

export default Lunch;