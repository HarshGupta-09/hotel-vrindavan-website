import React from 'react'
import GalleryHero from '../components/galleryComponents/galleryHero'
import GalleryGrid from '../components/galleryComponents/GalleryGrid'
import CtaBanner from '../components/homeComponents/CtaBanner'

const Gallery = () => {
  return (
    <div>
      <GalleryHero/>
      <GalleryGrid/>
      <CtaBanner/>

    </div>
  )
}

export default Gallery
