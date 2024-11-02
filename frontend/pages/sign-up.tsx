import { Container } from "../components/index";
import { IoPersonAdd } from "react-icons/io5";
import { MdWork } from "react-icons/md";

const SignUp = () => {
  return (
    <main>
      <Container className="py-6 sm:py-12">
        <section className="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row">
          <a href="/sign-up/user" className="block w-full">
            <div className="flex h-[200px] w-full flex-col items-center justify-center gap-2 rounded-3xl bg-zinc-900 font-semibold text-white duration-200 hover:bg-zinc-700">
              <IoPersonAdd className="text-2xl xl:text-4xl" />
              <h2>Sign up as user</h2>
            </div>
          </a>
          <a href="/sign-up/specialist" className="block w-full">
            <div className="flex h-[200px] w-full flex-col items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 font-semibold text-white hover:from-blue-700 hover:to-purple-700">
              <MdWork className="text-2xl xl:text-4xl" />
              <h2>Sign up as specialist</h2>
            </div>
          </a>
        </section>
      </Container>
    </main>
  );
};

export default SignUp;
