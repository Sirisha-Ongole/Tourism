import React from 'react'
import Carousel from '../../../components/carousel';
import {whitney} from '../../../fonts';
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";

export default function refundandCacellation() {
  let slides = [{img:"DSC2472.jpg"},{img:"DSC2948.jpg"},{img:"Mask-Group-2.jpg"}]
  const liStyle = {
    style : "list-decimal flex flex-col space-y-2 text-lg tracking-wide leading-loose text-gray-800 font-sans font-thin"
  }
  return (
    <>
    <Carousel slideimages={slides} autoSlide={true}/>
    <div className='bg-white'>
      <div className={`text-2xl font-bold text-center pt-20 ${whitney.className}`}>Refund / Cancellation Policy</div>
      <div className='mx-auto px-20 pt-5 pb-20 w-4/5'>
        <ol key={1} className={`${liStyle.style}`}>
          <li key={1}>Cancellation before 48 hours check-in time 50% will be deducted for room booking.</li>
          <li key={2}>Cancellation before 24 hours check-in time 75% will be deducted for room booking.</li>
          <li key={3}>Check in 11.00AM and Check Out 11.00AM. </li>
          <li key={4}>Any other cancellation no refunds.</li>
          <li key={5}>No cancellation for safari tickets.</li>
          <li key={6}>Rescheduling of room booking as well as safari will not be allowed.</li>
        </ol>
      </div>
    </div>
    </>
  )
}

const getStaticProps = makeStaticProps(["header", "footer", "dos-and-donts"]);
export { getStaticPaths, getStaticProps };