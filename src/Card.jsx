import React from "react";
import { imgPrefix } from "./Config";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Card = (props) => {
  const location = useParams();
  const {
    id,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
    name,
    sla,
    avgRating,
    cuisines,
    areaName,
  } = { ...props.info };
  return (
    <Link
      to={`/${location.location}/${id}`}
      key={id} // Added key prop here
      className="no-underline "
    >
      <div
        className="bg-gray-300 card text-pretty flex-column max-w-* max-h-* m-[28px] p-[8px] flex underline-offset-0"
        key={id}
        style={{ background: "#dedede" }}
      >
        <div className="restaurantImage">
          <img
            src={imgPrefix + cloudinaryImageId}
            alt={name}
            className="rounded-2xl w-[250px] h-[170px] relative inline-block"
          />
          <h4
            className="text-center absolute
              bottom-[40%]
              text-[aliceblue]
              w-[250px] uppercase
              right-[2px]
              left-[8px]
              bg-slate-500"
          >
            {aggregatedDiscountInfoV3 === undefined
              ? ""
              : aggregatedDiscountInfoV3.header +
                " " +
                aggregatedDiscountInfoV3.subHeader}
          </h4>
        </div>
        <div className="pl-[5px]">
          <h3>{name.length > 15 ? name.slice(0, 12) + "..." : name}</h3>
          <h6>{"" + avgRating + sla.deliveryTime}</h6>
          <h6>{cuisines[0] + " ," + cuisines[1]}</h6>
          <h6>{areaName}</h6>
        </div>
      </div>
    </Link>
  );
};

export default Card;
