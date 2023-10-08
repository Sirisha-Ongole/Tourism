'use client'
import { Fragment, useState, u } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { FaBars, FaWindowClose,FaAngleDown} from "react-icons/fa";
import Link from "next/link";
import Carousel from '../components/carousel';


export default function Example() {
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

return (
    <>
    <nav className="bg-white mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
        <a href="#">
            <span className="sr-only">Nagarhole</span>
            <img className="h-10 w-auto" src="/NTRlogo.png" alt="" />
        </a>
        </div>
        <div className="flex lg:hidden">
        <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
        >
            <span className="sr-only">Open main menu</span>
            <FaBars className="h-6 w-6" aria-hidden="true" />
        </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link legacyBehavior href="/">
          <a href="#" className="uppercase text-lg font-100 leading-6 text-gray-900">
          About Us
          </a>
          </Link>
          <Link legacyBehavior href="/news-events">
          <a href="#" className="uppercase text-lg font-100 leading-6 text-gray-900">
          News & Events
          </a>
          </Link>
          <Link legacyBehavior href="/gallery">
          <a href="#" className="uppercase text-lg font-100 leading-6 text-gray-900">
          Gallery
          </a>
          </Link>
          <Link legacyBehavior href="/projects-reports">
          <a href="#" className="uppercase text-lg font-100 leading-6 text-gray-900">
          Projects & Reports
          </a>
          </Link>
          <Link legacyBehavior href="/donation">
          <a href="#" className="uppercase text-lg font-100 leading-6 text-gray-900">
          Donation
          </a>
          </Link>
          <Link legacyBehavior href="/volunteer">
          <a href="#" className="uppercase text-lg font-100 leading-6 text-gray-900">
          Volunteer
          </a>
          </Link>
          <Link legacyBehavior href="/contact-us">
          <a href="#" className="uppercase text-lg font-100 leading-6 text-gray-900">
          Contact Us
          </a>
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 uppercase text-lg font-100 text-gray-900 border-none">
            <span>EN</span>
            <FaAngleDown className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>
                <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
                >
            <Popover.Panel className="absolute -left-2 top-full z-10 mt-3 max-w-xs overflow-hidden bg-white">
                <div className="p-4 uppercase text-lg font-100 text-gray-900">
                    KN
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        <div className="bg-yellow">
        <a href="#" className="uppercase text-lg font-100 leading-6 text-gray-900 bg-yellow-600 py-5 px-2">
          Bookings
        </a>
        </div>
        </div>
    </nav>
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="/NTRlogo.png"
                alt=""
            />
            </a>
            <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <FaWindowClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                       KN
                      </Disclosure.Button>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
    </Dialog>
    </>
)
}
