 import Image from 'next/image'
 import Carousel from '../../../components/carousel';


export default function newsEvents() {
  let slides = [{img:"DSC2472.jpg"},{img:"DSC2948.jpg"},{img:"Mask-Group-2.jpg"}]
  return (
    <Carousel slideimages={slides}/>
  )
}
