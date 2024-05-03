import WARHAMMERIMAGE from "../assets/Warhammer.png"

import Background from "../assets/PORTFOLIO.gif";
const Projects= () => {
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
        <Warhammer />
        <ChasChallenge />
        <Oasis />
      </main>
    </div>
  );
};





function Warhammer() {
    return (
      <article className="max-w-sm rounded overflow-hidden shadow-lg bg-purple-500 shadow-black">
        <img
          className="w-full"
          src={WARHAMMERIMAGE}
          alt="Sunset in the mountains"
        />
        <p className="text-white m-1">Artist:Laxmonaut</p>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">
            Warhammer Reading Companion
          </div>
          <p className="text-black text-base bg-slate-100 rounded-md text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #React
          </span>
          <span className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Node
          </span>
          <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Tailwind
          </span>
        </div>
      </article>
    );
}

function ChasChallenge(){

    return (
      <article className="max-w-sm rounded overflow-hidden shadow-lg bg-purple-500 shadow-black">
        <img
          className="w-full"
          src="/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Binge</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #React
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Tailwind
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </article>
    );
}

function Oasis(){

    return (
      <article className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Oasis</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </article>
    );
}
export default Projects