
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Projects from "../components/Projects";
import WorkXP from "../components/WorkXP";
import About from "../components/AboutMe";
import ErrorPage from "../components/Errorpage";
import ContactPage from "../components/ContactPage";

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
    element: <ContactPage/>,
    errorElement: <ErrorPage />,
  },
]);

export default router
