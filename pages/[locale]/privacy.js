import React from "react";

import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";
import { SectionTitle } from "../../components/SectionTitle";

export default function terms() {
  return (
    <div className="bg-white p-4">
      <div className="mx-auto w-2/3 ">
        <div className="p-6 text-center font-bold text-3xl">Privacy Policy</div>
        <p className="font-bold">
          By using this website, you agree to all the terms & conditions and
          following policies of this website
        </p>
        <div className="font-bold text-xl mt-6">Privacy Policy</div>
        Thanks for visiting website of NTR, and reviewing our privacy policy. We
        don’t store any personal information, like names or addresses, when you
        visit our website. The information provided to us is only used to fulfil
        your request. <br /> <br />
        We do collect some technical information when you visit to make your
        visit seamless. The section below explains how we handle and collect
        technical information when you visit our website. Information collected
        and stored automatically When you browse, read pages, or download
        information on this website, we automatically gather and store certain
        technical information about your visit. This information never
        identifies who you are.
        <p className="text-lg my-5 font-bold">
          The information we collect and store about your visit is listed below:
        </p>
        The Internet domain of your service provider (e.g. mtnl.net.in) and IP
        address (an IP address is a number that is automatically assigned to
        your computer whenever you’re surfing the web) from which you access our
        website. <br />
        <br />
        The type of browser (such as Firefox, Chrome, Safari or Internet
        Explorer) and operating system (Windows, Linux) used to access our site.{" "}
        <br />
        <br />
        The date and time you accessed access our site.
        <br />
        <br /> The pages/URLs you have visited and If you reached this website
        from another website, the address of that referring website.
        <br />
        <br /> This information is only used to help us make the site more
        useful for you. With this data, we learn about the number of visitors to
        our site and the types of technology our visitors use. We never track or
        record information about individuals and their visits.
        <p className="text-lg my-5 font-bold">Cookies</p>
        When you visit some websites, they may download small pieces of software
        on your computer/browsing device known as cookies. Some cookies collect
        personal information to recognise your computer in the future. We only
        use non-persistent cookies or “per-session cookies”.
        <br />
        <br />
        Per-session cookies serve technical purposes, like providing seamless
        navigation through this website. These cookies do not collect personal
        information on users and they are deleted as soon as you leave our
        website. The cookies do not permanently record data and they are not
        stored on your computer’s hard drive. The cookies are stored in memory
        and are only available during an active browser session. Again, once you
        close your browser, the cookie disappears. If you send us personal
        information, we do not store personal information for any purpose other
        than to fulfil your request (for example, for reservations, seamless
        experience, respond to your questions or provide subscriptions you have
        chosen). If you choose to provide us with personal information, like
        filling out a Contact Us form, with an e-mail address or postal address,
        and submitting it to us through the website, we use that information to
        respond to your message, and to help you get the information you’ve
        requested. We only share the information you give us with another
        Government agency if your question relates to that agency, or as
        otherwise required by law.
        <br />
        <br />
        Our website never collects information or creates individual profiles
        for commercial marketing. While you must provide an e-mail address for a
        localised response to any incoming questions or comments to us, we
        recommend that you do NOT include any other personal information.
        <div className="mb-14"></div>
      </div>
    </div>
  );
}

const getStaticProps = makeStaticProps(["header", "footer"]);
export { getStaticPaths, getStaticProps };
