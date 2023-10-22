import React from "react";

import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { SectionTitle } from "../../components/SectionTitle";

export default function terms() {
  return (
    <div className="bg-white p-4">
      <div className="mx-auto w-2/3 ">
        <div className="p-6 text-center font-bold text-3xl">
          Hyperlinking Policy
        </div>
        <p className="font-bold text-center">
          By using this website, you agree to all the terms & conditions and
          following policies of this website
        </p>
        <div className="font-bold text-xl my-6">Hyperlinking Policy</div>
        We do not object linking directly to the information that is hosted on
        our site and no prior permission is required for the same. However, we
        would like to inform that any such links are provided to our site, the
        same shall be informed in order to receive updates or any changes
        therein. Also, we do not permit our pages to be loaded into frames on
        your site. The NTR website pages must load into a newly opened browser
        window of the user.<div className="mb-14"></div>
      </div>
    </div>
  );
}

const getStaticProps = makeStaticProps(["header", "footer"]);
export { getStaticPaths, getStaticProps };
