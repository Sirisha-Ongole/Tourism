import React from "react";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";
import { useTranslation } from "next-i18next";

export default function Donors (){
  const { t } = useTranslation("donation");

  return (
    <div className="font-light">
      <p className="font-extralight">{t("text18")}</p>
      <table className="bg-white w-full mx-auto my-5">
        <thead>
          <tr className="text-white bg-[#332F2F] text-left ">
            <th className="font-light p-5 rounded-tl-lg">{t("text19")}</th>
            <th className="font-light p-5">{t("text20")}</th>
            <th className="font-light p-5">{t("text21")}</th>
            <th className="font-light p-5 rounded-tr-lg">{t("text22")}</th>
          </tr>
        </thead>
        <tbody>
          {donorsData.map((item, index) => {
            return (
              <tr
                key={index}
                className="hover:bg-[#F4F4F4] border-b text-[#656565]"
              >
                <td className="p-5">{item.sno}</td>
                <td
                  className="p-5"
                  dangerouslySetInnerHTML={{ __html: item.donors }}
                ></td>
                <td className="p-5">{item.amount}</td>
                <td className="p-5">{item.purpose}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const donorsData = [
  {
    sno: "01.",
    donors:
      "Ws Abaran Timeless Jewellery Pvt. Ltd.,<br/>#192, West of Chord Road Opp. ISKCON,<br/>Mahalakshmi Layout I Bengaluru - 560 086",
    amount: " ₹ 13,39,498/-",
    purpose: "Thar Jeep",
  },
  {
    sno: "02.",
    donors:
      "Mr. Ramesh Govindan,<br/>Tiurnalai #132-C, FCC Road, Whitefield<br/>Bengaluru - 560 066",
    amount: "₹ 8,50,000/-",
    purpose: "Patrolling Jeep",
  },
  {
    sno: "03.",
    donors:
      "M/s PM Ventures Private<br/>12C, Sobha Lotus,<br/>Near Ryan International School<br/>Brooke Field, Kundalahalli Bengaluru-560037",
    amount: "₹ 8,50,000/-",
    purpose: "Patrolling Jeep",
  },
  {
    sno: "04.",
    donors:
      "M/s Navodaya Foundation<br/>12C, Sobha Lotus,<br/>Near Ryan International School<br/>Brooke Field, Kundalahalli Bengaluru-560037",
    amount: "₹ 8,50,000/-",
    purpose: "Patrolling Jeep",
  },
  {
    sno: "05.",
    donors:
      "Mr. Vikram Kirloskar,<br/>Chairman & Managing Director,<br/>Kirloskar Systems Ltd, Kirloskar Business Park,<br/>Hebbal, Bellary Road, Bangalore - 560024",
    amount: "₹ 9,25,000/-",
    purpose: "Patrolling Jeep",
  },
  {
    sno: "06.",
    donors:
      "Mrs. Rohini Nilekani<br/>#856,13th Main, III Block, Koramangala,<br/>Bangalore 560 034",
    amount: "₹ 9,25,000/-",
    purpose: "Patrolling Jeep",
  },
  {
    sno: "",
    donors: "Total",
    amount: "₹ 57,39,498/-",
    purpose: "",
  },
];

const getStaticProps = makeStaticProps(["header", "donation","footer"]);
export { getStaticPaths, getStaticProps };
