"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import { useLocale } from "next-intl";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const locale = useLocale();

  const createLocalizedPath = (path: string): string => `/${locale}${path}`;

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent>
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold flex justify-center items-center">
              <div className="flex">
                <div className="h-14 aspect-square">
                  <Image
                    src="/images/logo.png"
                    width={1000}
                    height={1000}
                    className="object-contain h-full w-full"
                    alt="Logo"
                  />
                </div>
                <span className="text-accent self-end">.</span>
              </div>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            const localizedPath = createLocalizedPath(link.path);
            return (
              <Link
                href={localizedPath}
                key={index}
                className={`${
                  localizedPath === pathname
                    ? "text-accent border-b-2 border-accent"
                    : ""
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
