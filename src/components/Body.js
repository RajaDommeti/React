import { RestaurentCard } from "./RestaurentCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local State variable
  const [listOfRestaurents, setlistOfRestaurents] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurents.filter(
              (restaurent) => restaurent.avgRating > 4
            );
            setlistOfRestaurents(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurents.map((restaurent) => (
          <RestaurentCard resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
