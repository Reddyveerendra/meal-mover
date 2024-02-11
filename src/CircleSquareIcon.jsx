import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CircleSquareIconRed = () => {
  return (
    <div className="container mt-[5px]">
      <div className="row">
        <div className="col-md-4">
          <div className="w-[20px] h-[20px] border-2 border-solid border-red-500 flex items-center justify-center">
            <div className="w-[10px] h-[10px] rounded-full bg-red-500 text-white flex items-center justify-center">
              <i className="bi bi"></i>{" "}
              {/* Replace with the desired Bootstrap icon */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CircleSquareIconGreen = () => {
  return (
    <div className="container mt-[5px]">
      <div className="row">
        <div className="col-md-4">
          <div className="w-[20px] h-[20px] border-2 border-solid border-green-500 flex items-center justify-center">
            <div className="h-[10px] w-[10px] rounded-full bg-green-500 text-white flex items-center justify-center">
              <i className="bi bi"></i>{" "}
              {/* Replace with the desired Bootstrap icon */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CircleSquareIconRed;
export { CircleSquareIconGreen };
