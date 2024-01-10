import React, { useEffect, useState } from 'react'
import { MENU_URL, FOOD_URL } from '../utils/constants';
import {useParams} from 'react-router-dom';
import {addItems} from "../utils/cartSlice";
import {useDispatch} from 'react-redux';
const RestaurantMenu = () => {
    const {resid} = useParams();
    const dispatch = useDispatch();
    const [restaurantMenuData, setRestaurantMenuData] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const fetchData = async() =>{
        const data = await fetch(MENU_URL+resid);
        const json = await data.json();  
        setRestaurantMenuData(json?.data?.cards[0]?.card?.card?.info);
        setMenuItems(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    }
    const { costForTwo, name} = restaurantMenuData;
    const handleAddItem = (menu) => {
        //dispatch an action
        dispatch(addItems(menu))
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
        <div className='text-center m-1 p-1 mt-[10%] ml-[25%] mr-[25%]'>
            <div className='font-extrabold'>{name}</div>
            <div>Cost for two:- Rs{costForTwo/100}/-</div>
            <ul>menu:-
                {
                    menuItems?.map((menu)=> 
                    <div className='flex p-2'>
                    <div className='bg-gray-200 hover:bg-opacity-55'>
                        <li key={menu?.card?.info?.id}>{menu?.card?.info?.name} - Rs{menu?.card?.info?.price/100}/- </li>
                    </div>
                    <div className='w-20 h-30 relative'>
                        <button 
                            onClick={()=>handleAddItem(menu)}
                            className='bg-red-800 absolute z-9 text-white ml-4 text-xs p-2 rounded-lg hover:bg-opacity-90'
                        >Add+</button>
                        <img 
                            className='screen-full'
                            src={FOOD_URL + menu?.card?.info?.imageId} 
                            alt="food image"
                        />
                    </div>
                    </div>
                    )
                }
            </ul>
        </div>
  )
}

export default RestaurantMenu