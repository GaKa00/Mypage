
import Background from "../assets/PORTFOLIO.gif";
const WorkXP = () => {
  return (
    <div className="relative h-screen flex justify-center items-center p-6">
      <main className="relative z-10 w-full max-w-11/12 h-full flex flex-col justify-start items-start border-2 border-black sm:p-0 sm:m-3 overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={Background}
            alt=""
            className="w-full h-full object-cover pointer-events-none"
          />

          {/* add large experience list in right side */}
        </div>

     
      </main>
    </div>
  );
}

export default WorkXP
