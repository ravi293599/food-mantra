import { FaStar } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { TbTriangleFilled } from "react-icons/tb";
import { menuImage } from "../../Utils/mockData";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { RiStarSLine } from "react-icons/ri";

const RestaurantPopup = ({data,closePopUp}) =>{
    return (
      <>
        <div className="popup-overlay"></div>
        <div className="popup-module">
          <span className="close" onClick={closePopUp}></span>
          <img
          alt={data?.name} src={menuImage + data?.imageId}
          />
          <div className="popup-content">
            <div className="left-content">
              <span className="menu-details">
                <span
                  className={
                    data?.itemAttribute?.vegClassifier == "VEG"
                      ? "food-category veg-food"
                      : "food-category"
                  }
                >
                  <TbTriangleFilled className="non-veg" />
                  <FaCircle className="veg" />
                </span>
                {data?.isBestseller ? (
                  <span className="bestseller">
                    <RiStarSLine /> Bestseller
                  </span>
                ) : (
                  ""
                )}
              </span>
              <h3>{data?.name}</h3>
              {data?.offerTags ? (
                <span className="price-with-disc">
                  <p>
                    <span className="rupee"></span>{" "}
                    {data?.price / 100}
                  </p>
                  {data?.offerTags[0]?.title ? (
                    <p className="menu-discount">
                      <BiSolidPurchaseTag />
                      {data?.offerTags[0]?.title +
                        " " +
                        data?.offerTags[0]?.subTitle}
                    </p>
                  ) : (
                    ""
                  )}
                </span>
              ) : (
                <p>
                  <span className="rupee"></span> {data?.price / 100}
                </p>
              )}
              {data?.ratings?.aggregatedRating?.rating && (
                <p className="menu-rating">
                  <FaStar className="rating" />
                  <span className="rating-text">
                    {data?.ratings?.aggregatedRating?.rating}
                  </span>
                  ({data?.ratings?.aggregatedRating?.ratingCountV2})
                </p>
              )}
            </div>
            <div className="right-content">
              <div className="add-btn">
                  <button className="btn pick-btn">add</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default RestaurantPopup;