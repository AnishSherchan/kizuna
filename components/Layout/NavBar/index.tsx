import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/logo/Logo.svg"; // Adjust the path as necessary
import MaxWidthWrapper from "../../MaxWithWrapper";
import NavLink from "./NavLink";
import Link from "next/link";
import CtaButtons from "./CtaButtons";

const Navbar = () => {
  return (
    <div className=" sticky top-0 bg-transparent z-50 ">
      <MaxWidthWrapper className=" px-[60px]">
        <div className=" overflow-hidden flex items-center justify-between  py-[5px]">
          <Link href={"/"}>
            <Image
              src={Logo}
              className=" h-[85px] w-auto aspect-auto"
              alt="Kizuna"
            />
          </Link>
          {/* NavLinks */}
          <NavLink />
          {/* Get Started Button */}

          {/* Transalation Button */}
          <CtaButtons />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
