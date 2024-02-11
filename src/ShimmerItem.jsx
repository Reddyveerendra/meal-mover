import React from "react";

const ShimmerItem = (props) => (
  <div
    className={`flex items-center justify-between border-b-2 border-gray-300 p-5 my-3 item${props.i}`}
  >
    <div className="whitespace-pre-wrap">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="h-[20px] w-[100px] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 mt-[10px]"
        ></div>
      ))}
    </div>

    <div className="ml-[10px]">
      <div className="h-[100px] w-[120px] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300"></div>

      <div className="flex justify-center gap-[10px] mt-[10px]">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="h-[20px] w-[20px] bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300"
          ></div>
        ))}
      </div>
    </div>
  </div>
);

export default ShimmerItem;
