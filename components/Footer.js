import { whitneyCondensed } from "../fonts";
import { Button } from "flowbite-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import LinkComponent from "./Link";

export default function Footer() {
  const { t } = useTranslation(["footer"]);

  let socialIcon = {
    style:
      "w-10 h-10 rounded-full bg-black text-center text-white text-4xl hover:bg-[#A9CF38]",
  };
  let liText = {
    style:
      "text-black-300 hover:text-gray-500 trasation-all duration-500 ease-in-out",
  };
  return (
    <div className="mx-auto pb-14 px-6 w-3/4 text-sm">
      <div className="border-t border-gray-300"></div>
      <div className="grid md:grid-cols-12 grid-cols-1 gap-7 mt-6 mb-6">
        <div className="lg:col-span-3 col-span-12">
          <LinkComponent href="/">
          </LinkComponent>
          <p className="mt-6 mb-6 text-gray-900">
            {t("text3")}
            <br />
            {t("text4")}, {t("text5")} <br />
            {t("text6")}, &nbsp;
            {t("text7")} <br />
            Ph:{" "}
            <span>
              <a>08222-252041</a>
            </span>
            <br />
            Email –{" "}
            <span>
              <a href="mailto:abc@gov.in">
                abc@gov.in
              </a>
            </span>
          </p>
        </div>
        <div className="lg:col-span-2 md:col-span-4 col-span-12">
          <h5
            className={`${whitneyCondensed.className} tracking-wide text-black-900 font-bold`}
          >
            {t("text1")}
          </h5>
          <ul className="list-none mt-6 space-y-2">
            {impLinks.map((item, index) => (
              <li key={index}>
                <LinkComponent
                  href={item.href}
                  key={item.name}
                  className={`${liText.style}`}
                >
                  {t(item.name)}
                </LinkComponent>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3 md:col-span-4 col-span-12">
          <h5
            className={`${whitneyCondensed.className} tracking-wide text-black-900 font-bold`}
          >
            {" "}
            {t("text2")}
          </h5>
          <ul className="list-none mt-6 space-y-2">
            {otherLinks.map((item, index) => (
              <li key={index}>
                <LinkComponent
                  href={item.href}
                  key={item.name}
                  className={`${liText.style}`}
                >
                  {t(item.name)}
                </LinkComponent>
              </li>
            ))}
            <li className="mt-10">
              <LinkComponent className=" px-5 py-3 rounded traking-wide border duration-500 text-base textcenter bg-yellow-600 text-white uppercase">
                Department Login
              </LinkComponent>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-3 md:col-span:4 col-span-12">
          <h5 className="tracking-wide text-black-900 font-bold">
            {t("social")}
          </h5>
          <div className="flex space-x-3 mt-6">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={`${socialIcon.style}`}>
                <FaFacebookF />
              </Button>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={`${socialIcon.style}`}>
                <FaTwitter />
              </Button>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={`${socialIcon.style}`}>
                <FaInstagram />
              </Button>
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={`${socialIcon.style}`}>
                <FaYoutube />
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300 pt-10">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-1">
          <div className="lg:col-span-5 col-span-12 lg:text-left text-center">
            © Copyrights 2023. All Rights Reserved <br />
            , Dundu Forest Dept.
          </div>
          <div className="lg:col-span-7 col-span-12 justify-center flex flex-wrap items-center mt-3 text-sm font-medium mx-auto w-full">
            {miscLinks.map((item, index) => (
              <LinkComponent
                href={item.href}
                key={item.name}
                className={`${index != 0 ? "border-l" : ""} border-gray-500 px-2`}
              >
                {t(item.name)}
                {/* <>{index != 0 ? "|":""}</> */}
              </LinkComponent>
            ))} 
          </div>
        </div>
      </div>
    </div>
  );
}

const impLinks = [
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
const otherLinks = [
  {
    name: "refundCancellation",
    href: "/refund-cancellation-policy",
  },
  {
    name: "explore",
    href: "/explore-torisum",
  },
  {
    name: "dosDonts",
    href: "/dos-and-donts",
  },
  {
    name: "rulesRegulations",
    href: "/rules-regulations",
  },
];

const miscLinks = [
  {
    name: "termsAndConditions",
    href: "/terms-and-conditions",
  },
  {
    name: "privacyPolicy",
    href: "/privacy",
  },
  {
    name: "copyRightPolicy",
    href: "/copyright-policy",
  },
  {
    name: "hyperlinkingPolicy",
    href: "/hyperlinking-policy",
  },
  {
    name: "securityPolicy",
    href: "/security-policy",
  },
];
