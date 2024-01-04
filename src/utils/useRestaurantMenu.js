import { useEffect, useState } from "react";
import { REST_MENU_URL } from "./Constant";

const useRestaurantMenu = (restId) => {
    const [restInfo, setRestInfo] = useState(null);
    useEffect( () => {
        fetchRestData();
    }, []);// eslint-disable-line react-hooks/exhaustive-deps
    console.log("restId1", restId)
    const newUrl = REST_MENU_URL+restId;
    console.log("url", newUrl)
    const fetchRestData = async () => {
        const data = await fetch(newUrl);
        const json = await data.json();
        setRestInfo(json?.data);
    }; 
    
    return restInfo;
}

export default useRestaurantMenu