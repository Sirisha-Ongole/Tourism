import languageDetector from "../lib/languageDetector";
import { useRouter } from "next/router";
import Link from "next/link";

const LanguageSwitchLink = ({ locale, dropDownRef, ...rest }) => {
  const router = useRouter();

  let href = rest.href || router.asPath;
  let pName = router.pathname;
  Object.keys(router.query).forEach((k) => {
    if (k === "locale") {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    pName = pName.replace(`[${k}]`, router.query[k]);
  });
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }

  return (
    <Link href={href}>
      <div
        className="uppercase"
        onClick={() => {
          languageDetector.cache(locale);
          dropDownRef.current.click();
        }}
      >
        {locale}
      </div>
    </Link>
  );
};

export default LanguageSwitchLink;
