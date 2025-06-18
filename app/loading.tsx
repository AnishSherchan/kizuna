import { FaSpinner } from "react-icons/fa6";
import Image from "next/image";
import Logo from "@/public/assets/logo/Logo.png";

const Loading = () => {
  return (
    <div className="h-[40rem] w-full gap-10 flex flex-col justify-center items-center">
      {/* Change the loading Spinner here with something more simple */}
      <Image src={Logo} className=" w-[80px] h-auto" alt="Kizuna" priority />
      <FaSpinner className="animate-spin text-4xl text-primary" />
      {/* Design the font as per UI */}
      <p className="lg:text-2xl text-lg font-light text-center">
        Your page is loading...
      </p>
    </div>
  );
};

export default Loading;
