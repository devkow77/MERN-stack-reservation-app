import { Container } from "../components/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const HomeBlog = () => {
  return (
    <article className="lg:py-8">
      <Container>
        <section className="space-y-4 lg:space-y-8">
          <h2 className="text-xl font-semibold lg:text-3xl">
            Polecane dla Ciebie
          </h2>
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
              <SwiperSlide
                key={index}
                className="flex aspect-video items-center justify-center rounded-xl bg-black/10"
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold">Blog {index + 1}</h3>
                  <p className="text-sm">08.11.2024</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </Container>
    </article>
  );
};

export default HomeBlog;
