"use client";

import React from "react";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import { useTranslation } from "next-i18next";
import LinkComponent from "../../../components/Link";
export default function HowDonate () {
  const { t } = useTranslation("donation");

  return (
    <div className="font-thin">
      <p>{t("text8")}</p>
      <p className="font-light my-4">{t("text9")}</p>
      {/* • All contribution made to Nagarahole Tiger Reserve are received by Nagarahole Tiger Conservation Foundation (NTCF) as prescribed under section 38-X of the Wildlife Protection Act, 19721 Government of India. The NTCF is a registered society and the contribution/donations to the above foundation are eligible for Income Tax exemption u/s 80G of the Income Tax Act, 1961. The contribution made to NTCF also qualify under the CSR contribution category of protection of flora and fauna as per clause (iv) of SCHEDULE VII; u/s 135 of the Companies Act, 2013 as stipulated by Ministry of Corporate Affairs.
• Cash can be donated in the form of Cheque or DD by drawing in favour of Nagarahole Tiger Conservation Foundation
• All donations are to be made at Nagarahole- Directors office only
• A donation monitoring book will be kept at the off ice and the donors are requested to make sure that the donation made is recorded in that book with due signature and details of donated items and a acknowledgement is obtained for the same.
• Depending on the availability either Deputy Conservator of Forests & Director, Assistant Conservator of Forests or Range Forest Officer will issue a Certificate of having the donation received with a photograph.
• Details of donations received will be uploaded with photographs once in 15 days.
• No donations will be acknowledged which is made directly to any individuals, RFO office or any other place and donors are discouraged from the practice of making direct donations. */}
      {/* Convert above into a list */}
      <ul className="list-disc list-inside">
        <li>{t("text10")}</li>
        <li>{t("text11")}</li>
        <li>{t("text12")}</li>
        <li>{t("text13")}</li>
        <li>{t("text14")}</li>
        <li>{t("text15")}</li>
        <li>{t("text16")}</li>
      </ul>
      {/* Create 'Donate Now' button
      Background black with white text
      onClick -> open /bank-details page 
      center the button*/}
      <div className="flex justify-center my-8">
        <button
          href="/bank-details"
          className="flex justify-center items-center bg-black text-white rounded px-6 py-2 mx-auto mb-8 font-thin uppercase"
        >
          <LinkComponent href="/bank-details">Donate Now</LinkComponent>
        </button>
      </div>
    </div>
  );
};

const getStaticProps = makeStaticProps(["header", "donation", "footer"]);
export { getStaticPaths, getStaticProps };
