import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const restaurantInfo = resInfo?.cards[0]?.card?.card?.info || {};
  const deliveryInfo = resInfo?.cards[0]?.card?.card?.info?.sla || {};
  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
      ?.itemCards || [];

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{restaurantInfo.name}</h1>
      <p>
        {restaurantInfo.cuisines}-{restaurantInfo.costForTwoMessage}
      </p>
      <h3>{deliveryInfo.deliveryTime} Mins</h3>
      <h2>Menu</h2>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{"Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
