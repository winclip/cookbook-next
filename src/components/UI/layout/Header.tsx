import { layoutConfig } from "@/config/layout.config";
import { siteConfig } from "@/config/site.config";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import AuthButtons from "./AuthButtons";

export default function Header() {
  return (
    <Navbar className={`h-[${layoutConfig.headerHeight}px]`}>
      <NavbarBrand>
        <Link href="" className="flex items-center gap-1">
          <Image
            src="/logo.png"
            alt={siteConfig.title}
            width={100}
            height={50}
            priority
          />
          <p className="font-bold text-inherit">Srpska kuhinja</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href} isActive={item.isActive}>
            <Link href={item.href}>{item.name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <AuthButtons />
      </NavbarContent>
    </Navbar>
  );
}
