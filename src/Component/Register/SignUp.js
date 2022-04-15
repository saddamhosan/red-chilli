import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from './../../firebase.init';
import './Sign.css';

const SignUp = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
const [createUserWithEmailAndPassword, user, loading, error] =
  useCreateUserWithEmailAndPassword(auth);
  const handleName=(e)=>{
    
  }
  const handleEmail=(e)=>{
    const email = e.target.value;
    const emailRegEx = /\S+@\S+\.\S+/;
    const testedEmail = emailRegEx.test(email);
    if(testedEmail){
      setEmail(e.target.value);
    }else{
      console.log('please enter valid email');
    }
  }
  console.log(email);
  const handlePassword=(e)=>{

  }
  const handleConfirmPassword=(e)=>{

  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    const name=e.target.name.value
    
    const password=e.target.password.value
    const confirmPassword = e.target.confirmPassword.value;
    
  }

  return (
    <div className="signUp my-20 w-1/2 mx-auto py-10">
      <form onSubmit={handleSubmit} className="w-10/12 mx-auto">
        <h1 className="text-3xl font-bold">Please Sign Up</h1>
        <div className="my-4">
          <label className="block" htmlFor="name">
            Name
          </label>
          <input
            className="border w-full pl-3 input  text-xl"
            type="text"
            name="name"
          />
        </div>
        <div className="my-4">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
          onBlur={handleEmail}
            className="border w-full pl-3 input text-xl"
            type="email"
            name="email"
          />
        </div>
        <div className="my-4">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            className="border w-full pl-3 input  text-xl"
            type="password"
            name="password"
          />
        </div>
        <div className="my-4">
          <label className="block" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            className="border w-full pl-3 input  text-xl"
            type="password"
            name="confirmPassword"
          />
        </div>
        <div className="flex justify-center">
          <input
            className="bg-indigo-500 px-6 py-2 text-white font-bold rounded-lg"
            type="submit"
            value="Sign Up"
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
