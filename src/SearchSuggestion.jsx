import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { locationFetcher, restaurantFetcher, apiKey } from "./Config";
import { Link } from "react-router-dom";
export const SearchSuggestion = (props) => {
  const [searchSuggestionList, setSearchSuggestionList] = useState([]);
  let location = useParams().location;

  async function restaurantFetch(lon, lat) {
    try {
      const res = await fetch(
        `${restaurantFetcher[0]}${lat}${restaurantFetcher[1]}${lon}${restaurantFetcher[2]}`
      );
      const json = await res.json();
      setSearchSuggestionList(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
          (item) => {
            return [item.info.name.toLowerCase(), item.info.id];
          }
        ) || []
      );
    } catch {
      console.log("error in restaurantFetch");
    }
  }

  async function locationFetch(value = "mumbai") {
    try {
      const res = await fetch(
        `${locationFetcher[0]}${value}${locationFetcher[1]}${apiKey}`
      );
      const json = await res.json();
      restaurantFetch(json[0]?.lon, json[0]?.lat);
    } catch {
      console.log("error in locationFetch");
    }
  }

  useEffect(() => {
    locationFetch(location);
  }, [location]);

  return (
    <>
      {searchSuggestionList.length === 0 ? (
        ""
      ) : (
        <div className="absolute bg-gray-200 min-w-230 overflow-auto border border-gray-300 z-10 max-w-max">
          {searchSuggestionList?.map((item, i) => {
            return item[0].includes(props.text) ? (
              <Link
                key={i}
                to={`/${location}/${item[1]}`}
                className="text-black py-3 px-4 no-underline block"
                onClick={() => props.searchBarPop()}
              >
                <button>
                  {item[0].length <= 25
                    ? item[0]
                    : `${item[0].slice(0, 20)}...`}
                </button>
              </Link>
            ) : null;
          })}
        </div>
      )}
    </>
  );
};

const tailwindStyles = {
  dropdownContentLink: "text-black py-3 px-4 no-underline block",
};
