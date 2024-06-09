
import { Link ,useLocation } from "react-router-dom";
import Background from "../src/assets/PORTFOLIO.gif";

function App() {

   const location = useLocation();

   const isActive = (path) => location.pathname === path;


  return (
   <div className="relative h-screen flex justify-center items-center p-6">
      <main className="relative z-10 w-full max-w-11/12 h-full flex flex-col justify-start items-start border-2 border-black sm:p-0 sm:m-3 overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={Background}
            alt=""
            className="w-full h-full object-cover pointer-events-none"
          />
          <section className="absolute top-0 left-0 m-8 gap-6">
            <h1 className="text-3xl">Gabriel Kassarp</h1>
            <h3 className="text-lg">Fullstack Developer</h3>
            <ul className="mt-40 space-y-5 flex flex-col">
              <Link
                className={`font-bold  p-1 rounded-lg opacity-75 ${
                  isActive("/projects")
                    ? "bg-black text-white"
                    : "hover:bg-white"
                }`}
                to="/projects"
              >
                Projects
              </Link>
              <Link
                className={`font-bold p-1 rounded-lg opacity-75 ${
                  isActive("/experience")
                    ? "bg-black text-white"
                    : " hover:bg-white"
                }`}
                to="/experience"
              >
                Experience
              </Link>
              <Link
                className={`font-bold p-1 rounded-lg opacity-75 ${
                  isActive("/about") ? "bg-black text-white" : " hover:bg-white"
                }`}
                to="/about"
              >
                About Me
              </Link>
              <Link
                className={`font-bold rounded-lg opacity-75 ${
                  isActive("/contact")
                    ? "bg-black text-white"
                    : " hover:bg-white p-1"
                }`}
                to="/contact"
              >
                Contact
              </Link>
            </ul>
          </section>

    </div>
      </main>
    </div>
  );
}

export default App;

