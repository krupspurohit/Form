import React, { useState } from "react";

const Colour = (props) => {
  const [color, setColor] = useState("red");
  const handleClick = (name, bgColor) => {
    alert("Colour: " + name);
    setColor(bgColor);
  };
// aapde je commite kryu ae biju file hti
// color vari nti
// form nu folder j push vanu chhe aema alag alag 4 5 project chhe aetle 
// aam jo 2 minit mane kar va de samjavi dav hamana

  return (

    <>
      <div className="text-center font-bold ">
        Colour List
        <div className="font-normal text-white block w-fit">
          {props.list?.map((item) => (
            <div
              key={item.id}
              onClick={() => handleClick(item.name, item.bgcolor)}
              style={{ backgroundColor: item.bgcolor }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{ backgroundColor: color }}
        className="border-2 border-black w-[100px] h-[100px] m-auto my-5"
      ></div>
    </>
  );
};

export default Colour;
