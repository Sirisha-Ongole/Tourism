'use client';

import { Button, Footer } from 'flowbite-react';
import {  FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function FooterWithSocialMediaIcons() {
  return (
      <div className="container mx-auto py-14 px-6 bg-white">
        <div className="grid md:grid-cols-12 grid-cols-1 gap-7 mt-6 mb-6">
          <div className="lg:col-span-3 col-span-12">
            <a href="/">
                <img src="/NTRlogo.png" alt="logo" className="w-auto h-20" />
            </a>
            <p className='mt-6 mb-6 text-gray-900'>
                Deputy Conservator of Forests Director 
                Nagarahole Tiger Reserve, Forest Campus, 
                Old BM Road, Hunsur 571105.
                Ph: <span>
                <a>08222-252041</a></span>Email – <span>
                <a href="mailto:dirnagarahole@aranya.gov.in">dirnagarahole@aranya.gov.in</a>
                </span>
            </p>
        </div>
        <div className="lg:col-span-2 md:col-span-4 col-span-12">
            <h5 className='tracking-wide text-black-900 font-bold'>
            Important Links
            </h5>
            <ul class="list-none mt-6 space-y-2">
                <li>
                    <a href="#" className='text-black-300 hover:text-gray-500 trasation-all duration-500 ease-in-out'>
                    About Us
                    </a>
                </li>
                <li>
                    <a href="#" className='text-black-300 hover:text-gray-500 trasation-all duration-500 ease-in-out'>
                    Booking
                    </a>
                </li>
                <li>
                    <a href="#" className='text-black-300 hover:text-gray-500 trasation-all duration-500 ease-in-out'>
                    News & Events
                    </a>
                </li>
                <li>
                    <a href="#" className='text-black-300 hover:text-gray-500 trasation-all duration-500 ease-in-out'>
                    Gallery
                    </a>
                </li>
                <li>
                    <a href="#" className='text-black-300 hover:text-gray-500 trasation-all duration-500 ease-in-out'>
                    Project & Reports
                    </a>
                </li>
                <li>
                    <a href="#" className='text-black-300 hover:text-gray-500 trasation-all duration-500 ease-in-out'>
                    Contact Us
                    </a>
                </li>
            </ul>
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12">
        <h5 className='tracking-wide text-black-900 font-bold'>
            Other Links
            </h5>
            <ul class="list-none mt-6 space-y-2">
                <li>
                    <a href="#" className='text-black-300 hover:text-gray-500 trasation-all duration-500 ease-in-out'>
                    Refund & Cancellation Policy
                    </a>
                </li>
                <li>
                    <a href="#" className='text-black-300 hover:text-gray-500 trasation-all duration-500 ease-in-out'>
                    Explore Nagarahole
                    </a>
                </li>
                <li>
                    <a href="#" className='text-black-300 hover:text-gray-500 trasation-all duration-500 ease-in-out'>
                    Do's and Don'ts
                    </a>
                </li>
                <li>
                    <a href="#" className='text-black-300 hover:text-gray-500 trasation-all duration-500 ease-in-out'>
                    Rules & Regulations
                    </a>
                </li>
            </ul>
            <form action='#' className='mt-3'>
                <input type="submit" className='py-2 px-5 traking-wide border duration-500 text-base textcenter bg-yellow-600 hover:bg-gray-300 text-white uppercase' value='Department Login' />
            </form>
        </div>
        <div className="lg:col-span-3 md:col-span:4 col-span-12">
        <h5 className='tracking-wide text-black-900 font-bold'>
            Social
            </h5>
            <div className='flex space-x-3 mt-6'>
                <Button className='w-10 h-10 rounded-full bg-black text-center text-white text-4xl'>
                    <FaFacebookF />
                </Button>
                <Button className='w-10 h-10 rounded-full bg-black text-center text-white text-4xl'>
                    <FaTwitter />
                </Button>
                <Button className='w-10 h-10 rounded-full bg-black text-center text-white text-4xl'>
                    <FaYoutube />
                </Button>
                <Button className='w-10 h-10 rounded-full bg-black text-center text-white text-4xl'>
                    <FaInstagram />
                </Button>
            </div>
        </div>
        </div>
        <Footer.Divider />
      </div>

  )
}


