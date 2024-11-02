import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="relative mx-auto flex h-[500px] w-full max-w-7xl flex-col items-end justify-center xl:mb-12 xl:mt-4 xl:rounded-2xl">
      <img
        src="/header.jpg"
        alt="header image"
        className="absolute h-full w-full object-cover object-center xl:rounded-2xl"
      />
      <div className="absolute z-10 h-full w-full rounded-2xl bg-gradient-to-r from-black/0 to-black lg:to-black/40" />
      <section className="z-20 px-4 text-right text-white md:px-12">
        <h1 className="mb-2 max-w-sm text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          Make reservation by <span className="text-green-500">one</span> click!
        </h1>
        <p className="mb-4">
          Currently we have <span className="font-bold">1</span> services
        </p>
        <Button variant={"services"}>Check service list</Button>
      </section>
    </header>
  );
};

export default Header;
