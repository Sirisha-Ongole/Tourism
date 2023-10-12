 import Image from 'next/image'
 import Carousel from '../../../components/carousel';

export default function volunter() {
  let slides = [{img:"DSC2472.jpg"},{img:"DSC2948.jpg"},{img:"Mask-Group-2.jpg"}]
  let inputStyle = {
    style: "placeholder:text-gray-600 block w-full border-b-2 border-gray-600 py-2 focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-100 sm:text-m"
  }
  return (
    <>
    <Carousel slideimages={slides} autoSlide={true}/>
      <div className='grid md:grid-cols-12 grid-cols-12 mx-auto w-3/4 py-20 '>
        <div className='col-span-4'>
          <h4 className='px-10 text-3xl'>Willing to Volunteer ?</h4>
        </div>
        <div className='col-span-6'>
          <form className='px-10'>
          <div className="grid grid-rows-4 gap-9">
            <div className='text-xl text-black'>
            Please fill the form below
            </div>
            <div>
          <input type="text" placeholder="Name" className={inputStyle.style}/>
          </div>
          <div>
          <input type="text" placeholder="Email" className={inputStyle.style}/>
          </div>
          <div>
          <input type="text" placeholder="Mobile Number" className={inputStyle.style}/>
          </div>
          <div>
          <input type="text" placeholder="Project you would like to volunteer" className={inputStyle.style}/>
          </div>
          <div>
          <input type="text" placeholder="How would you would like to volunteer" className={inputStyle.style}/>
          </div>
          <div>
          <button type="button" className="bg-black text-center text-white cursor-pointer uppercase w-full px-2 py-2">Submit Now</button>
          </div>
          </div>
          </form>
        </div>
      </div>
    </>
  )
}
