import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import car01 from "../public/fiat-01.jpeg";
import car02 from "../public/fiat-02.jpeg";
import car03 from "../public/fiat-03.jpeg";

export default function Cars() {
  return (
    <>
      <section className="bg-gray-300">
        <div className="container mx-auto grid lg:grid-cols-4 px-4">
          <div className="shadow-lg bg-white mt-4">
            <Carousel showStatus={false} showThumbs={false} infiniteLoop>
              <div>
                <Image src={car01} alt="Car Image"/>
              </div>
              <div>
                <Image src={car02} alt="Car Image" />
              </div>
              <div>
                <Image src={car03} alt="Car Image" />
              </div>
            </Carousel>
            <div className="flex flex-col space-y-2">
              <h1 className="ml-2 uppercase text-gray-900 font-medium text-lg">Fiat Punto</h1>
              <hr></hr>
              <h2 className="ml-2 uppercase text-gray-600 font-normal text-base">1.6 essence 16V flex 4p manual</h2>
              <p className="ml-2 uppercase text-gray-600 font-light">2013</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
