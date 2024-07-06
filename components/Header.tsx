"use client";
import React, { useContext, useState } from "react";
import { CursorContext } from "./CursorContext";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { AiOutlineMenu } from "react-icons/ai";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import Socials from "./Socials";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Header = () => {
  const { mouseLeaveHandler, mouseEventHandler } =
    useContext<ICursorContext>(CursorContext);
  const [mobileNav, setMobilenav] = useState<boolean>(false);
  return (
    <header className="pb-6 xl:pb-[50px] fixed bg-accent-100 xl:bg-transparent w-full">
      {/* topbar */}
      <div className="bg-secondary-100 mb-6 xl:mb-[50px] xl:h-[50px] py-4 xl:py-0 ">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between h-full">
            {/* phone &email */}
            <motion.div
              onMouseEnter={mouseEventHandler}
              onMouseLeave={mouseLeaveHandler}
              className="flex flex-col lg:flex-row h-full gap-2 xl:gap-6 w-full justify-between xl:w-auto xl:justify-normal"
            >
              {/* phone */}
              <div className="cursor-pointer flex items-center gap-2 text-white">
                <FaPhoneAlt />
                <span>+989354501795</span>
              </div>
              {/* email */}
              <div className="cursor-pointer flex items-center gap-2 text-white">
                <IoMdMail />
                <span>mamadx3j@gmail.com</span>
              </div>
            </motion.div>

            {/* socials */}
            <motion.div
              onMouseEnter={mouseEventHandler}
              onMouseLeave={mouseLeaveHandler}
              className="hidden xl:block "
            >
              <Socials containerStyles="flex gap-6 text-white items-center" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex items-center justify-between px-6 ">
        {/* logo */}
        <motion.div
          onMouseEnter={mouseEventHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <Link href={"/"}>
            <Image
              src="/assets/logo.svg"
              width={120}
              height={44}
              priority
              alt="logo"
            />
          </Link>
        </motion.div>

        {/* mobile nav trigger */}
        <div
          className="xl:hidden cursor-pointer"
          onClick={() => setMobilenav(!mobileNav)}
        >
          <AiOutlineMenu className="text-3xl text-primary " />
        </div>
        {/* mobile nav */}
        <motion.div
          initial={{ right: "-100%" }}
          animate={{ right: mobileNav ? 0 : "-100%" }}
          transition={{ duration: 0.5, type: "tween" }}
          className="fixed bg-primary top-0 bottom-0 right-0 w-[300px]  xl:hidden z-50"
        >
          <MobileNav setMobileNave={setMobilenav} />
        </motion.div>
        {/* desktop nav */}
        <motion.div
          onMouseEnter={mouseEventHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden xl:block"
        >
          <Nav />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
