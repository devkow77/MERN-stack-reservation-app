import {
  Container,
  HamburgerBtn,
  SignClientBtn,
  SignSpecialistBtn,
} from "./index";
import { Input } from "../components/ui/input";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { ReactTyped } from "react-typed";
import { FaSearch } from "react-icons/fa";

const services = [
  "Fryzjer",
  "Barber shop",
  "Salon kosmetyczny",
  "Paznokcie",
  "Brwi i rzęsy",
  "Masaż",
  "Fizjoterapia",
  "Więcej...",
];

const Header = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");

  return (
    <header className="relative h-[600px] w-full text-white">
      <div className="absolute z-10 h-full w-full bg-black/50" />
      <video
        autoPlay
        loop
        muted
        className="absolute h-full w-full object-cover"
      >
        <source src="/header.mp4" type="video/mp4" />
      </video>
      <Container className="relative z-20 flex h-full flex-col justify-between py-6">
        <nav className="flex items-center justify-between">
          <a href="/">
            <h1 className="font-semibold">booking</h1>
          </a>
          {desktop ? (
            <div className="flex items-center gap-4">
              <SignClientBtn name="Zaloguj się jako klient" />
              <SignSpecialistBtn name="Dodaj swój biznes 💼" />
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <SignClientBtn name="Zaloguj się" />
              <HamburgerBtn />
            </div>
          )}
        </nav>
        <div className="flex items-center justify-center">
          <div className="w-full space-y-4 text-center lg:space-y-6">
            <ReactTyped
              strings={[
                "Zarezerwuj czas dla siebie",
                "Podkreśl swoje piękno",
                "Odważ się na zmiany",
                "Poznaj tysiące możliwości",
                "Znajdz najlepsze okazje",
              ]}
              typeSpeed={60}
              backDelay={1500}
              backSpeed={5}
              loop
              className="text-2xl font-bold lg:text-5xl"
            />
            <p className="text-sm lg:text-base">
              Odkryj najlepsze miejsca w okolicy i zarezerwuj wizytę online!
            </p>
            <div className="mx-auto flex items-center rounded-lg bg-white md:w-[50%]">
              <div className="py-4 pl-4 pr-1">
                <FaSearch className="text-black/60" />
              </div>
              <Input
                className="border-none text-black shadow-none outline-none placeholder:text-black/60 lg:text-base"
                placeholder="Szukaj usług lub biznesów"
              />
            </div>
          </div>
        </div>
        <div>
          <ul className="flex items-center gap-8 overflow-x-scroll whitespace-nowrap text-sm font-semibold lg:justify-center lg:gap-16 lg:overflow-x-hidden">
            {services.map((service, index) => (
              <a
                href="/"
                className="duration-200 hover:text-sky-500 hover:underline"
                key={index}
              >
                <li>{service}</li>
              </a>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
