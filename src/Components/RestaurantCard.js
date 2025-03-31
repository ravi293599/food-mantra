import { restaurantImg } from "../../Utils/mockData";
import {newRestImag} from "../../Utils/mockData";
import { IoStar } from "react-icons/io5";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        aggregatedDiscountInfoV3,
        areaName
    } = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    return(
        <div className="res-card">
        <div className="image-wrapper">
            <img alt="Restaurant dish" src={restaurantImg + cloudinaryImageId} />
            <p className="restaurant-offer">{aggregatedDiscountInfoV3?.header&&(aggregatedDiscountInfoV3?.header +" "+ aggregatedDiscountInfoV3?.subHeader)}</p>
        </div>
        <div className="card-body">
            <h3 className="restaurant-name">{name}</h3>
            <span className="restaurant-rating"><span className="star-rating"><IoStar /></span><h4>{avgRating}</h4>&bull;<h4>{resData?.info?.sla?.slaString}</h4></span>  
            <p>{cuisines.join(",")}</p>
            {/* <p>{costForTwo}</p> */}
            <p>{areaName}</p>
        </div>
        </div>
    )
}
export default RestaurantCard;