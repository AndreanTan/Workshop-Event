// import { Button, Input } from "@nextui-org/react";
// import { FiSearch } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  // Input,
  // Badge,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProfileDropDown from "./ProfileDropDown";
// import React from 'react'

function NavigationBar() {
  const idAccess = localStorage.getItem("idAccess");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      className="md:py-2 md:px-2 shadow-sm bg-background border-b-2 dark:border-neutral-800"
      isBlurred={false}
    >
      <NavbarContent className="flex justify-between">
        <NavbarBrand>
          <Link to={"/"}>
            <div className="font-Grotesk text-4xl text-[#902B1E] font-bold">
              Jelajah
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="flex gap-4 w-full" justify="center">
        {/* <form className="w-full flex justify-center">
          <Input
            type="text"
            variant="bordered"
            size="sm"
            isClearable
            radius="lg"
            fullWidth
            placeholder="Type to search..."
            startContent={<FiSearch />}
            className="w-full md:w-3/4"
          />
        </form> */}
      </NavbarContent>
      <NavbarContent justify="end" className="hidden md:flex gap-2">
        <NavbarItem>
          <Link to={"/cart"}>
            <Button isIconOnly aria-label="Cart" variant="flat">
              <IoCartOutline size={22} className="fill-accent" />
            </Button>
          </Link>
        </NavbarItem>
        {idAccess ? (
          <ProfileDropDown />
        ) : (
          <>
            <NavbarItem>
              <Link to={"/login"}>
                <Button className="font-bold">Login</Button>
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link to={"/regist"}>
                <Button c className="font-bold text-white bg-[#64764C]">
                  Register
                </Button>
              </Link>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
        <div className="flex w-full gap-2">
          <NavbarMenuItem className="flex-1">
            <Link to={"/login"}>
              <Button className="w-full font-bold">Login</Button>
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="flex-1">
            <Link to={"/regist"}>
              <Button className="w-full font-bold text-white  bg-[#64764C]">
                Register
              </Button>
            </Link>
          </NavbarMenuItem>
        </div>
        <NavbarMenuItem className="mt-2">
          <Link to={"/cart"}>
            <div className="flex items-center gap-2">
              <Button isIconOnly aria-label="Cart" variant="light">
                <IoCartOutline size={26} className="fill-text" />
              </Button>
              <p className="font-Grotesk text-xl font-semibold">Cart</p>
            </div>
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default NavigationBar;
