import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa6";
import { RiEditBoxLine, RiThreadsFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Navbar  className="bg-primary w-full mb-5">
    <NavbarBrand>
      <RiThreadsFill className="w-7 h-7 absolute"/>
    </NavbarBrand>
    <NavbarContent className="mx-auto space-x-40" justify="center">
      <NavbarItem className="hover:bg-[#2c2c2c] p-4 rounded-lg cursor-pointer">
        <Link className="text-white" to="/chat">
          <GoHomeFill className="w-6 h-6 "/>
        </Link>
      </NavbarItem>
      <NavbarItem isActive className="hover:bg-[#2c2c2c] p-4 rounded-lg cursor-pointer">
        <Link className="text-white" to="/">
          <RiEditBoxLine className="w-6 h-6"/>
        </Link>
      </NavbarItem>
      <NavbarItem className="hover:bg-[#2c2c2c] p-4 rounded-lg cursor-pointer">
        <Link className="text-white" to="/:username" >
          <FaUser className="w-6 h-6"/>
        </Link>
      </NavbarItem>
    </NavbarContent>
  </Navbar>  
    );
}
