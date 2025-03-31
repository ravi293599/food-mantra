import { useEffect, useState } from "react";
import { restaurantDetails } from "./mockData"

const useRestaurantMenu = (resId) =>{
    const [resInfo,setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    },[])
    const fetchData = async () =>{
        const data = await fetch(restaurantDetails + resId);
        const json = await data.json();
        const restData = json?.data;
        setResInfo(restData);
    }
    return resInfo;
}
export default useRestaurantMenu