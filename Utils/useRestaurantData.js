import { useEffect, useState } from "react";
import { restaurantDetails } from "./mockData"
// import fetch from "node-fetch";

const useRestaurantData = (resId) =>{
    const [resDetails,setResDetails] = useState(null);
    useEffect(() => {
        fetchData();
    },[])
    const fetchData = async () =>{
        // const data = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1685786&lng=79.9338798&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.1685786&lng=79.9338798&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setResDetails(json)
    }
    return resDetails;
}
export default useRestaurantData