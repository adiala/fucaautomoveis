import { sanityClient } from "../sanity";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "@components/Image";

const Home = ({ cars }) => {
  console.log(cars);
  return (
    <>
      {cars && (
        <div className="bg-gray-200">
          <div className="container mx-auto">
            <div className="flex flex-col space-y-8 px-4">
              {cars.map((car, index) => (
                <div className="border border-gray-400 shadow-lg mt-4">
                  <Carousel showStatus={false} showThumbs={false} infiniteLoop>
                    {car.images.map(({ _key, asset }) => (
                      <div className="border-b-4 border-secondary">
                        <Image key={_key} image={asset} />
                      </div>
                    ))}
                  </Carousel>
                  <div className="p-2">
                    <div className="flex justify-around">
                      <div className="w-full h-full">
                        <h1 className="uppercase text-lg text-gray-800 font-medium tracking-tight">
                          {car.title}
                        </h1>
                        <h2 className="uppercase text-base text-gray-700 tracking-tight">
                          {car.description}
                        </h2>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-600 text-sm self-end">{car.year}</p>
                      <button className="bg-green-500 w-20 h-10 text-white">Contato</button>
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
