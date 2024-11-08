import {
  Header,
  Services,
  HomeContent,
  HomeSpecialists,
  HomeBlog,
  Footer,
} from "../components/index";

const Home = () => {
  return (
    <main className="space-y-8 lg:space-y-16">
      <Header />
      <Services />
      <HomeContent />
      <HomeSpecialists />
      <HomeBlog />
      <Footer />
    </main>
  );
};

export default Home;
