import {
  Button,
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  TextInput,
} from "flowbite-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
export default function Header() {
  const location = useLocation().pathname;

  return (
    <Navbar className="border-b-2">
      <Link
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        to="/"
      >
        <span className="px-2 py-1 bg-gradient-to-br from-purple-600 to-blue-500 text-white rounded-md">
          global
        </span>{" "}
        blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="search"
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>

      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex space-between gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="">
          <Button className="bg-gradient-to-br from-purple-600 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800">
            Sign In
          </Button>
        </Link>
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavbarCollapse>
          <NavbarLink as={Link} to="/" active={location === "/"}>
            Home
          </NavbarLink>
          <NavbarLink as={Link} to="/about" active={location === "/about"}>
            About
          </NavbarLink>
          <NavbarLink
            as={Link}
            to="/projects"
            active={location === "/projects"}
          >
            Projects
          </NavbarLink>
        </NavbarCollapse>
      </NavbarCollapse>
    </Navbar>
  );
}
