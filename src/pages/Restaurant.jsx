import React from 'react'
import RestaurantHero from '../components/restaurantComponents/RestaurantHero'
import RestaurantIntro from '../components/restaurantComponents/RestaurantIntro'
import RestaurantMenu from '../components/restaurantComponents/RestaurantMenu'
import DiningOptions from '../components/restaurantComponents/DiningOptions'
import CtaBanner from "../components/homeComponents/CtaBanner"
const Resturant = () => {
  return (
    <div>
      <RestaurantHero/>
      <RestaurantIntro/>
      <RestaurantMenu/>
      <DiningOptions/>
      <CtaBanner/>
    </div>
  )
}

export default Resturant
