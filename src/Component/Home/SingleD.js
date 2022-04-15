import React from 'react';

const SingleD = ({data}) => {
    const { name, detail, price, img } = data;
    return (
      <div className="hover:shadow-xl">
        <div>
          <img className="w-full p-10" src={img} alt="" />
        </div>
        <div className="text-center mb-4">
          <h1>{name}</h1>
          <p>{detail}</p>
          <h1>{price}</h1>
        </div>
      </div>
    );
};

export default SingleD;