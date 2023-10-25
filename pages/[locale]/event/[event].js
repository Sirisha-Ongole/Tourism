import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function index() {
  const router = useRouter();

  const [displayHtml, setDisplayHtml] = useState(null);

  useEffect(() => {
    const event = router.query.event;
    setDisplayHtml(htmlData[event]);
  }, [router.query]);

  return (
    <div
      className="w-3/4 mx-auto"
      dangerouslySetInnerHTML={{ __html: displayHtml }}
    ></div>
  );
}

export default index;

const htmlData = {
  tender: `<h5 style="text-align: center">13 Jan 2022</h5>
  <h2 style="text-align: center">Tender</h2>
  <img
                    style=" width:40%; margin: 0 auto"
                      src="/images/image2.png"
                      alt="Wildlife Photography Contest"
                    />
  <img src="blob:https://docs.google.com/4c1a5da0-523f-4583-884e-9e6fa9fe1972" class="ndfHFb-c4YZDc-cYSp0e-DARUcf-RJLb9c" alt="Page 1 of 2" aria-hidden="true">
  `,
  "latest-news-2": `
  <h5 style="text-align: center">31 Jan 2022</h5>
  <h2 style="text-align: center">Latest News</h2>
  <p>
  <a href="/docs/Advertisement_NTCF.pdf">
    1. CONTRACTUAL ENGAGEMENT OF PERSONNEL UNDER NTCF
  </a></p>
  <p>
  <a href="/docs/Internship_NTCF.pdf">
    2. INTERNSHIP PROGRAM UNDER NTCF – 2022
  </a>
  </p>

`,
  "clean-kabini": `<h2 style="text-align: center">Clean Kabini</h2>
                    <img
                    style=" width:40%; margin: 0 auto"
                      src="/images/image-42.png"
                      alt="Wildlife Photography Contest"
                    />
                    <div style="display: flex; justify-content: center; width:40%;margin: 0 auto">
                      <img
                        src="/images/IMG-20220531-WA0001.jpg"
                        alt="Wildlife Photography Contest"
                        style="margin-right: 10px"
                      />
                      <img
                        src="/images/IMG-20220531-WA0002.jpg"
                        alt="Wildlife Photography Contest"
                      />
                    </div>`,
  "nagarahole-tiger-conservation-plan": `<h2 style="text-align: center">Nagarahole Tiger Conservation Plan</h2>
                    <div style="display: flex; justify-content: center">
                    <img
                      src="/images/cropped-NTRlogo-01.png"
                      alt="Wildlife Photography Contest"
                    />
                    <img
                      src="/images/cropped-NTRlogo-01.png"
                      alt="Wildlife Photography Contest"
                    />
                    </div>
                    <p>CORE</p>
                    <a href="https://drive.google.com/file/d/1-MF9p-og_bJFzA1nLJ-lGFYrcI5WJTN5/view?usp=sharing">
                      https://drive.google.com/file/d/1-MF9p-og_bJFzA1nLJ-lGFYrcI5WJTN5/view?usp=sharing
                    </a>
                    <p>BUFFER</p>
                    <a href="https://drive.google.com/file/d/16Xf9D4BIsYqd04Vv8Y87tp1AiD_GW0mW/view?usp=sharing">
                      https://drive.google.com/file/d/16Xf9D4BIsYqd04Vv8Y87tp1AiD_GW0mW/view?usp=sharing
                    </a>
                    <p>CORRIDOR</p>
                    <a href="https://drive.google.com/file/d/15duLbCWIFMyZdOEH5HV76uK2pPMcUreT/view?usp=sharing">
                      https://drive.google.com/file/d/15duLbCWIFMyZdOEH5HV76uK2pPMcUreT/view?usp=sharing
                    </a>`,
  "wildlife-photography-contest": `<div style="text-align: center">
  <h2>Wildlife Photography Contest</h2>
  <img
    style="margin: 0 auto"
    src="/images/Test.png"
    alt="Wildlife Photography Contest"
  />
  <object
    data="/docs/Photography-Event-Details.pdf#toolbar=0&navpanes=0&scrollbar=0""
    type="application/pdf"
    width="80%"
    height="600px"
    style="margin: 0 auto"
  >
    <p>
      Unable to display PDF file. <a href="sample.pdf">Download</a> instead.
    </p>
  </object>
  </div>`,
};
