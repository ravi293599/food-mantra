//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER
import React from "react";
import { useEffect, useRef, useState } from "react";
import { menuImage } from "../../Utils/mockData";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Accordian from "./Accordian";
import { Link } from "react-router-dom";
import useRestaurantMenu from "../../Utils/useRestaurantMenu";
import { TiStar } from "react-icons/ti";
import { GoTriangleDown } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { FaCircle,FaMapMarkerAlt } from "react-icons/fa";
import { TbTriangleFilled } from "react-icons/tb";
import { IoCloseOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';

const RestaurantMenu = () =>{
    const[typeOfFood, setTypeOFFood] = useState(null);
    const[isVegChecked, setIsVegChecked] = useState(false);
    const[isNonvegChecked, setIsNonVegChecked] = useState(false);
    const[Bestseller, setBestseller] = useState(false);
    const[filteredMenu, setfilteredMenu] = useState([]);
    const {resId} = useParams();

    const restInfo = useRestaurantMenu(resId);

    if(restInfo === null){
        return <Shimmer />
    }
    const filterFood = (id) =>{
        if(id=="VEG"){
            setTypeOFFood(id);
            setIsVegChecked(!isVegChecked);
        }
        if(id=="NONVEG"){
            setTypeOFFood(id);
            setIsNonVegChecked(!isNonvegChecked);
        }
        if(isVegChecked || isNonvegChecked){
            setTypeOFFood(null);
        }
    }
    const filterBestSeller = () =>{
        setBestseller(!Bestseller);
    }
    const restDetail = restInfo.cards[2]?.card?.card?.info;
    const restOffer = restInfo.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
    //console.log(restOffer);
    const topPick = restInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel;
    const carousel = typeOfFood == null? topPick:(topPick.filter((i) => i?.dish?.info?.itemAttribute?.vegClassifier == typeOfFood));
    //console.log(topPick)
    const dataRest = restInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards; 
    const items = dataRest.filter((item) => item?.card?.card?.itemCards);
    const fssai = dataRest.filter((item) => item?.card?.card?.text);
    const address = dataRest.filter((item) => item?.card?.card?.completeAddress);
    const myitems = items;
    //console.log(myitems)

        return(
            <div className="restaurant-card">
                <div className="restaurant-details">
                    <h2>{restDetail.name}</h2>
                    <div className="restaurant-link">
                        <Link to="#" className="active">Order Online</Link>
                        <Link to="#">Dineout</Link>
                    </div>
                    <div className="restaurant-address">
                       <div className="address-inner">
                       <span className="rating-wrap"><span className="rating"><TiStar  /></span><p>{restDetail.avgRating} ({restDetail.totalRatingsString})</p><p>&bull;</p><p>{restDetail.costForTwoMessage}</p></span>
                       <Link className="address-link">{restDetail.cuisines}</Link>
                       <div className="restuarant-distance">
                        <span><p>Outlet</p><p>{restDetail.areaName}</p><Link><GoTriangleDown/></Link></span>
                        <span>{restDetail.sla.slaString}</span>
                       </div>
                        <p className="content-para"><img width="delivery" src={menuImage + "v1648635511/Delivery_fee_new_cjxumu"} />{restDetail.feeDetails?.message?<span dangerouslySetInnerHTML={{__html: restDetail.feeDetails?.message}}></span>:<span><b>{restDetail?.sla?.lastMileTravel} km</b> | Delivery fees applicable. Delivered & charged by the restaurant.</span>}</p>
                       </div>
                    </div>
                </div>
                <div className="restaurant-offers">
                    <h2>Deals for you</h2>
                    <div className="offer-card-wrapper">
                        {
                            restOffer.map((item) => 
                            <div className="offer-card" key={item?.info?.offerIds}> 
                                <div className="offer-image">
                                    <img alt="offer" src={menuImage + item?.info?.offerLogo} />
                                </div>
                                <div className="offer-content">
                                    <h4>{item?.info?.header}</h4>
                                    <p>{item?.info?.couponCode}</p>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
                <div className="restaurant-search-filter">
                    <div className="menu-title"><h3>MENU</h3></div>
                    <div className="restaurant-search">
                        Search for dishes
                        <IoIosSearch />
                    </div>
                    <div className="menu-filter-wrapper">
                        <div className="filter-div">
                            <label className="filter-label">
                            <input type="checkbox" className="hidden" id="veg" onChange={()=>filterFood("VEG")} />
                                <span className="filter-slide-wrapper">
                                    <span className="filter-slide veg-filter">
                                        <FaCircle className="veg"/>
                                    </span>
                                </span>
                            </label>
                        </div>
                        <div className="filter-div">
                            <label className="filter-label">
                                <input type="checkbox" className="hidden" id="non-veg" onChange={()=>filterFood("NONVEG")} />
                                <span className="filter-slide-wrapper">
                                    <span className="filter-slide non-veg-filter">
                                        <TbTriangleFilled className="non-veg" />
                                    </span>
                                </span>
                            </label>
                        </div>
                        <div className={Bestseller?"filter-div active":"filter-div"} onClick={filterBestSeller}>
                           Bestseller
                           <span className="seller-close"><IoCloseOutline /></span>
                        </div>
                    </div>
                </div>
                {
                    carousel != null && carousel.length > 0 ? <div className="top-pick">
                    <h2>Top Pick</h2>
                    <div className="card-wrapper">
                        {
                            carousel.map((item) =>
                                <div className="card" key={item?.dish?.info?.id}>
                                        <img width="100%" alt={item?.dish?.info?.name} src={menuImage + item?.creativeId} aria-hidden="true" />
                                        <div className="lower-part">
                                            <p><span className="rupee"></span> {item?.dish?.info?.price?(item?.dish?.info?.price/100):(item?.dish?.info?.defaultPrice/100)}</p>
                                            <button className="btn pick-btn">add</button>
                                        </div>
                                </div>
                            )
                        }
                    </div>
                </div>:""
                }
                <div className="accordian-wrapper">
                    {
                        myitems.map((bit) =>(
                            <Accordian title={bit.card.card.title} size={bit.card.card.itemCards.length} content={bit.card.card.itemCards} key={bit.card.card.title} vegOrNonVeg={typeOfFood} BestSeller={Bestseller} /> 
                         ))
                    }  
                    <div className="accordian-details">
                        <span className="accordian-div">
                        <img alt={fssai[0]?.card?.card?.type} src={menuImage + fssai[0]?.card?.card?.imageId} />
                        <p className="accordian-para">{fssai[0]?.card?.card?.text[0]}</p>
                        </span>
                    </div> 
                    <div className="accordian-details">
                        <h4>{address[0]?.card?.card?.name}</h4>
                        <p className="accordian-para">(Outlet: {address[0]?.card?.card?.area})</p>
                        <p className="rest-address"><FaMapMarkerAlt />{address[0]?.card?.card?.completeAddress}</p>
                    </div>
                    <div className="Download-swiggy">
                        <p>For better experience, download the Swiggy app now</p>
                        <span>
                            <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader" target="_blank"><img alt="playstore" src="https://static.pbcdn.in/e2e-cdn/assets/images/btn-google-play-store.svg" /></a>
                            <a href="https://itunes.apple.com/in/app/id989540920?referrer:utm_source%3Dswiggy%26utm_medium%3Dhomepage" target="_blank"><img alt="playstore" src="https://static.pbcdn.in/e2e-cdn/assets/images/btn-app-store.svg" /></a>
                        </span>
                    </div>
                </div>
            </div>
        )
}
export default RestaurantMenu;