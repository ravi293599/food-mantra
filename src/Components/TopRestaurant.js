import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const TopRestaurant = ({ Topdata }) => {
  return (
    <div className="restaurant-wrapper">
      <div className="res-container">
        <h2>{Topdata?.card?.card?.header?.title}</h2>
        {Topdata?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
          (item) => (
            <Link
              key={item.info.id}
              to={"/restaurant/" + item.info.id}
              className="card-link"
            >
              <RestaurantCard resData={item} />
            </Link>
          )
        )}
      </div>
    </div>
  );
};
export default TopRestaurant;
