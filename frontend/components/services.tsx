import { Container } from "../components/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Services = () => {
  return (
    <article className="py-8 lg:py-16">
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
            {Array.from({ length: 6 }).map((_, index) => (
              <SwiperSlide className="flex aspect-video items-center justify-center rounded-xl bg-black/10">
                Usługa {index + 1}
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </Container>
    </article>
  );
};

export default Services;
