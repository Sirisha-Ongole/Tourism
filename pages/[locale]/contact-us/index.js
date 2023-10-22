import { useRouter } from "next/router";
import { ContactCard } from "../../../components/ContactCard";
import { whitney } from "../../../fonts";
import React from "react";

import i18nextConfig from "../../../next-i18next.config";
import { contactData as contactDataKn } from "../../../public/locales/kn/contact";
import { contactData as contactDataEn } from "../../../public/locales/en/contact";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";

export default function contactUS() {
  const router = useRouter();
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

  const contactUsData = currentLocale === "en" ? contactDataEn : contactDataKn;

  let slides = [
    { img: "DSC2472.jpg" },
    { img: "DSC2948.jpg" },
    { img: "Mask-Group-2.jpg" },
  ];
  return (
    <div
      className={`px-10 bg-white pt-16 grid place-items-center text-[#8D8282]`}
    >
      {contactUsData.map((data, index) => (
        <div key={index} className="text-lg  text-center ">
          <h1
            className={`${
              index !== 0 ? "text-left" : ""
            } text-3xl text-black font-extralight mt-6`}
          >
            {data.contactHead}
          </h1>

          {data.mainContact && (
            <div className="grid place-items-center">
              <ContactCard contact={data.mainContact} />{" "}
            </div>
          )}
          <div className="grid lg:grid-cols-2 grid-col-12 gap-4">
            {data.contacts &&
              data.contacts.map((contact, index) => (
                <ContactCard
                  key={index}
                  contact={contact}
                  style={{
                    holder: "text-left my-5 font-extralight",
                  }}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const getStaticProps = makeStaticProps(["header", "common", "footer"]);
export { getStaticPaths, getStaticProps };
