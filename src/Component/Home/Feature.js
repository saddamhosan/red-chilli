import React from 'react';
import { BsArrowRightCircleFill } from "react-icons/bs";

const Feature = ({data}) => {
    const { name, detail, img } = data;
    return (
      <div>
        <img src={img} alt="" />
        <div className=" mb-4">
          <h1>{name}</h1>
          <p>{detail}</p>
          <div className='flex items-center'>
            <button className="text-green-500">See more</button>
            <span>
              <BsArrowRightCircleFill className='ml-6 text-green-500' />
            </span>
          </div>
        </div>
      </div>
    );
};

export default Feature;