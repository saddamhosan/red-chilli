import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import auth from "./../../firebase.init";
import "./Sign.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    const emailRegEx = /\S+@\S+\.\S+/;
    const testedEmail = emailRegEx.test(email);
    if (testedEmail) {
      setEmail(e.target.value);
    } else {
      console.log("please enter valid email");
    }
  };

  const handlePassword = (e) => {
    const password = e.target.value;
    const passwordRegEx = /.{6,}/;
    const testedPassword = passwordRegEx.test(password);
    if (testedPassword) {
      setPassword(password);
    } else {
      console.log("set password minimum six character");
    }
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("confirm password not match");
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };
  if (user) {
    console.log(user);
    navigate("/");
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
            onBlur={handleName}
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
            onBlur={handlePassword}
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
            onBlur={handleConfirmPassword}
            className="border w-full pl-3 input  text-xl"
            type="password"
            name="confirmPassword"
          />
        </div>
        {(loading || updating) && (
          <div className="text-center border-blue-600">
            <ClipLoader />
          </div>
        )}
        {(error || updateError) && (
          <p className="text-red-500">
            Error: {error?.message} {updateError?.message}
          </p>
        )}
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
