import { useEffect, useState } from "react";
import { restDataList } from "../utils/data";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestList from "../utils/useRestList";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [text, setText] = useState("");
  const [filterRestData, allRestData, setFilterRestData, setAllRestData] =
    useRestList(restDataList);
  console.log("Render");
  if (!allRestData) return null;
  const isOnline=useOnline();
 if(!isOnline){return <h1>Please check your internet connection.</h1>}

  let searchFilter = (text, allRestData) => {
    return allRestData.filter((data) =>
      data?.data?.name.toLowerCase().includes(text.toLowerCase())
    );
  };
  return allRestData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="container-field">
        {/* Search bar */}
        <div className="search-box">
          <input
            type="text"
            value={text}
            name="search"
            placeholder="Search for restaurants here"
            onChange={(e) => setText(e.target.value)}
          />

          <button
            className="search-icon"
            onClick={() => {
              let SearchRest = searchFilter(text, allRestData);
              setFilterRestData(SearchRest);
            }}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>

        <button
          className="search"
          onClick={() => {
            let newList = filterRestData.filter(
              (data) => data?.data?.avgRating >= 4
            );
            setFilterRestData(newList);
          }}
        >
          Top RATED restaurants
        </button>

        <button
          className="search"
          onClick={() => {
            let fastDeliver = filterRestData.filter(
              (data) => data?.data?.deliveryTime > 21
            );
            setFilterRestData(fastDeliver);
          }}
        >
          Fast Delivery
        </button>
      </div>

      <div className="container">
        <div className="card-container">
          {filterRestData?.length === 0 ? (
            <h1>No restaurants found!!</h1>
          ) : (
            filterRestData.map((restdata) => (
              <Link to={"/menu/" + restdata.data.id} key={restdata.data.id}>
                <Card data={restdata} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Body;
