import { Container } from "./index";

const HomeContent = () => {
  return (
    <article className="py-8 lg:py-16">
      <Container className="space-y-16 lg:space-y-32">
        <section className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-6 md:w-1/2 lg:space-y-16">
            <h2 className="text-2xl font-semibold lg:text-4xl">
              Umów się online
            </h2>
            <p className="text-sm leading-6 opacity-80">
              Chcesz umówić się do fryzjera, barbera, stylistki paznokci lub
              salonu masażu w okolicy? Szukasz miejsca, w którym najlepsi
              specjaliści zadbają o Twoją brodę, brwi lub zrobią relaksujący
              masaż?
              <br />
              <br />
              booking to darmowa aplikacja do rezerwacji, dzięki której z
              łatwością znajdziesz wolny termin i wygodnie umówisz się na
              wizytę. Bez dzwonienia — rezerwujesz o każdej porze i z dowolnego
              miejsca.
              <br />
              <br />
              <span className="font-semibold">
                Odkrywaj nowe miejsca w okolicy i umawiaj się na wizyty z
                booking!
              </span>
            </p>
          </div>
          <div className="max-w-sm md:w-1/2 md:max-w-md">
            <img src="/reservation.jpg" alt="reservation" />
          </div>
        </section>
        <section className="flex flex-col gap-8 md:flex-row-reverse md:items-center md:justify-between">
          <div className="space-y-6 md:w-1/2 lg:space-y-16">
            <h2 className="text-2xl font-semibold lg:text-4xl">
              Coś ci wypadło? Nie szkodzi!
            </h2>
            <p className="text-sm leading-6 opacity-80">
              Pobierz booking — darmową aplikację do rezerwacji — i zarządzaj
              swoimi wizytami, gdziekolwiek jesteś. Zmień termin wizyty lub
              odwołaj rezerwację bez dzwonienia.
              <br />
              <br />
              Wiemy, że każdego dnia dużo się u Ciebie dzieje, dlatego będziemy
              wysyłać Ci przypomnienia o nadchodzących wizytach. Dzięki nim
              nigdy nie przegapisz terminu!
            </p>
          </div>
          <div className="max-w-sm md:w-1/2 md:max-w-md">
            <img src="/forgot.jpg" alt="forgot" />
          </div>
        </section>
        <section className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-6 md:w-1/2 lg:space-y-16">
            <h2 className="text-2xl font-semibold lg:text-4xl">
              Najlepsi specjaliści w okolicy
            </h2>
            <p className="text-sm leading-6 opacity-80">
              Na booking znajdziesz najlepszych specjalistów z branży health &
              beauty w Twojej okolicy.
              <br />
              <br />
              Dowiedz się o nich więcej — sprawdź ich profile na booking,
              przeczytaj opinie innych klientów i przejrzyj portfolio.
              <br />
              <br />
              Oszczędzaj czas i niczym się nie przejmuj! Z booking rezerwacja
              wizyt jest darmowa i dziecinnie prosta.
            </p>
          </div>
          <div className="max-w-sm md:w-1/2 md:max-w-md">
            <img src="/best.jpg" alt="best" />
          </div>
        </section>
      </Container>
    </article>
  );
};

export default HomeContent;
