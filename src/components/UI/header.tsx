"use client";
import { siteConfig } from "@/config/site.config";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt={siteConfig.title}
      width={26}
      height={26}
      priority
    ></Image>
  );
};

export default function Header() {
  const pathName = usePathname();
  const getNavItems = () => {
    return siteConfig.navItems.map((i) => {
          const isActive = pathName === i.href;
          return (
            <NavbarItem key={i.href}>
              <Link
                color="foreground"
                href={i.href}
                className={`px-3 py-1
                ${isActive ? "text-blue-500" : "text-foreground"}
                hover:text-blue-300 hover:border
                hover:border-blue-300 hover:rounded-md
                transition-colors
                transition-border
                duration-200
                `}
              >
                {i.label}
              </Link>
            </NavbarItem>
          );
        })
  }

  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="flex gap-1">
          <Logo />
          <p className="font-bold text-inherit">{siteConfig.title}</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {getNavItems()}
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
