/* eslint-disable no-unused-vars */
// src/LoginPage.js
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { UseDispatch, useSelector } from "react-redux";
import { UseSelector } from "react-redux";
import { updateUser } from "./utils/CartSlice";
import { auth } from "./utils/firebase";
import React, { useContext, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { contentManger } from "./utils/ContentManger";
import { checkLog, checkCreate } from "./utils/FunctionCalls";
const LoginPage = () => {
  const { setUserName, loginId, loginStatus, setLoginStatus } =
    useContext(contentManger);
  const [loginType, setLoginType] = useState(true);
  const { location } = useParams();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleLog = () => {
    const error = checkLog(email, password);
    setErrorMessage(error);
    if (error != null) return;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        setUserName(name);
        setLoginStatus(!loginStatus);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage("invalid credential");
        console.log(errorCode, errorMessage);
      });
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("hi");
        setUserName("user");
        setLoginType(!loginType);
        setLoginStatus(!loginStatus);
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleCreate = () => {
    const error = checkCreate(email, password, confirmPassword);
    setErrorMessage(error);
    if (error != null) return;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage("already in use");
        console.log(errorCode, errorMessage);
        // ..
      });
    setLoginType(!loginType);
  };
  return (
    <>
      {loginStatus ? (
        <div className="w-1/3 h-1/3 my-10 mx-auto p-8 bg-[#111827] rounded-2xl">
          <div className=" py-2 my-4 flex justify-center">
            <h2 className="px-4 text-[#0387A1]">{loginId}</h2>
          </div>
          <div className="flex justify-center py-2 my-4">
            <button
              type="button"
              className="p-1 bg-[#0387A1] text-[#111827] font-bold "
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </button>
          </div>
        </div>
      ) : loginType ? (
        <div className="w-1/3 h-1/3 my-10 mx-auto p-4 bg-[#111827] rounded-2xl">
          <div className=" flex justify-between py-2 my-4">
            <label htmlFor="Name" className="px-4 text-[#0387A1]">
              Name
            </label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              name="Name"
              className="text-[#000000] p-1"
              value={name}
              maxLength={8}
            />
          </div>
          <div className=" flex justify-between py-2 my-4">
            <label htmlFor="email" className="px-4 text-[#0387A1]">
              Email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              type="text"
              name="email"
              className="text-[#000000] p-1"
            />
          </div>
          <div className=" flex justify-between py-2 my-4">
            <label htmlFor="password" className="px-4 text-[#0387A1]">
              Password
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              type="text"
              name="Password"
              className="text-[#000000] p-1 "
            />
          </div>
          <div className="flex justify-center py-2 my-4">
            <button
              type="button"
              className="p-1 bg-[#0387A1] text-[#111827] font-bold "
              onClick={() => {
                handleLog();
              }}
            >
              Login
            </button>
          </div>
          {errorMessage ? (
            <div
              class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong class="font-bold">Error:</strong>
              <span class="block sm:inline">{errorMessage}</span>
            </div>
          ) : (
            ""
          )}
          <div
            className="my-4 px-4 text-[#0387A1] cursor-pointer"
            onClick={() => {
              setLoginType(!loginType);
            }}
          >
            if New User ? Create account
          </div>
        </div>
      ) : (
        <div className="w-1/3 h-1/3 my-10 mx-auto p-4 bg-[#111827]">
          <div className=" flex justify-between py-2 my-4">
            <label htmlFor="Name" className="px-4 text-[#0387A1]">
              Name
            </label>
            <input
              maxLength={8}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              name="Name"
              className="text-[#000000] p-1"
            />
          </div>
          <div className=" flex justify-between py-2 my-4">
            <label htmlFor="email" className="px-4 text-[#0387A1]">
              Email
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              name="email"
              className="text-[#000000] p-1"
            />
          </div>
          <div className=" flex justify-between py-2 my-4">
            <label htmlFor="password" className="px-4 text-[#0387A1]">
              Password
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="text"
              name="Password"
              className="text-[#000000] p-1"
            />
          </div>
          <div className=" flex justify-between py-2 my-4">
            <label htmlFor="password" className="px-4 text-[#0387A1]">
              Confirm Password
            </label>
            <input
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              type="text"
              name="Password"
              className="text-[#000000] p-1"
            />
          </div>
          <div className="flex justify-center py-2 my-4">
            <button
              type="button"
              className="p-1 bg-[#0387A1] text-[#111827] font-bold "
              onClick={() => {
                handleCreate();
              }}
            >
              Create
            </button>
          </div>
          {errorMessage ? (
            <div
              class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong class="font-bold">Error:</strong>
              <span class="block sm:inline">{errorMessage}</span>
            </div>
          ) : (
            ""
          )}
          <div
            className="my-4 px-4 text-[#0387A1] cursor-pointer"
            onClick={() => {
              setLoginType(!loginType);
            }}
          >
            if Already User ? Sign in
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
