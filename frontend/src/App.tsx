import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "../components/index.ts";
import { Home, Profile } from "../pages/index";
import { ModeToggle } from "../components/index";
import { Provider } from "react-redux";
import store from "../redux/store.ts";
import { Toaster } from "../components/ui/toaster";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
        <ModeToggle />
      </ThemeProvider>
      <Toaster />
    </Provider>
  );
};

export default App;
