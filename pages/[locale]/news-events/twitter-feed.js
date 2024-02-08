import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../../lib/getStatic";

function TwitterFeed() {
  const [showTweets, setTweets] = React.useState(false);
  useEffect(() => {
    setTweets(true);
  }, []);

  const { t } = useTranslation("news-events");


  return (
    <div className="w-3/4 mx-auto p-10">
     <TwitterContent />
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </div>
  );
}

const TwitterContent = () => {
  return (
    <>
      <a
        className="twitter-timeline"
        href="https://twitter.com/torisumtr?ref_src=twsrc%5Etfw"
        data-chrome="nofooter noborders"
      >
        Tweets by torisum
      </a>
    </>
  );
};

export default TwitterFeed;

const getStaticProps = makeStaticProps(["header", "news-events", "footer"]);
export { getStaticPaths, getStaticProps };
