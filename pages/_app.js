import "tailwindcss/tailwind.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap');
</style>


const Application = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default Application;
