import { Container } from "./index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";

interface Specialist {
  name: string;
  address: string;
}

const HomeServices = () => {
  const [specialists, setSpecialists] = useState([]);

  useEffect(() => {
    const fetchSpecialists = async () => {
      try {
        const response = await fetch(
          "https://ur-mern-reservation-app.vercel.app/api/specialist",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const data = await response.json();
        setSpecialists(data);
      } catch (error) {
        console.error("Error fetching specialists:", error);
      }
    };

    fetchSpecialists();
  }, [specialists]);

  return (
    <article>
      <Container>
        <h2 className="mb-4 font-semibold lg:mb-6 lg:text-xl">
          Niedawno dodane usługi
        </h2>
        <section>
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
          >
            {specialists.map((specialist: Specialist, index: number) => (
              <SwiperSlide
                key={index}
                className="flex aspect-video items-center justify-center rounded-xl bg-black/10"
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold">{specialist.name}</h3>
                  <p className="text-sm">{specialist.address}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </Container>
    </article>
  );
};

export default HomeServices;
