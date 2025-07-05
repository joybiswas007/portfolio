import { useEffect } from "react";
export default function SEO({ title }) {
  const {
    VITE_FULLNAME: fName,
    VITE_USERNAME: uname,
    VITE_DESCRIPTION,
    VITE_KEYWORDS,
    VITE_GTAGID: gTagID,
    VITE_OG_IMAGE: ogImage,
  } = import.meta.env;
  title = title ? `${title} - ${uname}` : fName;

  const description =
    VITE_DESCRIPTION ||
    "Personal portfolio website built with React and Material UI.";

  const keywords = VITE_KEYWORDS || "personal, backend, golang, javascript";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={fName} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={window.location.href} />
      {gTagID && <GoogleAnalytics gTagID={gTagID} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:site_name" content={fName} />
      {ogImage && <meta property="og:image" content={ogImage} />}
    </>
  );
}

const GoogleAnalytics = ({ gTagID }) => {
  useEffect(() => {
    if (!gTagID) return;

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", gTagID);
  }, [gTagID]);

  if (!gTagID) return null;

  return (
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${gTagID}`}
    />
  );
};
