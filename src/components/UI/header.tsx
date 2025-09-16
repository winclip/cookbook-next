import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const navItems = [
    { name: "Recipes", href: "/recipes", isActive: false },
    { name: "Ingridients", href: "/ingridients", isActive: true },
    { name: "About", href: "/about", isActive: false },
  ];
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="flex items-center gap-1">
          <Image src="/logo.png" alt="Logo" width={100} height={50} priority />
          <p className="font-bold text-inherit">Srpska kuhinja</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.href} isActive={item.isActive}>
            <Link href={item.href}>{item.name}</Link>
          </NavbarItem>
        ))}
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
