import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const OnlineRestaurant = ({Topdata,title}) => {
  return (
    <div className="restaurant-wrapper online-restaurant">
      <div className="res-container">
        <h2>{title}</h2>
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
export default OnlineRestaurant;
