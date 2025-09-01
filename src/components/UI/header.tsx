"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="recipes"
      width={26}
      height={26}
      priority
    ></Image>
  );
};

export default function Header() {
  const navItems = [
    { href: "/", label: "Recipes" },
    { href: "/ingredients", label: "Ingredients" },
    { href: "/about", label: "About us" },
  ];

  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="flex gap-1">
          <Logo />
          <p className="font-bold text-inherit">RecipesCo</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((i) => {
          return (
            <NavbarItem key={i.href}>
              <Link color="foreground" href={i.href}>
                {i.label}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
