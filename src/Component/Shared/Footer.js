import React from 'react';
import logo from '../../images/logo.png';

const Footer = () => {
    const date=new Date()
    const year=date.getFullYear()
    return (
      <div className="bg-black text-white pb-10">
        <div className="grid grid-cols-4 pt-20 mx-20">
          <div className='col-span-2'>
            <img className='h-10' src={logo} alt="" />
          </div>
          <div>
            <p>About Online food</p>
            <p>Read our blog</p>
            <p>Sign up to deliver</p>
            <p>Add your restaurant</p>
          </div>
          <div>
            <p>Get help</p>
            <p>Read FAQs</p>
            <p>View all cities</p>
            <p>Restaurant near me</p>
          </div>
        </div>
        <div className="flex justify-between mt-20 mx-20">
          <p>
            <small>copyright &#169; {year} online food</small>
          </p>
          <div className="flex space-x-8 ">
            <p>Privacy Policy.</p>
            <p>Terms of use</p>
            <p>Pricing</p>
          </div>
        </div>
      </div>
    );
};

export default Footer;