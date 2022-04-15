import React from 'react';
import '../../Component/Banner.css';

const Banner = () => {
    return (
      <div className="banner mt-20 h-[80vh] w-full">
        <h1 className="text-center pt-32 text-4xl pb-4">
          Best food waiting for your belly
        </h1>

        <div className=" flex justify-center items-center">
          <span className="bg-white border-2 outline-hidden  rounded-xl ">
            <input className="rounded-xl pl-3 text-xl" type="text" />
            <button className="bg-red-400 text-xl rounded-xl px-3">
              Search
            </button>
          </span>
        </div>
      </div>
    );
};

export default Banner;