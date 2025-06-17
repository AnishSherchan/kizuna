"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Logo from "@/public/assets/logo/Logo.png"; // Adjust the path as necessary
import MaxWidthWrapper from "../MaxWithWrapper";
import NavLink from "./NavLink";
import Link from "next/link";
import CtaButtons from "./CtaButtons";

const TOP_OFFSET = 80;
const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
        showBackground ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <MaxWidthWrapper className=" px-[30px] md:px-[60px]">
        <div className=" overflow-hidden flex items-center justify-between px-[5px]  py-[5px]">
          <Link href={"/"}>
            <Image
              src={Logo}
              className="  h-[80px] w-auto object-contain"
              alt="Kizuna"
            />
          </Link>
          {/* NavLinks */}
          <NavLink
            className=" hidden lg:flex"
            showBackground={showBackground}
          />
          {/* Get Started Button */}

          {/* Transalation Button */}
          <CtaButtons />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
