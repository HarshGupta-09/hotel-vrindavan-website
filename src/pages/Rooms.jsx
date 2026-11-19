import React from 'react'
import RoomsHero from '../components/roomsComponents/RoomsHero'
import RoomOverview from "../components/roomsComponents/RoomOverview"
import RoomAmenities from '../components/roomsComponents/RoomAmenities'
import RoomGallery from '../components/roomsComponents/RoomGallery'
import RoomFacilities from '../components/roomsComponents/RoomFacilities'
import RoomLocation from '../components/roomsComponents/RoomLocation'
import CtaBanner from "../components/homeComponents/CtaBanner"

const Rooms = () => {
  return (
    <div>
      <RoomsHero/>
      <RoomOverview/>
      <RoomAmenities/>
      <RoomGallery/>
      <RoomFacilities/>
      <RoomLocation/>
      <CtaBanner/>
    </div>
  )
}

export default Rooms
