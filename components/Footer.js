import { whitneyCondensed } from "../fonts";
import { Button } from "flowbite-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import LinkComponent from "./Link";

export default function Footer() {
  const { t } = useTranslation(["footer"]);

  let socialIcon = {
    style: "w-10 h-10 rounded-full bg-black text-center text-white text-4xl",
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
          <a href="/">
            <img src="/images/NTRlogo.png" alt="logo" className="w-auto h-28" />
          </a>
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
              <a href="mailto:dirnagarahole@aranya.gov.in">
                dirnagarahole@aranya.gov.in
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
          </ul>
          <form action="#" className="mt-3">
            <input
              type="submit"
              className="py-2 px-5 traking-wide border duration-500 text-base textcenter bg-yellow-600 hover:bg-gray-300 text-white uppercase"
              value="Department Login"
            />
          </form>
        </div>
        <div className="lg:col-span-3 md:col-span:4 col-span-12">
          <h5 className="tracking-wide text-black-900 font-bold">
            {t("social")}
          </h5>
          <div className="flex space-x-3 mt-6">
            <a
              href="https://www.facebook.com/nagaraholetr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={`${socialIcon.style}`}>
                <FaFacebookF />
              </Button>
            </a>
            <a
              href="https://twitter.com/nagaraholetr?lang=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={`${socialIcon.style}`}>
                <FaTwitter />
              </Button>
            </a>
            <a
              href="https://www.instagram.com/nagaraholetr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={`${socialIcon.style}`}>
                <FaInstagram />
              </Button>
            </a>
            <a
              href="https://www.youtube.com/channel/UC7sl70K3Uh6Yq9tdt5dwJ1A"
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
        <div className="grid grid-cols-3">
          <div>
            © Copyrights 2023. All Rights Reserved <br />
            Nagarahole Tiger Reserve, Karnataka Forest Dept.
          </div>
          <div className="flex justify-end my-auto col-span-2">
            {miscLinks.map((item, index) => (
              <LinkComponent
                href={item.href}
                key={item.name}
                className={`${index != 0 ? "border-l" : ""} border-black px-1`}
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
    href: "/explore-nagarahole",
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
