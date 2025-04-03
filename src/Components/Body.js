import RestaurantCard from "./RestaurantCard";
import TopRestaurant from "./TopRestaurant";
import { restaurantList,dataURL,menuImage } from "../../Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import WhatInYourMindCarousel from "../Components/WhatInYourMindCarousel"
import OnlineRestaurant from "./OnlineRestaurant";
import BestPlace from "./BestPlace";
import Footer from "./Footer";
import Slider from "./slider";

const Body = () =>{
    const[megaData, setMegaData] = useState([]);
    const[ListOfRestaurant, setListOfRestaurant] = useState([]);
    const[DisplayedRestaurant, setDisplayedRestaurant] = useState([]);
    const[onlineRestaurant, setOnlineRestaurant] = useState([]);
    const[topRestaurant, setTopRestaurant] = useState([]);
    const[carouselData, setCarouselData] = useState([]);
    const[brandData,setBrandData] = useState([]);
    const[searchText, setSearchText] = useState("");
    const filterData = () =>{
        filteredList = DisplayedRestaurant.filter(
            (res) => res.info.avgRating > 4.5
        );
        setDisplayedRestaurant(filteredList);
    }
    const searchData = () =>{
        const filteredData = ListOfRestaurant.filter(
            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
        )
        setDisplayedRestaurant(filteredData);
    }
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async() =>{
        // const data = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1685786&lng=79.9338798&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1685786&lng=79.9338798&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //console.log(json);
        setMegaData(json?.data?.cards)
        // const bulkData = json?.data?.cards;
        const realData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setTopRestaurant(json?.data?.cards[1]);
        setCarouselData(json?.data?.cards[0]);
        setOnlineRestaurant(json?.data?.cards[2])
        footerLink = json?.data?.cards[9];
        footerCity = json?.data?.cards[10];
        // const brand = bulkData.filter(() => json?.data?.cards?.card?.card?.id=="restaurant_near_me_links");
        // console.log(brand);
        //console.log(realData);
        setListOfRestaurant(realData);
        setDisplayedRestaurant(realData);
        //console.log(ListOfRestaurant)
    }
    const brand = megaData.filter((item) => item.card?.card?.id=="restaurant_near_me_links");
    //console.log(brand)
    console.log("body rendered");
    //console.log(ListOfRestaurant);
    const onlineCheck = useOnlineStatus();
    if(onlineCheck == false){
        <h1>You are offline, kindly check your internet connection!</h1>
    }
    if(DisplayedRestaurant.length === 0){
        return <Shimmer />
    }
    return(
      <div className="body-wrap">
          <div className="home-wrapper">
            <WhatInYourMindCarousel data={carouselData} />
            {/* <div className="action-wrapper">
                <div className="search-container">
                    <input type="text" name="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="btn" onClick={searchData}>Search</button>
                </div>
                <div className="Filter-btn"><button className="btn" onClick={filterData}>Filter the Restaurant</button></div>
            </div> */}
            {/* {
                <div className="restaurant-wrapper">
                    <div className="res-container">
                    <h2>{TopRestaurant?.card?.card?.header?.title}</h2>
                    {
                        DisplayedRestaurant.map((item) =>
                        <Link key={item.info.id} to={"/restaurant/"+item.info.id} className="card-link">
                            <RestaurantCard resData={item} />
                        </Link>
                        )
                    }
                    </div>
                </div>
            } */}
            {/* <Slider /> */}
            <TopRestaurant Topdata={topRestaurant} />
            <OnlineRestaurant Topdata={topRestaurant} title={onlineRestaurant?.card?.card?.title} />
        </div>
        <div className="cta">
            <img alt="cta" src={menuImage + "portal/m/seo/App_download_banner.png"}/>
        </div>
        <BestPlace brandData={brand} />
        <Footer footerLink={footerLink} footerCity={footerCity} />
      </div>
    )
}
export default Body;