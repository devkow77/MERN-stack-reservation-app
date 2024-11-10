import {
  Header,
  HomeServices,
  HomeContent,
  HomeSpecialists,
  HomeBlog,
  Footer,
} from "../components/index";

const Home = () => {
  return (
    <main className="space-y-8 dark:bg-zinc-900 dark:text-white lg:space-y-16">
      <Header />
      <HomeServices />
      <HomeContent />
      <HomeSpecialists />
      <HomeBlog />
      <Footer />
    </main>
  );
};

export default Home;
