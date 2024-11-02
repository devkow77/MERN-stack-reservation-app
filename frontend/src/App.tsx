import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home.tsx";
import SignUp from "../pages/sign-up.tsx";
import { ThemeProvider } from "../components/index.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);
const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
