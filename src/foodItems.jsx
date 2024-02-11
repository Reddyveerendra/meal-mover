import React, { useState } from "react";
import { imgPrefix } from "./Config";
// import CircleSquareIconGreen, { CircleSquareIconRed } from "./CircleSquareIcon";
import { addItem, removeItem } from "./utils/CartSlice";
import { useDispatch } from "react-redux";

const FoodItems = ({ item }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addItem(item));
    setCount(count + 1);
  };

  const handleRemove = () => {
    dispatch(removeItem(item));
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <div className="item" key={item.id}>
      <div
        className="flex items-center justify-between"
        style={{ margin: "0% 0%", padding: "5%" }}
      >
        <div className="left_item" style={{ whiteSpace: "pre-wrap" }}>
          {/* {item.itemAttribute?.vegClassifier === "VEG" ? (
            <CircleSquareIconGreen />
          ) : (
            <CircleSquareIconRed />
          )} */}
          <div className="itemName">{item.name}</div>
          <div className="price">₹ {item.price / 100}</div>
          <div
            className="description"
            style={{ fontSize: "small", fontWeight: "100" }}
          >
            {item.description}
          </div>
        </div>
        <div className="rightItem" style={{ marginLeft: "10%" }}>
          {item.imageId && (
            <img
              src={imgPrefix + item.imageId}
              alt={item.imageId}
              className="h-[71px] w-[84px]"
            />
          )}
          <div className="counter flex justify-center gap-[22px] mt-[10px]">
            <button type="button" onClick={handleRemove}>
              -
            </button>
            {count}
            <button type="button" onClick={handleAdd}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
