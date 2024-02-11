import React from "react";
import error from "./image/error.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-8 text-red-500">Oops!</h1>
      <p className="text-lg mb-16 text-gray-700">Something went wrong.</p>
      <Link to="/" className="text-lg text-blue-500">
        <h3>Click here to go back to the main page</h3>
      </Link>
      <img src={error} alt="Error Illustration" className="w-300 h-auto" />
    </div>
  );
};

export default Error;
