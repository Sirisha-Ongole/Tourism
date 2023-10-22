import React from "react";

import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { SectionTitle } from "../../components/SectionTitle";

export default function terms() {
  return (
    <div className="bg-white p-4">
      <div className="mx-auto w-2/3 ">
        <div className="p-6 text-center font-bold text-3xl">
          Copyright Policy
        </div>
        <p className="font-bold text-center">
          By using this website, you agree to all the terms & conditions and
          following policies of this website
        </p>
        <div className="font-bold text-xl my-6">Copyright Policy</div>
        Information featured on this site may be reproduced free of charge in
        any format or media without requiring specific permission. This is
        subject to the information/data being reproduced accurately and not
        being used in a derogatory manner or in a misleading context. Where the
        information is being published or issued to others, the source must be
        prominently acknowledged.
        <br />
        <br />
        However, the permission to reproduce this information does not extend to
        any information on this site, which is explicitly identified as being
        the copyright of a third party. Authorisation to reproduce such
        information must be obtained from the copyright holders concerned.
        <br />
        <br />
        Information on this site is subject to copyright protection unless
        otherwise indicated. The information may be downloaded without requiring
        specific prior permission. Any other proposed use of the information is
        subject to the approval of Director, Nagarahole Tiger Reserve (NTR
        hereafter). Application for obtaining permission should be made to
        dirnagarahole[at]aranya [dot]gov[dot]in<div className="mb-14"></div>
      </div>
    </div>
  );
}

const getStaticProps = makeStaticProps(["header", "footer"]);
export { getStaticPaths, getStaticProps };
