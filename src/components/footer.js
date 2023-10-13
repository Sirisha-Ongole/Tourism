'use client';

import { Button, Footer } from 'flowbite-react';
import Link from 'next/link';
import {  FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function FooterWithSocialMediaIcons() {
    let socialIcon = {
        style : "w-10 h-10 rounded-full bg-black text-center text-white text-4xl"
    }
    let liText = {
        style : "text-black-300 hover:text-gray-500 trasation-all duration-500 ease-in-out"
    } 
  return (
      <div className="mx-auto pb-14 px-6">
        <div className="border-t border-gray-300"></div>
        <div className="grid md:grid-cols-12 grid-cols-1 gap-7 mt-6 mb-6">
          <div className="lg:col-span-3 col-span-12">
            <a href="/">
                <img src="/images/NTRlogo.png" alt="logo" className="w-auto h-20" />
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
            <ul className="list-none mt-6 space-y-2">
                {navLink.map((item, index) => (
                    <li key={index}>
                        <Link legacyBehavior href={item.href} key={item.name}>
                        <a href="#" className={`${liText.style}`}>
                        {item.name}
                            </a>
                        </Link>
                </li>
                ))}
            </ul>
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12">
        <h5 className='tracking-wide text-black-900 font-bold'>
            Other Links
            </h5>
            <ul className="list-none mt-6 space-y-2">
            {newLink.map((item, index) => (
                    <li key={index}>
                        <Link legacyBehavior href={item.href} key={item.name}>
                        <a href="#" className={`${liText.style}`}>
                        {item.name}
                            </a>
                        </Link>
                </li>
                ))}
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
                <Button className={`${socialIcon.style}`}>
                    <FaFacebookF />
                </Button>
                <Button className={`${socialIcon.style}`}>
                    <FaTwitter />
                </Button>
                <Button className={`${socialIcon.style}`}>
                    <FaYoutube />
                </Button>
                <Button className={`${socialIcon.style}`}>
                    <FaInstagram />
                </Button>
            </div>
        </div>
        </div> 
        <div className="border-t border-gray-300"></div>
      </div>

  )
}

const navLink = [
    {
      name: "About Us",
      href: "/",
    },
    {
      name: "News & Events",
      href: "/news-events",
    },
    {
      name: "Gallery",
      href: "/gallery",
    },
    {
      name: "Projects & Reports",
      href: "/projects-reports",
    },
    {
      name: "Donation",
      href: "/donation",
    },
    {
      name: "Volunteer",
      href: "/volunteer",
    },
    {
      name: "Contact Us",
      href: "/contact-us",
    },
  ];
const newLink = [
    {
      name: "Refund & Cancellation Policy",
      href: "/refund-cancellation-policy",
    },
    {
      name: "Explore Nagarahole",
      href: "/explore-nagarahole",
    },
    {
      name: "Do's and Don'ts",
      href: "/dos-and-donts",
    },
    {
      name: "Rules & Regulations",
      href: "/rules-regulations",
    },
  ];
  

