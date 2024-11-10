import { useEffect, useState } from "react";
import { Container } from "../components/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { GraphQLClient } from "graphql-request";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const hygraph = new GraphQLClient(
  import.meta.env.VITE_HYGRAPH_API_KEY as string,
);

interface Post {
  slug: string;
  title: string;
  image: {
    url: string;
  };
  content: {
    html: string;
  };
  createdAt: string;
}

const HomeBlog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const query = `
    query getPosts {
      posts{
        slug,
        image {
          url
        },
        title,
        content {
          html
        },
        createdAt,
      }
    }
  `;

  const getPosts = async () => {
    const { posts }: { posts: Post[] } = await hygraph.request(query);
    setPosts(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

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
            {posts.map(({ slug, title, createdAt, image: { url } }: Post) => (
              <SwiperSlide
                key={slug}
                className="relative h-[300px] w-full rounded-xl md:h-[250px]"
              >
                <Link to={`/blog/${slug}`}>
                  <div className="relative h-2/3 w-full rounded-xl rounded-b-none">
                    <img
                      src={url}
                      alt={title}
                      className="absolute h-full w-full rounded-xl rounded-b-none object-cover object-center"
                    />
                  </div>
                  <div className="flex h-1/3 flex-col justify-center rounded-xl rounded-t-none px-4">
                    <h3 className="text-md font-semibold">{title}</h3>
                    <p className="text-sm opacity-80">
                      Data utworzenia:{" "}
                      <span className="font-semibold">
                        {new Date(createdAt).toLocaleDateString("pl-PL", {
                          year: "numeric",
                          month: "long",
                          day: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </Container>
    </article>
  );
};

export default HomeBlog;
