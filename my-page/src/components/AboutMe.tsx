import { useLocation, Link } from 'react-router-dom';
import Background from '../assets/PORTFOLIO.gif'

const About = () => {
  const location = useLocation();

const isActive = (path: string) => location.pathname === path;
  return (
    <div className="relative h-screen flex justify-center items-center p-4 sm:p-6">
      <main className="relative z-10 w-full max-w-11/12 h-full flex flex-col justify-start items-start border-2 border-black sm:p-0 sm:m-3 overflow-hidden">
        <div className="relative w-full h-full flex flex-col">
          <img
            src={Background}
            alt="Background"
            className="w-full h-auto max-h-full object-cover flex-grow"
          />
          <section className="absolute top-0 left-0 w-full p-4 sm:p-8 flex flex-col items-center sm:items-start gap-4">
            <h1 className="text-2xl sm:text-3xl text-center sm:text-left">
              Gabriel Kassarp
            </h1>
            <h3 className="text-base sm:text-lg text-center sm:text-left">
              Fullstack Developer
            </h3>
            <ul className="mt-10 sm:mt-40 space-y-3 sm:space-y-5 flex flex-col items-center sm:items-start">
              <Link
                className={`font-bold p-2 rounded-lg opacity-75 ${
                  isActive("/projects")
                    ? "bg-black text-white"
                    : "hover:bg-white"
                }`}
                to="/projects"
              >
                Projects
              </Link>
              <Link
                className={`font-bold p-2 rounded-lg opacity-75 ${
                  isActive("/experience")
                    ? "bg-black text-white"
                    : "hover:bg-white"
                }`}
                to="/experience"
              >
                Experience
              </Link>
              <Link
                className={`font-bold p-2 rounded-lg opacity-75 ${
                  isActive("/about") ? "bg-black text-white" : "hover:bg-white"
                }`}
                to="/about"
              >
                About Me
              </Link>
              <Link
                className={`font-bold p-2 rounded-lg opacity-75 ${
                  isActive("/contact")
                    ? "bg-black text-white"
                    : "hover:bg-white"
                }`}
                to="/contact"
              >
                Contact
              </Link>
            </ul>
          </section>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center border-black bg-slate-200  z-9">
            <h2 className="font-bold text-4xl">About me</h2>

            <div className=" flex  gap-10 m-8">
              <div className="">
                <h3 className="text-center">Hobbies</h3>
                <p className="max-w-64">
                  {" "}
                  During the time which I do not code, I tend to frequent the
                  gym. I am also a bit of a home cook, often experimenting which
                  may lead to a varied result of delicious dinners, or dumpster
                  fodder. I also practice juggling, as well as host my own
                  Dungeons and Dragons campaign. I am a massive fantasy enjoyer
                  with my favorite franshices including such as Warhammer 40K,
                  The Witcher and Game of Thrones.{" "}
                </p>
              </div>

              <div className="">
                <h3 className="text-center">Qualities</h3>
                <p className="max-w-64">
                  {" "}
                  As a developer in training, my passion for coding is like a
                  sponge, with a constant wish to prove and better myself. This
                  is not to be mistaken for brazen rashness though, as my
                  earlier positions at managemental roles has taught me
                  discipline and the value of teamwork. I am not afraid to take
                  risks, but attempt to remain well aware of my limits and seek
                  out a more qualified opinion if such is the case.{" "}
                </p>
              </div>

              <div className="">
                <h3>Skillset</h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About