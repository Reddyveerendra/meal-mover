import React, { useState } from "react";
import logo from "./image/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { SearchSuggestion } from "./SearchSuggestion";
import { useContext } from "react";
import { contentManger } from "./utils/ContentManger";
import { useSelector } from "react-redux";
const Header = () => {
  // useEffect(() => {
  //   if (!loginStatus) {
  //     navigate("/login")
  //   }
  // }, [])
  const { loginStatus } = useContext(contentManger)
  const [locationText, setLocationText] = useState("Mumbai");
  const [restaurant, setRestaurant] = useState("");
  const [locationBar, setLocationBar] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const { loginId } = useContext(contentManger);
  async function locationBarPop() {
    setLocationBar((val) => {
      return !val;
    });
  }
  const itemCount = useSelector((state) => state.cart.items.length);
  function searchBarPop() {
    setDropDown((val) => {
      return !val;
    });
  }
  return (
    <div className="w-screen flex p-4 bg-gray-900 items-center justify-between">
      <div className="flex gap-3 w-[348px]">
        <Link to={!loginStatus ? "/login" : "/mumbai"}>
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-12" />
            <h2 className="text-[#0387A1] font-bold text-xl">Parcel</h2>
          </div>
        </Link>
        <div className="flex items-center">
          <div className="flex items-center space-x-2">
            {locationBar ? (
              <>
                <input
                  type="text"
                  name="locationSearch"
                  id="locationSearch"
                  value={locationText}
                  className="locationSearch"
                  placeholder="Mumbai..."
                  onChange={(e) => {
                    setLocationText(e.target.value);
                  }}
                />
                <Link to={!loginStatus ? "/login" : `/${locationText}`}>
                  <button
                    type="button"
                    onClick={() => {
                      locationBarPop();
                    }}
                  >
                    <i className="bi bi-geo-alt-fill"></i>
                  </button>
                </Link>
              </>
            ) : (
              <h4
                className="text-[aliceblue] cursor-pointer"
                onClick={() => {
                  locationBarPop();
                }}
              >
                {locationText.split(" ")[0].slice(0, 7)}...
                <i className="bi bi-geo-alt-fill"></i>
              </h4>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-10 w-[600px]">
        <div className="relative inline-block">
          <input
            type="text"
            value={restaurant}
            onChange={(e) => {
              setRestaurant(e.target.value);
            }}
            onClick={() => {
              searchBarPop();
            }}
            placeholder="Search here..."
          />
          <button
            type="button"
            onClick={() => {
              searchBarPop();
            }}
          >
            <i className="bi bi-search search bg-[#0387A1] p-[2px]"></i>
          </button>
          {dropDown ? (
            <SearchSuggestion text={restaurant} searchBarPop={searchBarPop} />
          ) : (
            ""
          )}
        </div>
        <Link to="/login">
          <div className="login">
            <button type="button">
              <i className="bi bi-person-fill button"></i> {loginId}
            </button>
          </div>
        </Link>
        <Link to={!loginStatus ? "/login" : "/contact"}>
          <div className="contact">
            <button type="button">
              <i className="bi bi-info-circle-fill"></i> Contact
            </button>
          </div>
        </Link>
        <Link to={!loginStatus ? "/login" : "/cart"}>
          <div className="cart flex">
            <button type="button" className="relative gap-2">
              <div className="display-contents">
                <i className="bi bi-cart text-4xl"></i>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-red-500 rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              </div>
            </button>
            <div className="m-2">Cart</div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Header;
