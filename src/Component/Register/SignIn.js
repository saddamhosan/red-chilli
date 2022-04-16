import React, { useState } from "react";
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";

const SignIn = () => {
  const navigate = useNavigate();
  const location=useLocation()
  const from=location.state?.from?.pathname ||'/'
  const [email, setEmail] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, ResetError] =
    useSendPasswordResetEmail(auth);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
    toast("successfully sign in");
  };
  if (user) {
    navigate(from,{replace:true});
  }
  const handleResetPassword = async () => {
    await sendPasswordResetEmail(email);
    toast("Sent email");
  };
  return (
    <div className="signUp my-20 w-1/2 mx-auto py-10">
      <form onSubmit={handleSubmit} className="w-10/12 mx-auto">
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

        {(loading || sending) && (
          <div className="text-center ">
            <ClipLoader className="border-blue-600" />
          </div>
        )}
        {(error || ResetError) && (
          <p className="text-red-500">
            Error: {error?.message} {ResetError?.message}
          </p>
        )}

        <div className="flex justify-center">
          <input
            className="bg-indigo-500 px-6 py-2 text-white font-bold rounded-lg"
            type="submit"
            value="Sign In"
          />
        </div>
      </form>
      <p className="text-center mt-5">
        forget password?{" "}
        <span
          className="text-blue-700 cursor-pointer"
          onClick={handleResetPassword}
        >
          Reset password
        </span>
      </p>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
