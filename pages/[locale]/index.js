import React from "react";
import { whitney } from "../../fonts";
import Link from "../../components/Link";
import Image from "next/image";
import { SectionTitle } from "../../components/SectionTitle";
import { Card } from "../../components/Card";
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';
export default function Home() {
  let slides = [
    { img: "DSC2472.jpg" },
    { img: "DSC2948.jpg" },
    { img: "Mask-Group-2.jpg" },
  ];
  return (
    <div className={`${whitney.className} `}>
      <div className="overflow-hidden">
        <div className="relative h-0 pb-[37.8571%]">
          <video
            className="w-full  object-initial -mb-24"
            autoPlay
            loop
            playsInline
            controlsList="nodownload"
            src="/videos/New-Medium-Length-July-14.mp4"
          ></video>
        </div>
      </div>
      <div className="items-center bg-white pb-1">
        <p className="flex justify-center items-center text-2xl font-medium p-4">
          Book your trip here
        </p>
        <button
          href="https://tickets.nagaraholetigerreserve.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center bg-black text-white rounded px-6 py-2 mx-auto mb-8 font-thin uppercase"
        >
          <Link
            href="https://tickets.nagaraholetigerreserve.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now
          </Link>
        </button>
      </div>

      <div className="">
        <SectionTitle text="Welcome to Nagarahole" />

        {/* Grid with two columns and center border */}
        <div className="grid grid-cols-2 gap-4 text-lg font-extralight text-center leading-8 mb-16">
          <p className="flex justify-center items-center border-r border-black p-14 ">
            Nagarahole Tiger Reserve previously known as Rajiv Gandhi
            (Nagarahole) National Park, was named after the river ‘Nagarahole’
            which literally means ‘Serpent River’ (Nagara=Serpent; Hole=River)
            in Kannada language
          </p>
          <p className="flex justify-center items-center p-14 ">
            Nagarahole tiger reserve forms a critical connecting habitat for
            tigers and elephants to other areas of Western Ghats through
            Brahmagiri wildlife sanctuary and to the Eastern Ghats through
            Bandipur Tiger reserve.
          </p>
        </div>
      </div>
      <div className="">
        <SectionTitle text="About Nagarahole" />

        <p className="flex justify-center items-center w-5/6 mx-auto text-center text-lg">
          Nagarahole, spread over Mysore and Kodagu is covering an area of
          847.981 Sq km. <br />
          <br />
          Nagarahole is an important Tiger Reserve in Karnataka and is a major
          hub of conservation under Project Tiger and Project Elephant. The
          Protected Area supports large assemblages of carnivores and
          herbivores: Tiger, Leopard, Asiatic wild dog and Sloth bear, Asiatic
          Elephant, Gaur, Sambar, Chital, Muntjac, Four horned antelope, Wild
          pig, Mouse deer and South-western langur. <br />
          <br />
          Nagarahole is contiguous with Wayanad Wildlife Sanctuary (Kerala) to
          its south and Bandipur Tiger Reserve to its southeastern parts. The
          park has a good number of streams and rivulets. The Kabini and Taraka
          reservoirs are large water bodies located towards the west and
          southeastern parts of the park respectively. <br />
          <br />
          Nagarahole is acclaimed as one of the high-density tiger populations
          in the country after Corbett & Kaziranga tiger reserves respectively.
          It comprises of some amazing landscapes and marvelous streams that
          swerve around like a snake, leaving the wildlife enthusiasts and the
          visitors astonishing with its natural beauty. <br />
          <br />
          Nagarahole Tiger Reserve also creates an opportunity for bird
          enthusiasts with its amazing variety of birds, which frequent this
          place, as regularly as the enthusiasts. <br />
          <br />
        </p>

        <Link href="/about-us">
          <p className="flex justify-center items-center mx-auto text-sm font-bold mb-16">
            KNOW MORE ABOUT US{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </p>
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-4 w-3/4 mx-auto h-[500px] mb-20">
        {/* <div className="bg-[url('/images/Mask-Group-37@2x-1.png')]  object-cover"></div>
          <div className="bg-[url('/images/Mask-Group-38@2x-1024x639.png')]"></div> */}
        {/* Convert above two to <img>> */}
        <img
          src="/images/Mask-Group-37@2x-1.png"
          className=" col-span-2 h-[500px]"
        />
        <img
          src="/images/Mask-Group-38@2x-1024x639.png"
          className=" col-span-4  h-[500px]"
        />
      </div>
      <div className="font-thin w-3/4 mx-auto mb-16">
        <SectionTitle text="History" />
        <p className="">
          Nagarahole Tiger Reserve had a long march since 1955, before it
          attained the present-day status of tiger reserve under the Wild Life
          (Protection) Act, 1972. Historically in 1955, around 285 sq km area of
          forest under then Coorg state was declared as{" "}
          <Textbold text="Wildlife Sanctuary" />. Government upgraded the
          Sanctuary into a National Park by extending over an area of 571.55 Sq
          Km in 1983. In the year 1986, Nagarahole National Park along with
          Bandipur Tiger Reserve was included as a part of the{" "}
          <Textbold text="‘Nilgiri Biosphere Reserve’" />.
        </p>
        <br />
        <p>
          In recognition of its good number of elephant population, Nagarahole
          National Park was included under{" "}
          <Textbold text="‘Project Elephant’" /> in 2000 and it was constituted
          as part of <Textbold text="‘Mysore Elephant Reserve’" />. In 2003, an
          area of 71.84 Sq Km was added to make it as 643.392 Sq Km area
          National Park.
        </p>
        <br />
        <p>
          In 2003, Nagarahole National Park attained the status of tiger reserve
          by including Nagarahole under <Textbold text="‘Project Tiger’" /> and
          made it as an extension of Bandipur Tiger Reserve. Later in 2007,
          Nagarahole was declared as an independent Tiger Reserve by notifying
          around 643.392 Sq Km area as{" "}
          <Textbold text="Core/Critical Tiger Habitat" />.
        </p>
        <br />
        <p>
          Finally, in 2012, Government of Karnataka has notified an area of
          204.589 Sq Km as Buffer Zone (Notified Forests) of Nagarahole Tiger
          Reserve expanding the total area of Tiger Reserve administration to
          847.981 Sq km.
        </p>
      </div>
      <SectionTitle text="Gallery" />
      <div className="grid grid-cols-3 gap-4 w-5/6 mx-auto mb-16">
        {[
          {
            title: "CARNIVORES",
            image: "Mask-Group-44@2x-768x484.png",
            link: { name: "DISCOVER MORE", href: "/gallery" },
          },
          {
            title: "HERBIVORES",
            image: "Mask-Group-113.png",
            link: { name: "DISCOVER MORE", href: "/gallery" },
          },
          {
            title: "BIRDS",
            image: "Mask-Group-100.png",
            link: { name: "DISCOVER MORE", href: "/gallery" },
          },
        ].map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
    </div>
  );
}

const Textbold = ({ text }) => {
  return <span className="font-semibold">{text}</span>;
};

const getStaticProps = makeStaticProps([ 'header'])
export { getStaticPaths, getStaticProps }

