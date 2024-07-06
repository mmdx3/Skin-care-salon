import Link from "next/link";
import { useContext } from "react";
import { CursorContext } from "./CursorContext";
import { usePathname } from "next/navigation";
import { link } from "fs";

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

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav>
      <div className="w-[384px] flex justify-between items-center mx-auto ">
        {Links.map((link, index) => (
          <Link
            href={link.href}
            key={index}
            className={` ${
              pathname === link.href && "border-b-2 border-accent"
            } uppercase `}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
