import { Link, useLocation } from "react-router-dom";


import Background from "../assets/PORTFOLIO.gif";
import { useEffect, useState } from "react";
import Positioner from "../ui/Positioner";

const WorkXP = () => {

   const [showDetails, setShowDetails] = useState(true);
   const location = useLocation();
   const [isPhone, setisPhone] = useState(false);

   const isActive = (path: string) => location.pathname === path;

  //  const handleMouseEnter = () => {
  //    setShowDetails(!showDetails);
  //  };

   useEffect(() => {
     const handleResize = () => {
       setisPhone(window.innerWidth < 600); 
       setShowDetails(true)
     };

     handleResize(); 
     window.addEventListener("resize", handleResize);

     return () => {
       window.removeEventListener("resize", handleResize);
     };
   }, []);

   return (
     <div className="relative h-screen flex justify-center items-center p-4 sm:p-6 ">
       <main className="relative z-10 w-full max-w-11/12 h-full flex flex-col justify-start items-start border-2 border-black sm:p-0 sm:m-3 overflow-hidden ">
         <img
           src={Background}
           alt="Background"
           className="w-full h-auto max-h-full object-cover flex-grow "
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
                 isActive("/contact") ? "bg-black text-white" : "hover:bg-white"
               }`}
               to="/contact"
             >
               Contact
             </Link>
           </ul>
         </section>

<Positioner>


  {/* Security Administrator */}
  <div
    className={`transition-all duration-300 ${
      showDetails
      ? "bg-white shadow-lg rounded-lg p-4 sm:p-6"
      : "rounded-lg p-3 bg-gray-100 shadow-md"
    } ${isPhone ? "max-h-40 overflow-auto" : "max-h-full"}`}
    >
    <h3 className="text-xl sm:text-2xl font-semibold text-center text-gray-800">
      Security Administrator
    </h3>
    {showDetails && (
      <>
        <h2 className="px-2 sm:px-3 text-center text-gray-600">
          At the Swedish Parliament
        </h2>
        <ul className="m-4 sm:m-5 text-sm sm:text-base text-gray-700">
          <li>Duration: August 2022 - August 2023</li>
        </ul>
      </>
    )}
  </div>

  {/* Board Member */}
  <div
    className={`transition-all duration-300 ${
      showDetails
        ? "bg-white shadow-lg rounded-lg p-4 sm:p-6"
        : "rounded-lg p-3 bg-gray-100 shadow-md"
      } ${isPhone ? "max-h-40 overflow-auto" : "max-h-full"}`}
      >
    <h3 className="text-xl sm:text-2xl font-semibold text-center text-gray-800">
      Board Member
    </h3>
    {showDetails && (
      <>
        <h2 className="px-2 sm:px-3 text-center text-gray-600">
          At Chas Academy
        </h2>
        <ul className="m-4 sm:m-5 text-sm sm:text-base text-gray-700">
          <li>Duration: September 2023 - </li>
        </ul>
      </>
    )}
  </div>

  {/* Vice President */}
  <div
    className={`transition-all duration-300 ${
      showDetails
      ? "bg-white shadow-lg rounded-lg p-4 sm:p-6"
      : "rounded-lg p-3 bg-gray-100 shadow-md"
    } ${isPhone ? "max-h-40 overflow-auto" : "max-h-full"}`}
    >
    <h3 className="text-xl sm:text-2xl font-semibold text-center text-gray-800">
      Vice President
    </h3>
    {showDetails && (
      <>
        <h2 className="px-2 sm:px-3 text-center text-gray-600">
          At Chas Academy's Student Association
        </h2>
        <ul className="m-4 sm:m-5 text-sm sm:text-base text-gray-700">
          <li>Duration: May 2024 - </li>
        </ul>
      </>
    )}
  </div>
       </Positioner>


       </main>
     </div>
   );
  }
  
  
  
  export default WorkXP