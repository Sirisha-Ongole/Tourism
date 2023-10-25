import Image from "next/image";
import Carousel from "../../../components/carousel";
import { whitney, inter } from "../../../fonts";

export default function volunter() {
  let slides = [
    { img: "Mask-Group-35@2x-1.png" },
    { img: "DSC0471.jpeg" },
    { img: "Mask-Group-43@2x-2.png" },
  ];
  let inputStyle = {
    style:
      "bg-transparent placeholder:text-gray-500 block w-full border-b-2 border-gray-600 py-2 focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-200 text-sm lg:text-base font-sans",
  };
  return (
    <>
      <Carousel slideimages={slides} autoSlide={true} />
      <div
        className={`grid md:grid-cols-12 grid-cols-12 mx-auto w-3/4 py-20 ${whitney.className}`}
      >
        <div className="lg:col-span-4 md:col-span-5 col-span-12">
          <h4 className=" text-sm lg:text-4xl md:text-xl py-2">
            Willing to Volunteer ?
          </h4>
        </div>
        <div className="lg:col-span-6 md:col-span-5 col-span-12">
          <form className="px-10">
            <div className="lg:text-xl text-black py-4 text-sm">
              Please fill the form below
            </div>
            <div className="grid grid-rows-4 gap-9">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className={inputStyle.style}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className={inputStyle.style}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className={inputStyle.style}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Project you would like to volunteer"
                  className={inputStyle.style}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="How would you would like to volunteer"
                  className={inputStyle.style}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="bg-black text-center text-white cursor-pointer uppercase w-full px-2 py-2"
                >
                  Submit Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
