"use client";
import { Spotlight } from "@/components/ui/spotlight";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
  NavbarLogo,
} from "@/components/ui/navbar";
import { Hexagon, Github, Twitter } from "lucide-react";
import { Footer } from "@/components/ui/footer";
import React, { useState } from "react";

export default function Home() {
  const navItems = [
    { name: "Home", link: "#", active: true },
    { name: "Features", link: "#feature", active: true },
    { name: "Pricing", link: "#pricing", active: true },
    { name: "Contact", link: "#contact", active: true },
    { name: "Profile", link: "#profile", active: true },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      </div>

      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="px-0.5 py-0.5 rounded-md bg-white relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-[linear-gradient(to_right,_#5844d9,_#e75610,_#984e78,_#e14a91,_#d144ef)]">
            <NavbarButton
              href="#upload"
              className="bg-black"
              variant="gradient"
            >
              Get Started
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={idx}
                className="text-black dark:text-white"
                href={item.link}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <div className="flex items-center justify-center h-screen">
        <h3 className="text-center items-center">hello</h3>
      </div>

      <div className="w-full ">
        <Footer
          logo={<Hexagon className="h-10 w-10" />}
          brandName="Echo"
          socialLinks={[
            {
              icon: <Twitter className="h-5 w-5" />,
              href: "https://twitter.com",
              label: "Twitter",
            },
            {
              icon: <Github className="h-5 w-5" />,
              href: "https://github.com",
              label: "GitHub",
            },
          ]}
          mainLinks={[
            { href: "/products", label: "Products" },
            { href: "/about", label: "About" },
            { href: "/blog", label: "Blog" },
            { href: "/contact", label: "Contact" },
          ]}
          legalLinks={[
            { href: "/privacy", label: "Privacy" },
            { href: "/terms", label: "Terms" },
          ]}
          copyright={{
            text: "© 2025 Echo",
            license: "All rights reserved",
          }}
        />
      </div>
    </div>
  );
}
