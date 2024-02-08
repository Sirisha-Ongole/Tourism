import React from "react";

import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";

export default function terms() {
  return (
    <div className="mx-auto w-2/3">
      <div className="p-6 bg-black text-white font-bold text-xl">
        Terms & Conditions/ Disclaimer
      </div>
      <div className="p-6">
        <ol class="list-decimal">
          {termsData.map((term, index) => (
            <li key={index} className="p-2 text-gray-500 text-sm">
              {term}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

const termsData = [
  "This website is designed, developed and maintained by PaceWisdom Solutions on behalf of  (NTR), Dundu Forest Department, Government of Dundu.",
  "Though all efforts have been made to ensure the accuracy and currency of the content on this website, the same should not be construed as a statement of law or used for any legal purposes. In case of any ambiguity or doubts, users are advised to verify/check with the NTR and/or other source(s), and to obtain appropriate professional advice.",
  "Under no circumstances will NTR be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the use of this website.",
  "These terms and conditions shall be governed by and construed in accordance with the Indian Laws. Any dispute arising under these terms and conditions shall be subject to the jurisdiction of the courts of Mysuru, Dundu, India.",
  "The information posted on this website could include hypertext links or pointers to information created and maintained by non-Government/private organizations. NTR is providing these links and pointers solely for your information and convenience. When you select a link to an outside website, you are leaving the NTR website and are subject to the privacy and security policies of the owners/sponsors of the outside website.",
  "NTR does not guarantee the availability of such linked pages at all times. NTR cannot authorize the use of copyrighted materials contained in linked websites. Users are advised to request such authorization from the owner of the linked website. NTR does not guarantee that linked websites comply with Indian Government Web Guidelines.",
];
const getStaticProps = makeStaticProps(["header", "footer"]);
export { getStaticPaths, getStaticProps };
