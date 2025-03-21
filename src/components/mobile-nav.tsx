"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";

import logo from "@/logos/logo-modelo-c-header.svg";
import Image from "next/image";

const links = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Manifesto",
    path: "#manifesto",
  },
  {
    name: "Modelo C 2.0",
    path: "#modeloc",
  },
  {
    name: "Realizadores",
    path: "#realizadores",
  },
];

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <Menu className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Image src={logo} alt="Modelo C 2.0" />
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
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
}
