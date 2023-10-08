import React from 'react'
import Carousel from '../components/carousel';



export default function Home() {
  let slides = [{img:"DSC2472.jpg"},{img:"DSC2948.jpg"},{img:"Mask-Group-2.jpg"}]
  return (
    <div className='min-h-screen'>
      <Carousel slideimages={slides}/>
    </div>
  )
}
