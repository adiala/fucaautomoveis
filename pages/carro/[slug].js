import { sanityClient } from "sanity";
import Image from "@components/Image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Car = ({ title, description, year, manufacturer, images }) => {
  return (
    <div className="container mx-auto z-10">
      <Carousel showStatus={false} showThumbs={false} infiniteLoop>
        {images.map(({ _key, asset }) => (
          <div>
            <Image key={_key} image={asset} />
          </div>
        ))}
      </Carousel>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h4>Ano: {year}</h4>
      <h5>Fabricante: {manufacturer.name}</h5>
      <button className="button" onClick={() => {}}>
        WhatsApp
      </button>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const query = `*[_type == "car" && slug.current == $pageSlug][0] {
       title,
       description,
       year,
       manufacturer->{
           name,
           image,
       },
       images

    }`;

  const car = await sanityClient.fetch(query, { pageSlug });
  if (!car) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: car.title,
        description: car.description,
        year: car.year,
        manufacturer: car.manufacturer,
        images: car.images,
      },
    };
  }
};

export default Car;
