/* eslint-disable array-callback-return */
import React, {useEffect, useState} from 'react';
import RestCard, {withPromotedLabel} from './RestCard';
import { Link } from 'react-router-dom';

const SwiggyClone = () => {

  const [resInfo, setResInfo] = useState([]);
  const [resListInfo, setReslistInfo] = useState([]);
  const [searchText, setSearchText] = useState("");
  const restaurantPromotedCard = withPromotedLabel(RestCard)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6308922&lng=73.7691138&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // console.log("Cosl",json.data);
    setResInfo(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setReslistInfo(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return (
    <div className="container mt-3">
      <div className='row mb-2'>
        <input className="form-control col-md-4" type="search" value={searchText} onChange={(e) => {
          setSearchText(e.target.value)
        }} placeholder="Search" aria-label="Search" />
        <button className="btn btn-success col-md-2 my-2 my-sm-0 ml-2" type="submit"
        onClick={ () =>{
          const filteredRestaurant = resInfo.filter((res) => 
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setReslistInfo(filteredRestaurant);
        }} >Search</button>
        <button className="btn btn-dark col-md-2 my-2 my-sm-0 ml-2" type="submit"
         onClick={() => {
          const filteredRestaurant = resInfo?.filter(restaurant => restaurant?.info?.avgRating >= 4)
          setReslistInfo(filteredRestaurant)
         }}>Top Rated Restaurant</button>
      </div>
      <div className='row'>
        {
          resListInfo.map((restaurant) => (
            <div key={restaurant.info.id} className='col-md-3 p-2'>
              <Link to={"/restaurant/"+restaurant.info.id} className='text-decoration-none'>
                {
                  restaurant.info.promoted ? ( <restaurantPromotedCard restData={restaurant.info} /> ):(<RestCard restData={restaurant.info} />) 
                }
                {/* <RestCard /> */}
              </Link>
            </div>
          ))
        }
       </div>
    </div>
  );
}
  
export default SwiggyClone;