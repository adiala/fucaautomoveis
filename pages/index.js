import { sanityClient } from "../sanity";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "@components/Image";

const Home = ({ cars }) => {
  console.log(cars);
  return (
    <>
      {cars && (
        <div>
          {cars.map((car, index) => (
            <div>
              <Carousel showStatus={false} showThumbs={false} infiniteLoop>
                {car.images.map(({ _key, asset }) => (
                  <div>
                    <Image key={_key} image={asset} />
                  </div>
                ))}
              </Carousel>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "car"]';
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
