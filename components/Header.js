import Image from "next/image";
import Logo from "../public/fuca-logo.svg";
import HeroImage from "../public/hero.jpg";

export default function Header() {
  return (
    <section className="z-50">
      <div className="w-full h-40 py-2">
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
      <div className="flex flex-col justify-center bg-secondary h-10 shadow-lg">
        <h1 className="text-center uppercase text-lg tracking-tighter text-gray-900">
          Compra - Venda - Empréstimo - Consignado
        </h1>
      </div>
    </section>
  );
}
