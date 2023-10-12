import React from 'react'
import Carousel from '../../../components/carousel';

export default function DoandDonts() {
  let slides = [{img:"DSC2472.jpg"},{img:"DSC2948.jpg"},{img:"Mask-Group-2.jpg"}]
  const liStyle = {
    style : "list-decimal flex flex-col space-y-2 text-lg tracking-wide leading-loose text-gray-800 font-sans font-thin"
  }
  return (
    <>
      <Carousel slideimages={slides} autoSlide={true}/>
      <div className='bg-white py-10 grid place-items-center'>
      <div className='text-4xl text-gray-800 py-10'>Do's and Don’ts For Tourism Zone</div>
      <div className='grid grid-cols-12 justify-center px-20 gap-7'>
        <div className='col-span-6'>
          <div className='text-2xl text-gray-800 pb-5'>Do’s:</div>
          <div>
            <ul key={'12'} className={`${liStyle.style}`}>
              <li key={'1'}>Follow the Zones prescribed for each vehicle</li>
              <li key={'2'}>Obey the speed limit (30km/hour)</li>
              <li key={'3'}>Safari vehicle should follow the distance between two vehicle, i.e. 500 meter between two moving vehicle and 50 meter between two standing vehicle while viewing the wildlife.</li>
              <li key={'4'}>Keep noise levels down</li>
              <li key={'5'}>Respect your driver / naturalist’s judgment about your proximity to certain wild animals.</li>
            </ul>
          </div>
        </div>
        <div className='col-span-6'>
          <div className='text-2xl text-gray-800 pb-5'>Don’ts:</div>
          <div>
            <ul key={'13'} className={`${liStyle.style}`}>
              <li key={'6'}>Do not feed the animals</li>
              <li key={'7'}>Do not get out of your vehicle</li>
              <li key={'8'}>Do not drive off the tourism road</li>
              <li key={'9'}>Do not use mobiles and do not create noise while on safari</li>
              <li key={'10'}>Do not tease the animals</li>
              <li key={'11'}>Do not collect any material from the protected area.</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      </>
  )
}
