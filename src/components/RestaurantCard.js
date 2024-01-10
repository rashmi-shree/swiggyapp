import React from 'react';
import { FOOD_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,avgRatingString,cloudinaryImageId, costForTwo
    } = resData?.info;
  return (
    <div className='w-40 h-60 m-5 bg-gray-200 hover:border-2 border-solid border-black-800 cursor-pointer'>
        <div className='w-40 h-20 p-1'>
        <img className='size-full' 
            src={FOOD_URL + cloudinaryImageId} 
            alt='food image' 
        />
        </div>
        <div>
            <div>{name}</div>
            <div>name</div>
            <div>{avgRatingString}</div>
            <div>{costForTwo}</div>
        </div>
    </div>
  )
}

export const withPromotedLabel = (RestaurantCard) => {
    return(props)=>{
        return(
            <div className='relative'>
                <label className='bg-red-800 p-2 absolute z-9 ml-4 rounded-lg '>promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;