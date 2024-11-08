import { Container } from "./index";

const HomeSpecialists = () => {
  return (
    <article>
      <Container>
        <section className="space-y-8 lg:space-y-16">
          <h2 className="text-center text-2xl font-semibold lg:text-4xl">
            Znajdź specjalistę na Booking według miasta
          </h2>
          <div className="h-[300px] rounded-xl bg-black/30"></div>
        </section>
      </Container>
    </article>
  );
};

export default HomeSpecialists;
