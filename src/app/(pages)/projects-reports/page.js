import React from 'react'
import Carousel from '../../../components/carousel';
import { TextImgGrid } from '@/components/TextImgGrid';
import Link from 'next/link';

export default function projectReports() {
  let slides = [{img:"DSC2472.jpg"},{img:"DSC2948.jpg"},{img:"Mask-Group-2.jpg"}]
  return (
    <>
    <Carousel slideimages={slides} autoSlide={true}/>
    <div className='w-1/2 mx-auto py-3'>      
      <div className='grid grid-cols-12 justify-center'>
        <div className='col-span-3 w-full'>
          <Link href="https://online.fliphtml5.com/tuaau/lzgs/" target="_blank"
            rel="noopener noreferrer"><button className='bg-[#D0AD59] text-white px-5 py-2'>Birds Brochure</button></Link>
        </div>
        <div className='col-span-3 w-full'>
          <Link href="https://online.fliphtml5.com/tuaau/wquw/" target="_blank"
            rel="noopener noreferrer"><button className='bg-[#D0AD59] text-white px-5 py-2'>Butterfly Brochure</button></Link>
        </div>
        <div className='col-span-3 w-full'>
          <Link href="https://online.fliphtml5.com/tuaau/xtcv/" target="_blank"
            rel="noopener noreferrer"><button className='bg-[#D0AD59] text-white px-5 py-2'>Mammals Brochure</button></Link>
        </div>
        <div className='col-span-3 w-full'>
          <Link target="_blank"
            rel="noopener noreferrer" href="https://drive.google.com/file/d/1eRh2X1HwF8dsiNn5fySTu0McOB3L7fWN/view?usp=sharing"><button className='bg-[#D0AD59] text-white px-5 py-2'>CORE</button></Link>
        </div>
      </div>
      </div>
    <div className='grid'>
      {pageData.map((data,index) => (<>
      <TextImgGrid key={index} data={data} ImagePosition={data.ImagePosition}/>
      </>)
      )}
    </div>
    </>
  )
}
const pageData = [
  {
    ImagePosition : "right",
    img : "Eco-Tourism.jpg",
    alt : "Eco-Tourism",
    heading : "Eco Tourism",
    p1 : "Eco-tourism is emerging as an important component of tourism industry and it is clearly distinctive from “mass tourism”, having sustainable ,equitable, community based effort for improving the living standards of local, host communities living on the fringes of tiger reserve.",
    p2 : "At Nagarahole tiger reserve, Eco-tourism activity is being carried out in two different zones, One at Nagarahole wildlife range (called Nagarahole tourism zone) and other at D.B. Kuppe – Antharasanthe wildlife ranges (Sunkadakatte tourism zone). The total tourism area spreads across 10 beats (6 beats in Antharasanthe wildlife range and 2 beats each in D.B. Kuppe and Nagarahole wildlife range respectively). The total area allotted for the tourism zone is around 62.90 sq.km. (50.50 sq.km in Sunkadakatte tourism zone and 12.40 sq.km in Nagarahole zone) which is 9.7% of total area of tiger reserve."
  },
  {
    ImagePosition : "left",
    img : "Eco-Tourism.jpg",
    alt : "Project Tiger",
    heading : "Project Tiger",
    p1 : "The government of India has taken a pioneering initiative for conserving its national animal, the TIGER by launching the “Project Tiger” in 1973. Nagarahole was a part of Bandipur Tiger Reserve which was one among the nine Tiger Reserve launched under Project Tiger in 1973.",
    p2 : "In 2007, Nagarahole Tiger Reserve was declared as an independent tiger reserve based on tiger conservation project, the Nagarahole is constituted on a core/buffer strategy. The core area has the legal status of National Park, where as the buffer or peripheral areas is comprising of forest land, managed as a multiple use area. The project tiger aims to foster an exclusive tiger agenda in the core areas of tiger reserves, with an inclusive people oriented agenda in the buffer"
  },
  {
    ImagePosition : "right",
    img : "Eco-Tourism.jpg",
    alt : "Tribal Rehabilitation",
    heading : "Tribal Rehabilitation",
    p1 : "Nagarahole is a home to 45 tribal Settlements locally known as “Haadis” having 1703 families with a population of 6579 Nos belonging to Jenukuruba, Bettakuruba , Yerava and Soliga Communities. For the Tribals residing inside the forest over decades central and state government has conceptualized rehabilitation project to sync with the current financial, educational and technical scenario.",
    p2 : "Tribals residing in the NTR have been voluntarily rehabilitated to Nagapura, Sheetihally-Lakpatna, Sollepura and Masthigudi rehabilitation centre , which is now famed as eminent and Model rehabilitation centres respectively."
  },
]
