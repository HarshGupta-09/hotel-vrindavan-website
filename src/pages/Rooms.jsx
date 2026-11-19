import React from 'react'
import RoomsHero from '../components/roomsComponents/RoomsHero'
import RoomOverview from "../components/roomsComponents/RoomOverview"
import RoomAmenities from '../components/roomsComponents/RoomAmenities'
import RoomGallery from '../components/roomsComponents/RoomGallery'

const Rooms = () => {
  return (
    <div>
      <RoomsHero/>
      <RoomOverview/>
      <RoomAmenities/>
      <RoomGallery/>
    </div>
  )
}

export default Rooms
