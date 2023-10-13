"use client";
import { Fragment, useState, u } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { FaBars, FaWindowClose, FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="mx-auto flex h-100  items-center justify-between lg:pl-20 lg:pr-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <span className="sr-only">Nagarhole</span>
            <img className="w-28" src="/images/NTRlogo.png" alt="logo" />
          </Link>
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
        <Popover.Group className="hidden lg:flex lg:gap-x-12 ml-16">
          {headerData.map((item) => (
            <Link legacyBehavior href={item.href} key={item.name}>
              <a
                href="#"
                className="uppercase text-lg font-100 leading-6 text-gray-900 hover:underline hover:underline-offset-8 hover:text-yellow-600 hover:border-yellow-600"
              >
                {item.name}
              </a>
            </Link>
          ))}
        </Popover.Group>
        <div className="lg:gap-x-12 ml-24 flex items-center">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 uppercase text-lg font-100 text-gray-900 border-none">
              <span>EN</span>
              <FaAngleDown
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
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
              <Popover.Panel className="absolute -left-2 top-full z-10 mt-3 max-w-xs overflow-hidden bg-[#2424240D]">
                <div className="p-4 uppercase text-lg font-100 text-gray-900">
                  KN
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <div class="bg-[#D0AD59] flex h-[98px] rounded m-1 flex-col">
            <div class="flex-1 text-center text-4xl items-center p-6 ">
              <a
                href="#"
                className="text-white uppercase text-lg font-100 leading-6 "
              >
                Bookings
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#2424240D] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/images/NTRlogo.png" alt="" />
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
  );
}

const headerData = [
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
