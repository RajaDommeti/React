import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (resInfo === null) return <Shimmer />;

  // Ensure that the necessary properties exist before destructuring
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
