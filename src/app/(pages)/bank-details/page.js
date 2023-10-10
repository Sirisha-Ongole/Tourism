import { ContactCard } from "@/components/ContactCard";
import { whitney } from "../../fonts";
import React from "react";
import DefaultCarousel from "@/components/carousel";

export default function BankDetails() {
  // Add carousel
  let slides = [
    { img: "DSC2472.jpg" },
    { img: "DSC2948.jpg" },
    { img: "Mask-Group-2.jpg" },
  ];

  return (
    <div>
      <DefaultCarousel slideimages={slides} autoSlide={true} />
      <div className="mx-auto w-2/3 ">
        <h3 className="my-6 font-medium">Bank Details</h3>
        {/* Show table with two columns and two rows */}
        <table className="table-auto w-full font-extralight text-left">
          <thead>
            <tr>
              <th className=" px-4 py-2 font-normal ">Statement of Account</th>
              <th className=" px-4 py-2 font-normal">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" px-4 py-2">
                STATE BANK OF INDIA, <br />
                SILVER JUBILEE ROAD, HUNSUR PB NO3,
                <br />
                SILVER JUBILEE ROAD, HUNSUR MYSURU DIST. 571105 <br />
                Branch Code :40064 <br />
                Branch Phone 252027
              </td>
              <td className=" px-4 py-2">
                MEMBER SECRETARY, NAGARHOLE TIGER CONSERVATION FOUNDATION
                <br />
                IFSC : SBIN0040064 <br />
                OPP PWD OFFICE, MICR: 571002053, OLD B M ROAD FOREST CAMPUS,{" "}
                <br />
                Account No.:64031531723
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
