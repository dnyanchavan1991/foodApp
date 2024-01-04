import { useState, useEffect } from "react";  
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { REST_MENU_URL } from "../utils/Constant";
const RestaurantMenu = () => {
    const {restId} = useParams(); 
    const [resInfo, setResInfo] = useState([]);
    const [showIndex, setShowIndex] = useState(0);
    const [resCategoryListInfo, setResCategorylistInfo] = useState([]);
    useEffect( () => {
        fetchRestData();
    }, []);
    console.log('rest info', resInfo)
    const fetchRestData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.6308922&lng=73.7691138&restaurantId=" + restId);

        const json = await data.json();
        setResInfo(json.data?.cards[0]?.card?.card?.info);
        setResCategorylistInfo(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.['card']?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
        // setResItemInfo(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    }; 

    return(
        <div className="restaurantMenu">
            <div className="container position-relative">
                <div className="pt-3 text-black ">
                    <div className="w-50 d-inline-block">
                    <h2 className="font-weight-bold">{resInfo?.name}</h2>
                    <p className="text-black m-0 text-muted">{resInfo.cuisines && resInfo.cuisines.join(',')}</p>
                    <p className="text-black m-0"> {resInfo?.areaName}, {resInfo?.city}</p>
                    </div>
                    <div className="d-inline-block mt-2 w-25 float-right text-right ">
                        <ul className="rating-stars pb-2 list-unstyled border-3 border-bottom">
                            <li className="font-weight-bold"><i className="mdi mdi-star text-success mx-3"></i>{resInfo?.avgRatingString}</li>
                        </ul>
                        <p className="label-rating text-black ml-2 small"> ({resInfo?.totalRatingsString} )</p>
                    </div>
                </div>
                <div className="pb-4 border-top mt-3">
                    <div className="row mt-3">
                        <div className="col-6 col-md-3">
                            <p className="text-black-50 font-weight-bold m-0 small">Delivery</p>
                            <p className="text-black m-0">{resInfo?.feeDetails.message}</p>
                        </div>
                        <div className="col-6 col-md-2">
                            <p className="text-black-50 font-weight-bold m-0 small">Cost</p>
                            <p className="text-black m-0">{resInfo?.costForTwoMessage}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        resCategoryListInfo.map((category, index) => (
                            <RestaurantCategory
                             key={category.card.card.title}
                             data={category.card.card} 
                             showItems={index === showIndex ? true : false } 
                             setShowIndex={() => setShowIndex(index)} 
                             />
                        ))
                    }
                </div>
                
            </div>        
        </div>
    )
}

export default RestaurantMenu