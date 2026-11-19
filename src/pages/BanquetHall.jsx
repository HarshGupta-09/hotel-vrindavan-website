import React from 'react'
import BanquetHallHero from '../components/banquetHallComponents/BanquetHallHero'
import BanquetHallOverview from '../components/banquetHallComponents/BanquetHallOverview'
import BanquetHallGallery from '../components/banquetHallComponents/BanquetHallGallery'
import BanquetHallEvents from '../components/banquetHallComponents/BanquetHallEvents'
import BanquetHallPricing from '../components/banquetHallComponents/BanquetHallPricing'

const BanquetHall = () => {
  return (
    <div>
      <BanquetHallHero/>
      <BanquetHallOverview/>
      <BanquetHallGallery/>
      <BanquetHallEvents/>
      <BanquetHallPricing/>
    </div>
  )
}

export default BanquetHall
