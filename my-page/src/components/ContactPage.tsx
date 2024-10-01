
import { Link } from 'react-router-dom';
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import Background from "../assets/PORTFOLIO.gif";
import PositionerCenter from '../ui/PositionerCenter';
 const isActive = (path: string) => location.pathname === path;

const ContactPage = () => {
    return (
      <>
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
                      isActive("/about")
                        ? "bg-black text-white"
                        : "hover:bg-white"
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

<PositionerCenter>

              <section className=" flex flex-col items-center justify-center border border-gray-300 bg-slate-100 opacity-90 shadow-lg rounded-lg p-8 z-9">
                <h2 className="font-bold text-4xl mb-6 text-gray-800">
                  Contact Me
                </h2>
                <p className="text-lg mb-8 text-center max-w-md text-gray-600">
                  Feel free to reach out to me at any time, <br></br> I'll look forward to making something great with you!
                </p>
                <div className="flex gap-10">
                  <a
                    href="mailto:gkassarp@gmail.com"
                    className="hover:text-gray-700 transition-transform transform hover:scale-110"
                    >
                    <CgMail className="text-4xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gabriel-kassarp-999712291/"
                    className="hover:text-gray-700 transition-transform transform hover:scale-110"
                    >
                    <FaLinkedin className="text-4xl" />
                  </a>
                  <a
                    href="https://github.com/GaKa00"
                    className="hover:text-gray-700 transition-transform transform hover:scale-110"
                    >
                    <FaGithub className="text-4xl" />
                  </a>
                  <a
                    href="https://wa.me/460760260893"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-700 transition-transform transform hover:scale-110"
                    >
                    <FaWhatsapp className="text-4xl" />
                  </a>
                </div>
              </section>
                    </PositionerCenter>
            </div>
          </main>
        </div>
      </>
    );
}

export default ContactPage
