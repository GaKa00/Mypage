import { useEffect, useState } from "react";

function Positioner({ children }: { children: React.ReactNode }) {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth < 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`${
        isPhone
          ? "absolute flex flex-col gap-4 items-center left-4 right-4 bottom-2 overflow-y-auto max-h-1/2"
          : "absolute flex flex-col gap-10 right-4 top-4"
      }`}
    >
      {children}
    </div>
  );
}


export default Positioner