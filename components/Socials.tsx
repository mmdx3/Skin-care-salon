import Link from "next/link";

import { FaYoutube, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Socials = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link href={"/"}>
          <FaYoutube />
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <FaTwitter />
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <FaInstagram />
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <FaFacebook />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
