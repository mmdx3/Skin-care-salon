"use client";

import { IoCloseOutline } from "react-icons/io5";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Socials from "./Socials";

type Link = {
  href: string;
  name: string;
};

const Links: Link[] = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About" },
  { href: "/treatments", name: "Treatments" },
  { href: "/contact", name: "Contact" },
];
const MobileNav = ({
  setMobileNave,
}: {
  setMobileNave: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  return (
    <nav className="relative flex flex-col justify-between p-8 h-full z-50">
      <div
        className="cursor-pointer text-accent"
        onClick={() => setMobileNave(false)}
      >
        <IoCloseOutline className="text-4xl " />
      </div>
      <ul className="flex flex-col gap-10 text-white text-xl">
        {Links.map((link, index) => (
          <li
            key={index}
            className={`my-2 ${
              pathname === link.href && "border-b-2 border-accent-100"
            } uppercase max-w-max mx-auto z-50 cursor-pointer`}
            onClick={() => setMobileNave(false)}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <Socials containerStyles="text-white text-lg flex gap-6 justify-center " />
    </nav>
  );
};

export default MobileNav;
