import { appWithTranslation } from "next-i18next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { whitney } from "../fonts";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className={`${whitney.className} bg-[#2424240D] bg-none text-black`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default appWithTranslation(MyApp);
