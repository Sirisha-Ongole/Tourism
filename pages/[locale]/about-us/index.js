import { whitney, whitneyCondensed } from "../../../fonts";
import { Card } from "../../../components/Card";
import { IncrementalNumbers } from "../../../components/IncrementalNumbers";
import { SectionTitle } from "../../../components/SectionTitle";
import Carousel from "../../../components/carousel";
import Link from '../../../components/Link';
import React from "react";

const AboutUs = () => {
  let slides = [
    { img: "DSC2472.jpg" },
    { img: "DSC2948.jpg" },
    { img: "Mask-Group-2.jpg" },
  ];

  return (
    <div>
      <Carousel slideimages={slides} autoSlide={true} />
      <SectionTitle text="Nagarahole Tiger Reserve" />
      <div
        className={`${whitney.className} w-3/4 text-base mx-auto text-center `}
      >
        <p className="">
          “Nagarahole Tiger Reserve” previously known as Rajiv Gandhi National
          Park is named after the stream ‘Nagarahole’ which literally means
          serpent stream (Nagara – serpent, hole – stream) in Kannada language.
          The protected area is located in both the districts of Mysuru and
          Kodagu with an area of 847.981 sq.km (core – 643.392 sq.km and
          buffer-204.589 sq.km ) <br /> <br /> The Kabini and Taraka reservoirs
          are large waterbodies located towards the west and south eastern parts
          of the park respectively.
          <br /> <br /> Nagarahole is contiguous with Wayanad wildlife sanctuary
          (Kerala) to the south and Bandipur Tiger Reserve to its south eastern
          parts. These forests of Malenad landscape in the western ghats support
          large assembles of carnivores and herbivores: Tiger
          <i> (Panthera tigris)</i>, Leopard <i>(Panthera pardus)</i>, Asiatic
          Wild Dog (Cuon alpinus), Sloth Bear (<i>Melursus ursinus</i>), Asiatic
          Elephant (<i>Elephas maximus</i>), Gaur (<i>Bos gaurus</i>), Sambar (
          <i>Rusa unicolor</i>), Chital (<i>Axis axis</i>), Muntjac(
          <i>Muntiacus muntjak</i>) , Four Horned Antelope (
          <i>Tetracerus quadricornis</i>), Wild Pig (<i>Sus scrofa</i>), Mouse
          Deer (<i>Moschiola indica</i>) and South-western langur (
          <i>Semnopithecus hypoleucos</i>).
        </p>{" "}
        <SectionTitle text="Location of Nagarahole Tiger Reserve" />
        <img
          src="/images/Map-scaled.jpg"
          alt="map"
          className=" mx-auto mr-24 mb-16"
        />
        <div className="grid grid-cols-3 gap">
          <img
            src="/images/DS.jpeg"
            alt="map"
            className=" mx-auto col-span-2 pr-20"
          />
          <div>
            <SectionTitle
              text="Nagarahole Tiger Conservation Foundation"
              appendStyles={true}
              styles={"mt-0 text-left"}
            />
            <p className="text-left">
              The section 38-X if wildlife (protection) act 1972 (WLP amendment
              act, no. 39 of 2006) states that the state government shall
              establish a tiger conservation foundation for tiger reserves
              within the state in order to facilitate and support their
              management for conservation of tiger and biodiversity and to take
              initiatives in eco-development by involvement of people in such
              development process.
            </p>
            <button
              className={`${whitneyCondensed.className} bg-black text-white rounded flex items-start px-6 py-2 mt-8`}
            >
              KNOW MORE
            </button>
          </div>
        </div>
        <SectionTitle text={"Nagarahole Pledge"} />
        <p className="w-3/4 mx-auto mb-20">
          We pledge to preserve an exceptional heritage, promote its wealth,
          both to locals and tourists. Relying on the vital forces of the
          territory, it promotes harmonious economic and social development that
          respects natural and human balances. A Regional Nature Park endeavors
          to manage its spaces in a harmonious way, to maintain the biological
          diversity of its environments, to preserve and enhance its natural
          resources, its landscapes, its remarkable and fragile sites, to
          enhance and boost its heritage and culture.
        </p>
        <SectionTitle text="Biodiversity" />
        <SectionTitle
          text="Nagarahole Tiger Reserve has over 300 species of flora and fauna"
          styles={"mt-2 mb-12"}
        />
        {biodiversityData.map((item, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 ">
            <div className="text-2xl font-bold my-auto p-2.5">{item.type}</div>
            <div className="col-span-3">
              <div className="grid grid-cols-3">
                {item.subTypes.map((subItem, index) => (
                  <div key={index}>
                    <IncrementalNumbers max={subItem.count} />
                    <div className="text-lg font-bold mb-12">
                      {subItem.type}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="grid grid-cols-3 gap-4 ">
          {otherAttractions.map((item, index) => (
            <Card data={item} key={index} />
          ))}
        </div>
        <Link href="/explore-nagarahole/">
          <button className="bg-black text-white rounded flex items-start px-6 py-2 mt-8 mx-auto tracking-tighter mb-8">
            EXPLORE MORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;

const biodiversityData = [
  {
    type: "Flora",
    subTypes: [
      { count: 182, type: "Trees" },
      { count: 18, type: "Grass" },
    ],
  },
  {
    type: "Fauna",
    subTypes: [
      { count: 32, type: "Mammals" },
      { count: 270, type: "Avifauna" },
      { count: 167, type: "Butterflies" },
    ],
  },
  {
    type: "Reptiles",
    subTypes: [
      { count: 31, type: "Snakes" },
      { count: 1, type: "Crocodiles" },
      { count: 1, type: "Pond terrapin" },
      { count: 13, type: "Amphibians" },
      { count: 9, type: "Fishes" },
    ],
  },
];

const otherAttractions = [
  {
    title: "Iruppu Falls",
    image: "Mask-Group-44@2x-768x484.png",
    text: "The Iruppu Falls is located in the Brahmagiri Range in the Kodagu district of Karnataka, India, bordering the Wayanad district of Kerala.",
    link: { name: "Distance: 16 km" },
  },
  {
    title: "Mruthyunjaya Swami Temple",
    image: "Mask-Group-113.png",
    text: "Sri Mruthyunjaya Swami Temple is a Lord Shiva temple located at small village named Badagarakeri in Virajpet Taluk. ",
    link: { name: "Distance: 18 km" },
  },
  {
    title: "Thiruneli Vishnu Temple",
    image: "Mask-Group-100.png",
    text: "It is an ancient temple dedicated to Lord Maha Vishnu on the side of Brahmagiri hill in Kerala, near the border with Karnataka state. ",
    link: { name: "Distance: 26 km" },
  },
];
