import Image from "next/image";
import Logo from "../public/fuca-logo.svg";
import HeroImage from "../public/hero.jpg";

export default function Header() {
  return (
    <section className="z-50">
      <div className="w-full h-40 py-2 border-b-8 border-secondary">
        <div className="h-full w-2/3 lg:w-2/6 mx-auto p-4">
          <div className="h-full w-full relative">
            <Image
              src={Logo}
              alt="Logo Fuca Automóveis"
              layout="fill"
              objectFit="scale-down"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
