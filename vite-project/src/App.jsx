import { createBrowserRouter, Outlet, useLocation } from "react-router";
import { RouterProvider } from "react-router/dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";

import "./index.css";

function Layout() {
  const location = useLocation();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Navbar />

      <main className="book">
        <div key={location.pathname} className="book-page">
          <Outlet />

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Gå til toppen av siden"
          >
            <span className="back-to-top-arrow">↑</span>

            <span className="back-to-top-text">
              Til toppen
            </span>
          </button>
        </div>
      </main>
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;