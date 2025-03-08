'use client';

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import Link from "next/link";

const MobileNav = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Resume",
      link: "/resume",
    },
    {
      name: "Work",
      link: "/work",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const path = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Close Sheet on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    router.events?.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events?.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <CiMenuFries className="text-3xl text-accent" />
        </SheetTrigger>
        <SheetContent>
          <div className="sidebar flex flex-col">
            <Link href="/">
              <h1 className="text-3xl font-semibold">
                Syedify<span className="text-accent">.</span>
              </h1>
            </Link>
          </div>
          <nav className="flex items-center flex-col mt-20 justify-center gap-10">
            {links.map((link, index) => {
              return (
                <Link
                  key={index}
                  href={link.link}
                  className={`${
                    link.link === path && "text-accent border-2 transition-all"
                  } flex flex-col justify-center gap-10 items-center text-xl capitalize hover:text-accent transition-all`}
                  onClick={() => setIsOpen(false)} // Close Sheet on link click
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNav;
