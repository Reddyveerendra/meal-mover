import React, { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { restaurantFetcher, locationFetcher, apiKey } from "./Config";
import Card from "./Card";
const Main = (props) => {
  let id = useParams();
  const [restaurants, setRestaurants] = useState([]);
  async function restaurantFetch(lon, lat) {
    try {
      const res = await fetch(
        restaurantFetcher[0] +
          lat +
          restaurantFetcher[1] +
          lon +
          restaurantFetcher[2]
      );
      const json = await res.json();
      setRestaurants(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch {
      console.log("error in restaurantFetch");
    }
  }
  async function locationFetch(value = "mumbai") {
    try {
      const res = await fetch(
        locationFetcher[0] + value + locationFetcher[1] + apiKey
      );
      const json = await res.json();
      return restaurantFetch(json[0].lon, json[0].lat);
    } catch {
      console.log("error in locationFetch");
    }
  }
  useEffect(() => {
    setRestaurants(locationFetch(id.location));
  }, [id]);
  return (
    <div className="Main" style={style.restaurants}>
      {restaurants?.length > 0 ? (
        restaurants.map((item, i) => {
          return <Card {...item} key={i} />;
        })
      ) : (
        <Shimmer />
      )}
    </div>
  );
};
const style = {
  restaurants: {
    flexWrap: "wrap",
    justifyContent: "center",
    display: "flex",
  },
};
export default Main;
