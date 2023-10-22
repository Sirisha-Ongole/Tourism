import React from "react";

import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { SectionTitle } from "../../components/SectionTitle";

export default function terms() {
  return (
    <div className="bg-white p-4">
      <div className="mx-auto w-2/3 ">
        <div className="p-6 text-center font-bold text-3xl">
          Security Policy
        </div>
        <p className="font-bold text-center">
          By using this website, you agree to all the terms & conditions and
          following policies of this website
        </p>
        <div className="font-bold text-xl my-6">Site Security</div>
        For site security purposes and to ensure that this service remains
        available to all users, this Government computer system employs
        commercial software programs to monitor network traffic to identify
        unauthorised attempts to upload or change information, or otherwise
        cause damage.
        <br />
        <br />
        Except for authorised law enforcement investigations, no other attempts
        are made to identify individual users or their usage habits. Raw data
        logs are used for no other purposes and are scheduled for regular
        deletion.
        <br />
        <br />
        Unauthorised attempts to upload information or change information on
        this service are strictly prohibited and may be punishable under the
        Indian IT Act.<div className="mb-14"></div>
      </div>
    </div>
  );
}

const getStaticProps = makeStaticProps(["header", "footer"]);
export { getStaticPaths, getStaticProps };
