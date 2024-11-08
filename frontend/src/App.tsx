import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "../components/index.ts";
import { Home } from "../pages/index";
import { ModeToggle } from "../components/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <ModeToggle />
    </ThemeProvider>
  );
};

export default App;
