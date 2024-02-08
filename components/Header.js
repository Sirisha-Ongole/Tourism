import { Fragment, useEffect, useRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";
import { whitneyCondensed } from "../fonts";
import { useTranslation } from "next-i18next";
import LanguageSwitchLink from "./LanguageSwitchLink";
import { useRouter } from "next/router";

import i18nextConfig from "../next-i18next.config";
import LinkComponent from "./Link";
import Head from "next/head";

export default function Header() {
  const router = useRouter();
  const { t } = useTranslation("header");
  const [currentLocale, setCurrentLocale] = useState(router.locale);

  const [activeHeaderItem, setActiveHeaderItem] = useState(null);

  const buttonRef = useRef(null);
  useEffect(() => {
    const val = router.query.locale || i18nextConfig.i18n.defaultLocale;
    if (val !== currentLocale) {
      setCurrentLocale(router.query.locale || i18nextConfig.i18n.defaultLocale);
      // console.log(router.query.locale || i18nextConfig.i18n.defaultLocale);
    }
  }, [router.query]);

  useEffect(() => {
    const path = router.asPath;
    const lastPart = path.slice(path.indexOf("/", path.indexOf("/") + 1));
    let activeHeaderItem = headerData.find((item) =>
      lastPart.includes(item.href)
    );
    if (activeHeaderItem) {
      setActiveHeaderItem(activeHeaderItem);
    }
    // console.log(activeHeaderItem);
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>{t(activeHeaderItem?.name) + " - Tourisum Tiger Reserve"}</title>
      </Head>
      <nav
        className={`${whitneyCondensed.className} mx-auto flex h-100  items-center justify-between lg:pl-20 lg:pr-8 `}
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <LinkComponent href="/">
            <span className="sr-only">Tourisum</span>
          </LinkComponent>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-8 ml-16">
          {headerData.map((item) => (
            <LinkComponent
              href={item.href}
              key={item.name}
              className={`uppercase text-lg font-normal  leading-6 text-gray-900 
                hover:underline hover:underline-offset-8 hover:text-yellow-600 hover:border-yellow-600
                ${
                  activeHeaderItem?.href === item.href
                    ? "underline underline-offset-8 text-yellow-600 border-yellow-600"
                    : ""
                }
                `}
            >
              {t(item.name)}
            </LinkComponent>
          ))}
        </Popover.Group>
        <div className="lg:gap-x-12 ml-24 flex items-center me-6">
          <LanguageSwitcher
            currentLocale={currentLocale}
            buttonRef={buttonRef}
          />
          <div className="bg-[#D0AD59] lg:flex h-[98px] rounded m-1 lg:flex-col hidden lg:visible">
            <div className="lg:flex-1 text-center text-4xl items-center p-6 ">
              <a
                href="#"
                className="text-white uppercase text-lg font-100 leading-6 "
              >
                {t("bookings")}
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-black grid-cols-1 lg:hidden">
                <div className="col-span-12 text-center text-4xl items-center p-4">
                <a
                href="#"
                className="text-white uppercase text-lg font-100 "
              >
                {t("bookings")}
              </a>
                </div>
        </div>
    </>
  );
}

const LanguageSwitcher = ({ currentLocale, buttonRef }) => {
  const KannadaSwitchLink = () => (
    <LanguageSwitchLink locale="kn" key="kn" dropDownRef={buttonRef} />
  );

  const EnglishSwitchLink = () => (
    <LanguageSwitchLink locale="en" key="en" dropDownRef={buttonRef} />
  );

  return (
    <Popover className="relative">
      <Popover.Button
        className="flex items-center gap-x-1 uppercase text-lg font-100 text-gray-900 border-none"
        ref={buttonRef}
      >
        {currentLocale === "kn" ? <KannadaSwitchLink /> : <EnglishSwitchLink />}
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
        <Popover.Panel className="absolute  top-full z-10 mt-3 max-w-xs overflow-hidden hover:bg-gray-100">
          {currentLocale === "kn" ? (
            <EnglishSwitchLink />
          ) : (
            <KannadaSwitchLink />
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
const headerData = [
  {
    name: "about",
    href: "/about-us",
  },
  {
    name: "newsEvents",
    href: "/news-events",
  },
  {
    name: "gallery",
    href: "/gallery",
  },
  {
    name: "projectsReports",
    href: "/projects-reports",
  },
  {
    name: "donation",
    href: "/donation",
  },
  {
    name: "volunteer",
    href: "/volunteer",
  },
  {
    name: "contactUs",
    href: "/contact-us",
  },
];
