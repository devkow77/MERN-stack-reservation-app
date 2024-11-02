import { Container } from "./index";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import type { Link } from "../src/lib/interfaces";

const links: Link[] = [
  {
    name: "My reservations",
    href: "/my-reservations",
  },
  {
    name: "Service list",
    href: "/service-list",
  },
  {
    name: "News",
    href: "/news",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-zinc-900 py-8 text-white">
      <Container>
        <section className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div>
            <a href="/">
              <h1 className="mb-2 text-lg font-bold lg:text-xl">App</h1>
            </a>
            <p className="text-sm leading-6 opacity-90 lg:text-base lg:leading-8">
              Reservation app created for univeristy of rzeszow (UR) project
              purposes in MERN (MongoDB, Express, React, Node) Stack.
            </p>
          </div>
          <div className="lg:mx-auto">
            <h2 className="mb-2 text-lg font-bold lg:text-xl">Links</h2>
            <ul className="flex flex-col gap-2 text-sm lg:text-base">
              {links.map(({ name, href }: Link, index: number) => (
                <a
                  href={href}
                  key={index}
                  className="duration-200 hover:text-green-500"
                >
                  <li>{name}</li>
                </a>
              ))}
            </ul>
          </div>
          <div className="flex flex-col lg:items-end">
            <h2 className="mb-3 text-lg font-bold lg:text-xl">Socials</h2>
            <div className="-ml-2 flex items-center gap-4">
              <a href="https://www.facebook.com" target="_blank">
                <Facebook className="scale-90 duration-200 hover:text-green-500 lg:scale-100" />
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <Instagram className="scale-90 duration-200 hover:text-green-500 lg:scale-100" />
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <Twitter className="scale-90 duration-200 hover:text-green-500 lg:scale-100" />
              </a>
              <a href="mailto:devkow77@gmail.com" target="_blank">
                <Mail className="scale-90 duration-200 hover:text-green-500 lg:scale-100" />
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="my-4 h-[2px] w-full bg-white/5" />
          <p className="text-center text-sm leading-6 lg:text-base lg:leading-8">
            Website created by{" "}
            <a
              href="https://github.com/devkow77"
              className="font-semibold text-green-500"
            >
              devkow77
            </a>{" "}
            for univeristy of rzeszow purposes. Enjoy the app and dont forget to
            leave a star 🌟 on github.
          </p>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
