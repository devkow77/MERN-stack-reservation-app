import { motion } from "framer-motion";
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

const menuMotion = {
  visible: {
    left: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    left: 100,
  },
};

const itemMotion = {
  visible: {
    x: 0,
    opacity: 1,
  },
  hidden: {
    x: -100,
    opacity: 0,
  },
};

const MobileMenu = () => {
  return (
    <motion.section
      className="fixed left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-white xl:hidden"
      variants={menuMotion}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col gap-6 font-semibold">
        {links.map(({ name, href }: Link, index: number) => (
          <a href={href} key={index} className="text-black">
            <motion.p variants={itemMotion}>{name}</motion.p>
          </a>
        ))}
      </div>
    </motion.section>
  );
};

export default MobileMenu;
