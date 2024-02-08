import { appWithTranslation } from "next-i18next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { whitney } from "../fonts";
import Head from "next/head";


const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Tourisum Tiger Reserve</title>
        <link
          rel="icon"
          href="/images/cropped-NTRlogo-01-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/images/cropped-NTRlogo-01-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="/images/cropped-NTRlogo-01-180x180.png"
        />
        <meta
          name="msapplication-TileImage"
          content="/images/cropped-NTRlogo-01-270x270.png"
        />
      </Head>
      <div className={`${whitney.className} bg-[#2424240D] bg-none text-black`}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
};

export default appWithTranslation(MyApp);
