"use client";

import React from "react";

export const HowDonate = () => {
  return (
    <div className="font-thin">
      <p>
        The Foundation can receive donations from individuals, Institutions at
        home and abroad
      </p>
      <p className="font-light my-4">
        Donation ran be in the form of Kind or Cash
      </p>
      {/* • All contribution made to Nagarahole Tiger Reserve are received by Nagarahole Tiger Conservation Foundation (NTCF) as prescribed under section 38-X of the Wildlife Protection Act, 19721 Government of India. The NTCF is a registered society and the contribution/donations to the above foundation are eligible for Income Tax exemption u/s 80G of the Income Tax Act, 1961. The contribution made to NTCF also qualify under the CSR contribution category of protection of flora and fauna as per clause (iv) of SCHEDULE VII; u/s 135 of the Companies Act, 2013 as stipulated by Ministry of Corporate Affairs.
• Cash can be donated in the form of Cheque or DD by drawing in favour of Nagarahole Tiger Conservation Foundation
• All donations are to be made at Nagarahole- Directors office only
• A donation monitoring book will be kept at the off ice and the donors are requested to make sure that the donation made is recorded in that book with due signature and details of donated items and a acknowledgement is obtained for the same.
• Depending on the availability either Deputy Conservator of Forests & Director, Assistant Conservator of Forests or Range Forest Officer will issue a Certificate of having the donation received with a photograph.
• Details of donations received will be uploaded with photographs once in 15 days.
• No donations will be acknowledged which is made directly to any individuals, RFO office or any other place and donors are discouraged from the practice of making direct donations. */}
      {/* Convert above into a list */}
      <ul className="list-disc list-inside">
        <li>
          All contribution made to Nagarahole Tiger Reserve are received by
          Nagarahole Tiger Conservation Foundation (NTCF) as prescribed under
          section 38-X of the Wildlife Protection Act, 19721 Government of
          India. The NTCF is a registered society and the contribution/donations
          to the above foundation are eligible for Income Tax exemption u/s 80G
          of the Income Tax Act, 1961. The contribution made to NTCF also
          qualify under the CSR contribution category of protection of flora and
          fauna as per clause (iv) of SCHEDULE VII; u/s 135 of the Companies
          Act, 2013 as stipulated by Ministry of Corporate Affairs.
        </li>
        <li>
          Cash can be donated in the form of Cheque or DD by drawing in favour
          of Nagarahole Tiger Conservation Foundation
        </li>
        <li>
          All donations are to be made at Nagarahole- Directors office only
        </li>
        <li>
          A donation monitoring book will be kept at the off ice and the donors
          are requested to make sure that the donation made is recorded in that
          book with due signature and details of donated items and a
          acknowledgement is obtained for the same.
        </li>
        <li>
          Depending on the availability either Deputy Conservator of Forests &
          Director, Assistant Conservator of Forests or Range Forest Officer
          will issue a Certificate of having the donation received with a
          photograph.
        </li>
        <li>
          Details of donations received will be uploaded with photographs once
          in 15 days.
        </li>
        <li>
          No donations will be acknowledged which is made directly to any
          individuals, RFO office or any other place and donors are discouraged
          from the practice of making direct donations.
        </li>
      </ul>
      {/* Create 'Donate Now' button
      Background black with white text
      onClick -> open /bank-details page 
      center the button*/}
      <div className="flex justify-center">
        <button
          className="bg-black text-white py-2 px-4 rounded uppercase"
          onClick={() => {
            window.location.href = "/bank-details";
          }}
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};
