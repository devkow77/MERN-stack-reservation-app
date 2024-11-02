import type { Link } from "../src/lib/interfaces";
import { Button } from "./ui/button";

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

const DesktopMenu = () => (
  <div className="flex items-center gap-8 text-sm font-semibold">
    <ul className="flex items-center gap-6">
      {links.map(({ name, href }: Link, index: number) => (
        <li key={index}>
          <a href={href}>{name}</a>
        </li>
      ))}
      <Button variant={"signUp"} size={"signUp"}>
        <a href="/sign-up">Sign up</a>
      </Button>
      <Button variant={"admin"}>
        <a href="/admin">Admin</a>
      </Button>
    </ul>
  </div>
);

export default DesktopMenu;
