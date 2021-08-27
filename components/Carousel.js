import Image from "next/image";
import car01 from "../public/fiat-01.jpeg";
import car02 from "../public/fiat-02.jpeg";
import car03 from "../public/fiat-03.jpeg";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function CarouselDemo() {
  return (
    <>
      <div className="container">
        <Carousel showThumbs={false}>
          <div>
            <Image src={car01} alt="Car Image" />
          </div>
          <div>
            <Image src={car02} alt="Car Image" />
          </div>
          <div>
            <Image src={car03} alt="Car Image" />
          </div>
          <div>
            <Image src={car04} alt="Car Image" />
          </div>
          <div>
            <Image src={car05} alt="Car Image" />
          </div>
        </Carousel>
      </div>
    </>
  );
}
