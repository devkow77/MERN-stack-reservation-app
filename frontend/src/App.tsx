import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "../components/index.ts";
import { Home } from "../pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/sign-up",
  //   element: <SignUp />,
  // },
]);
const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
