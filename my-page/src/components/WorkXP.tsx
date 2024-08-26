import { Link, useLocation } from "react-router-dom";


import Background from "../assets/PORTFOLIO.gif";
import { useEffect, useState } from "react";

const WorkXP = () => {

   const [showDetails, setShowDetails] = useState(false);
   const location = useLocation();
   const [isPhone, setisPhone] = useState(false);

   const isActive = (path: string) => location.pathname === path;

   const handleMouseEnter = () => {
     setShowDetails(!showDetails);
   };

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
         <section
           className={`absolute ${
             isPhone ? "bottom-0 mx-0  bg-gray-200/75" : "top-30"
           } right-0   mt-8 mx-2 flex flex-col items-evenly gap-4 ${
             showDetails
               ? " bg-white bg-opacity-60 rounded-lg p-2 "
               : "rounded-lg p-2 flex flex-col items-center "
           }  ${showDetails && isPhone ? "overflow-y-auto max-h-60" : ""}`}
         >
           <h3
             className="text-2xl font-semibold text-center"
             onClick={handleMouseEnter}
           >
             Security Administrator
           </h3>

           {showDetails && (
             <>
               <h2 className="px-3 text-center">At the Swedish Parliament</h2>
               <ul className="m-5">
                 <li className="max-w-96">
                   Experience: During my time at the Swedish Parliament I was
                   taught basic IT concepts regarding security, as well as
                   professionalism at a high level.
                   <br />
                   <br />
                   Additionally, my time as a security administrator taught me
                   how to handle and respond quickly to unexpected events that
                   required immediate solution.{" "}
                 </li>
                 <li>Duration: August 2022 - August 2023</li>
               </ul>
             </>
           )}
           <h3
             className="text-2xl font-semibold text-center"
             onClick={handleMouseEnter}
           >
             {" "}
             Board Member
           </h3>
           {showDetails && (
             <>
               <h2 className="px-3 text-center">At Chas Academy</h2>
               <ul className="m-5">
                 <li className="max-w-96">
                   Experience: Being elected as the Student representative at
                   Chas Academy's council came with the responsibility of taking
                   in multiple peoples opinions in account. then systematically
                   producing a well-versed opinion on the matter which took my
                   fellow students voice in account. <br /> <br />
                   This taught me how to listen well in a work environment, as
                   well as the importance of details, and the impact of seeing
                   seemingly small things resolved; instead of leaving them to
                   fester.{" "}
                 </li>
                 <li>Duration: September 2023 - </li>
               </ul>
             </>
           )}
           <h3
             className="text-2xl font-semibold text-center"
             onClick={handleMouseEnter}
           >
             Chairman
           </h3>
           {showDetails && (
             <>
               <h2 className="px-3 text-center">
                 At Chas Academy's Student Association
               </h2>
               <ul className="m-5">
                 <li className="max-w-96">
                   Experience: Lorem ipsum dolor sit amet, consectetur
                   adipiscing elit.{" "}
                 </li>
                 Duration: May 2024-
               </ul>
             </>
           )}
           <h3></h3>
           <h3></h3>
         </section>
       </main>
     </div>
   );
}



export default WorkXP