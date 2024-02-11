import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import FoodItems from "./foodItems";
import { useState } from "react";
const ItemsGroup = (props) => {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen((prev) => {
      return !prev;
    });
  }
  const itemsList = props.cat.itemCards.flat().map((x) => x.card?.info) || [];
  return (
    <>
      <div key={props.cat.title} className="p-[4px] drop-shadow-md shadow-md">
        <div
          className="flex justify-between"
          onClick={() => {
            props.popDisFun(props.i);
          }}
        >
          <h5>{props.cat.title}</h5>
          <i className="bi bi-arrows-expand"></i>
        </div>
        {props.i == props.popDis ? (
          <div className="p-[8px]">
            {itemsList.map((item, i) => (
              <div key={i}>
                <FoodItems key={i} item={item} index={i} />
              </div>
            ))}
          </div>
        ) : (
          <hr className="p-[0 1px]" />
        )}
      </div>
    </>
  );
};

export default ItemsGroup;
