import React from 'react'
import RestaurantHero from '../components/restaurantComponents/RestaurantHero'
import RestaurantIntro from '../components/restaurantComponents/RestaurantIntro'
import RestaurantMenu from '../components/restaurantComponents/RestaurantMenu'

const Resturant = () => {
  return (
    <div>
      <RestaurantHero/>
      <RestaurantIntro/>
      <RestaurantMenu/>
    </div>
  )
}

export default Resturant
