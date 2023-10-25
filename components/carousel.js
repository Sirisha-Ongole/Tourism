'use client';

import { FaArrowLeft, FaArrowRight,FaDotCircle } from 'react-icons/fa';
import { useState , useEffect} from 'react';

export default function Carousel({ slideimages,  autoSlide = false, autoSlideInterval = 3000, }) {
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const prevSlide = () => {
        const isFirtsSlide = currentSlide === 0;
        const newSlide = isFirtsSlide ? slideimages.length - 1 : currentSlide - 1;
        setCurrentSlide(newSlide);
    }
    const nextSlide = () => {
        const lastSlide = currentSlide === slideimages.length - 1;
        const newSlide = lastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    }

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(nextSlide, autoSlideInterval)
        return () => clearInterval(slideInterval)
      }, [currentSlide])

    return (
        <>
        <div className="lg:max-width-[1519px] lg:h-[600px] h-[350px] w-full m-auto relative group"> 
            <div style={{backgroundImage: `url(/images/${slideimages[currentSlide].img})`}}className="w-full h-full bg-center bg-cover duration-500 md:bg-fit lg:bg-fit bg-no-repeat"></div>
                {/* Left Arrow*/}
                {/* <div className='absolute top-[50%] -traslate-x-0 traslate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <FaArrowLeft onClick={prevSlide}size={10} />
                </div> */}
                {/* Right Arrow*/}
                {/* <div className='absolute top-[50%] -traslate-x-0 traslate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <FaArrowRight onClick={nextSlide} size={10} />
                </div> */}
                <div className='absolute top-[95%] right-[50%]'>
                    <div className='flex justify-center items-center'>
                        {slideimages.map((slide, index) => {
                            return (
                                <div key={index} onClick={() => setCurrentSlide(index)} className={`text-2xl cursor-pointer p-1`}>
                                <FaDotCircle key={index} size={10}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}


