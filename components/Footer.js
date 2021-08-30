import Image from "next/image";
import Logo from "../public/fuca-logo.svg";
import Map from "@components/Map";
import { AiFillPhone } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

const Footer = () => {
  return (
    <>
      <div className="w-full h-full bg-white sticky">
        <div className="w-full h-0.5 bg-gray-300" />
        <div className="container flex flex-col justify-between space-y-4 px-8 items-center">
          <div className="w-32 mt-4">
            <Image src={Logo} />
          </div>
          <div className="font-Rubik text-gray-600 text-lg tracking-tighter flex flex-col space-y-2">
            <div className="flex space-x-2">
              <AiFillPhone className="self-center" />
              <p>(21) 99246 1265</p>
            </div>
            <div className="flex space-x-2">
              <AiFillMail className="self-center" />
              <p>fucaautomoveis@gmail.com</p>
            </div>
            <div className="flex space-x-2">
              <ImLocation className="self-center" />
              <p>Rua Almirante Ari Parreiras, 225</p>
            </div>
          </div>
          
        </div>
        <div className="mt-4">
            <Map />
          </div>
      </div>
    </>
  );
};

export default Footer;
