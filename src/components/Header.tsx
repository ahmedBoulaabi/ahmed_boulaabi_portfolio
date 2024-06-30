import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            {/* Boulaabi<span className="text-accent">.</span> */}
            <div className="flex">
              <div className="h-14 aspect-square">
                <Image
                  src="/images/logo.png"
                  width={1000}
                  height={1000}
                  className="object-contain h-full w-full"
                  alt=""
                />
              </div>
              <span className="text-accent self-end">.</span>
            </div>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
