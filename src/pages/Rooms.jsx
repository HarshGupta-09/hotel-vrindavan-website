import React from 'react'
import RoomsHero from '../components/hotelComponents/RoomsHero'
import RoomOverview from "../components/hotelComponents/RoomOverview"
import RoomAmenities from '../components/hotelComponents/RoomAmenities'

const Rooms = () => {
  return (
    <div>
      <RoomsHero/>
      <RoomOverview/>
      <RoomAmenities/>
    </div>
  )
}

export default Rooms
