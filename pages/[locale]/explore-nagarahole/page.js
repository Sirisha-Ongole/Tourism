import React from 'react'
import Carousel from "../../../components/carousel";
import { TextOverImg } from "../../../components/TextOverImg";

export default function explorenagarhole() {
  let slides = [{img:"DSC2472.jpg"},{img:"DSC2948.jpg"},{img:"Mask-Group-2.jpg"}]
  return (
    <>
    <Carousel slideimages={slides} autoSlide={true}/>
    <div className='grid text-center'>
    <div className="text-4xl text-center pt-20">Explore Nagarahole</div>
    </div>
    <div className='grid gap-3'>
    {pageData.map((data,index) => (<>
    <TextOverImg key={index} data={data} gridPosition={data.gridPosition}/>
    </>)
    )}
      </div>
    </> 
  )
}
const pageData = [
{
  gridPosition: "right",
  img: "iruppu-falls-1-2048x880.jpg",
  alt : "Image of Iruppu Falls",
  heading : "Iruppu Falls",
  body : "The Iruppu Falls is located in the Brahmagiri Range in the Kodagu district of Karnataka, India, bordering the Wayanad district of Kerala.It is a fresh water cascade and is situated at a distance of 48 km from Virajpet on the highway to Nagarhole.",
  ending : "Distance: 16 km"
},
{
  gridPosition: "left",
  img: "iruppu-falls-1-2048x880.jpg",
  alt : "Mruthyunjaya Swami Temple",
  heading : "Mruthyunjaya Swami Temple",
  body : "Sri Mruthyunjaya Swami Temple is located in small village named Badagarakeri in Virajpet Taluk. ",
  ending : "Distance : 18km"
},
{
  gridPosition: "right",
  img: "iruppu-falls-1-2048x880.jpg",
  alt : "Thiruneli Vishnu Temple",
  heading : "Thiruneli Vishnu Temple",
  body : "Thirunelli Temple is an ancient temple dedicated to Lord Maha Vishnu on the side of Brahmagiri hill in Kerala, near the border with Karnataka state. The temple is located in valley surrounded by mountains and beautiful forests.",
  ending : "Distance : 26km"
},
{
  gridPosition: "left",
  img: "iruppu-falls-1-2048x880.jpg",
  alt : "Tea Estate Landscape",
  heading : "Tea Estate Landscape",
  body : "The tea gardens are spread over around 1,200 acres of land and in that capacity can yield unlimited hours of walking in the midst of such rich greenery combined with fresh mountain air and silence broken by such winged animals as the Malabar whistling thrush and Malabar hornbill.",
  ending : "Distance : 14km"
},
{
  gridPosition: "right",
  img: "iruppu-falls-1-2048x880.jpg",
  alt : "Wayanad Wildlife Sanctuary Tholpetty Safari Point",
  heading : "Wayanad Wildlife Sanctuary Tholpetty Safari Point",
  body : "The Wayanad Wildlife Sanctuary is bestowed with lush green forests and rich wildlife.This wildlife area houses some of the rare and endangered species of both flora and fauna.",
  ending : "Distance : 15km"
},
{
  gridPosition: "left",
  img: "iruppu-falls-1-2048x880.jpg",
  alt : "Kabini Dam",
  heading : "Kabini Dam",
  body : "The Kabini dam is built on the River Kapila in the district of Mysore. The dam is 696 meters in length and was built in 1974.The dam is spread over an area of 55 hectares covering forests, rivers, lakes and valleys.",
  ending : "Distance : 15km"
},
{
  gridPosition: "right",
  img: "iruppu-falls-1-2048x880.jpg",
  alt : "Chikkadevammana Betta",
  heading : "Chikkadevammana Betta",
  body : "Chikkadevvamma Hill is a sacred place situated at Kundur Village in the Mysore district of Karnataka State.There is a temple on the hilltop and is dedicated to Goddess Chikka Devamma.The hill is also surrounded by forest so one can find elephants, leopards, deers, and other animals here.",
  ending : "Distance : 35km"
},

]

