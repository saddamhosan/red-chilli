import React from 'react';
import '../../Component/Banner.css';

const Banner = () => {
    return (
      <div className="banner mt-20  flex justify-center items-center  h-[80vh]">
        <div>
          <h1 className="text-2xl md:text-4xl ">
            Best food waiting for your belly
          </h1>

          <div className=" flex justify-center items-center mt-5">
            <span className="bg-white border-2 outline-hidden  rounded-xl ">
              <input className="rounded-xl pl-3 text-xl" type="text" />
              <button className="bg-red-400 text-xl rounded-xl px-3">
                Search
              </button>
            </span>
          </div>
        </div>
      </div>
    );
};

export default Banner;