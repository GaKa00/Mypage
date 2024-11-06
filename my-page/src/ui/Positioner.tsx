
import React from "react";

function Positioner({ children }: { children: React.ReactNode }) {
  // Limit children to a maximum of 8
  const limitedChildren = React.Children.toArray(children).slice(0, 8);

  // Split children into two columns of 4
  const row1 = limitedChildren.slice(0, 4);
  const row2 = limitedChildren.slice(4, 8);

  return (
    <div className="absolute top-36 left-1/4 flex flex-col gap-10">
      <div className="flex flex-row gap-4">
        {row1.map((child, index) => (
          <div key={index}>{child}</div>
        ))}
      </div>
      <div className="flex flex-row gap-4">
        {row2.map((child, index) => (
          <div key={index + 4}>{child}</div>
        ))}
      </div>
    </div>
  );
}

export default Positioner;
