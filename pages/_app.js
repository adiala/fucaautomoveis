import "@styles/globals.css";
import "tailwindcss/tailwind.css";
import Header from "@components/Header";

const Application = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default Application;
