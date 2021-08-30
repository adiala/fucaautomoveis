import { sanityClient } from "../sanity";
import Link from "next/link";
import ImageNext from "next/image";
import whatsapp from "../public/whatsapp-logo.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "@components/Image";
import Hero from "@components/Hero";

const Home = ({ cars }) => {
  console.log(cars);
  const encodedMessage = (title, description) => {
    return(
      `https://wa.me/5511996338656?text=Estou%20interessado%20no%20${title}%20-%20${description}`
    );
  }
  return (
    <>
      <Hero/>
      {cars && (
        <div className="bg-gray-200 min-h-screen pt-4 pb-4">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0 px-4 lg:px-0">
              {cars.map((car, index) => (
                <div className="border border-gray-400 bg-white shadow-lg lg:max-w-sm">
                  <Carousel showStatus={false} showThumbs={false} infiniteLoop>
                    {car.images.map(({ _key, asset }) => (
                      <div className="border-b-2 border-secondary">
                        <Image key={_key} image={asset} />
                      </div>
                    ))}
                  </Carousel>
                  <div className="p-2">
                    <div className="flex">
                      <div className="w-full h-full">
                        <h1 className="uppercase font-bold text-lg text-primary tracking-tighter font-Rubik">
                          {car.title}
                        </h1>
                        <h2 className="uppercase text-base text-gray-600 tracking-tighter font-Rubik w-32 font-light">
                          {car.description}
                        </h2>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-600 text-sm self-end font-Rubik">
                        {car.year}
                      </p>
                      <a href={encodedMessage(car.title, car.description)} target="_blank">
                      <button className="bg-button flex items-center w-28 p-3 text-white rounded-xl cursor-pointer hover:opacity-80">
                        <ImageNext
                          src={whatsapp}
                          alt="WhatsApp Logo"
                          width={25}
                          height={25}
                        />
                        <p className="ml-2 font-Rubik font-semibold tracking-tighter">Contato</p>
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type == "car"]{
       title,
       description,
       year,
       manufacturer->{
           name,
           image,
       },
       images
  }`;
  const cars = await sanityClient.fetch(query);

  if (!cars.length) {
    return {
      props: {
        cars: [],
      },
    };
  } else {
    return {
      props: {
        cars,
      },
    };
  }
};

export default Home;
