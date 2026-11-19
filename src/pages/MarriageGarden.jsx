import React from 'react'
import MarriageGardenHero from '../components/marraigeGardenComponents/MarriageGardenHero'
import MarriageGardenVenue from '../components/marraigeGardenComponents/MarriageGardenVenue'
import MarriageGardenSettings from '../components/marraigeGardenComponents/MarriageGardenSettings'
import MarriageGardenGallery from '../components/marraigeGardenComponents/MarriageGardenGallery'
import MarriageGardenServices from '../components/marraigeGardenComponents/MarriageGardenServices'
import MarriageGardenPricing from '../components/marraigeGardenComponents/MarriageGardenPricing'
import CtaBanner from "../components/homeComponents/CtaBanner"
const MarriageGarden = () => {
  return (
    <div>
      <MarriageGardenHero/>
      <MarriageGardenVenue/>
      <MarriageGardenSettings/>
      <MarriageGardenServices/>
      <MarriageGardenGallery/>
      <MarriageGardenPricing/>
      <CtaBanner/>
    </div>
  )
}

export default MarriageGarden
