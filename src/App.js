import React from "react";
import Navbar from "./components/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./components/Footer";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const App = () => {
  const Layout = () => {
    return (
      <div>
        <ThemeProvider>
          <Navbar />
          <Outlet />
          <Footer />
        </ThemeProvider>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <QueryClientProvider client={queryClient}>
          <Layout />
        </QueryClientProvider>
      ),
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
