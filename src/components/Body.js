import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import RestaurantCard, {withPromotedLabel} from './RestaurantCard'
const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredResList, setFilteredResList] = useState([]);
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const searchBtnClicked = () => {
        let filteredRes = restaurantList.filter((rest)=> rest?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredResList(filteredRes);
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
      <div className='ml-5 mt-5'>
      <input
        className='bg-gray-100 border-2 border-solid border-black-800 rounded-lg hover:cursor-pointer'
        type='text'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button 
        className='bg-red-500 p-1 rounded-lg m-2 hover:bg-opacity-50 '
        onClick={searchBtnClicked}
      >
        search
      </button>
      </div>
      <div className='flex flex-wrap'>
        {
            filteredResList.map((restaurant)=>
            (
                <Link
                    to={"/restaurantmenu/"+restaurant?.info?.id}
                    key={restaurant?.info?.id}
                >
                {
                    restaurant?.info?.avgRating >= 4.6 
                    ?
                   <RestaurantCardPromoted 
                        
                        resData={restaurant}
                    />
                    :
                    <RestaurantCard 
                        className='overflow-auto absolute'
                        key={restaurant?.info?.id}
                        resData={restaurant}
                    />    
                }
                </Link>
                
            )
                
            )
        }
      </div>
    </div>
  )
}

export default Body
