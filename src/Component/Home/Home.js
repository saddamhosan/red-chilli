import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Banner from "./Banner";
import Features from "./Features";

const Home = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div>
        <div className="text-center space-x-8">
          <NavLink to="/breakfast">Breakfast</NavLink>
          <NavLink to="/lunch">Lunch</NavLink>
          <NavLink to="/dinner">Dinner</NavLink>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
        <div className="flex justify-center">
          <button className="bg-gray-500 py-3 px-10 text-xl font-semibold text-white">CheckOut Your Food</button>
        </div>
      </div>
      <div>
          <Features/>
      </div>
    </div>
  );
};

export default Home;
