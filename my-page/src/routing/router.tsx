
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Projects from "../components/Projects";
import WorkXP from "../components/WorkXP";
import About from "../components/AboutMe";
import ErrorPage from "../components/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/experience",
    element: <WorkXP />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
  },
]);

export default router
