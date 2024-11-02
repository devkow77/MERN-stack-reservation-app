import { Container, HamburgerBtn, DesktopMenu } from "../components/index";
import { useMediaQuery } from "../hooks/useMediaQuery";
import type { Link } from "../src/lib/interfaces";

const categories: Link[] = [
  {
    name: "Hairdresser",
    href: "/hairdresser",
  },
  {
    name: "Barber",
    href: "/barber",
  },
  {
    name: "Manicure",
    href: "/manicure",
  },
  {
    name: "Pedicure",
    href: "/pedicure",
  },
  {
    name: "Massage",
    href: "/massage",
  },
];

const Navbar = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");

  return (
    <nav>
      <Container className="space-y-6 py-6">
        <section className="flex items-center justify-between">
          <h1 className="font-bold">
            <a href="/">App</a>
          </h1>
          {desktop ? <DesktopMenu /> : <HamburgerBtn />}
        </section>
        <section>
          <ul className="flex flex-wrap items-center justify-end gap-2 text-xs md:gap-4">
            {categories.map(({ name, href }: Link, index: number) => (
              <li
                key={index}
                className="rounded-full border-2 border-black px-2 py-2 font-medium duration-200 hover:bg-black hover:text-white md:px-4"
              >
                <a href={href}>{name}</a>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </nav>
  );
};

export default Navbar;
