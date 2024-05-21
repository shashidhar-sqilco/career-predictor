// Result.tsx
import React from 'react';
import { useState } from 'react';

const Result: React.FC<any> = ({infoCardData}) => {
  const [selectedYears, setSelectedYears] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);


  

  return (
    <div className="max-md:w-full lg:gap-6 flex flex-col md:flex-row h-auto ">
    <div className="flex flex-col  p-9 font-bold rounded-lg border  ml-auto h-auto md:h-auto border-red-400 border-solid shadow-sm leading-[100%] max-md:w-5/6  md:ml-[5vh] min-md:h-2/3 max-md:mt-5 min-h-[308px] max-w-[300px]" id="box1">
      
        <div className="text-base text-neutral-900">{infoCardData[0].title1}</div>
        <div className="mt-3 bold text-4xl bg-clip-text text-gradient-pink-orange">
          {infoCardData[0].value}
        </div>
        <div className="mt-6 text-sm font-medium tracking-wide leading-4 text-neutral-600">
          <span className="text-lg text-neutral-900">Why:</span>
          <br />
          <span className="font-light text-neutral-600 josefin-sans-font">{infoCardData[0].description}</span>
        </div>
      </div>

      <div className="flex flex-col  p-9 font-bold rounded-lg border ml-auto h-auto md:h-auto border-red-400 border-solid shadow-sm leading-[100%] max-md:w-5/6   md:ml-[5vh] min-md:h-2/3 max-md:mt-5 min-h-[308px] max-w-[300px]" id="box2">
        <div className="text-base text-neutral-900">{infoCardData[1].title2}</div>
        <div className="mt-3 bold text-4xl tracking-wide bg-clip-text text-gradient-pink-orange">
          {infoCardData[1].value}
        </div>
        <div className="mt-6 text-sm font-medium tracking-wide leading-4 text-neutral-600">
          <span className="text-lg text-neutral-900   mb-[28px]">Why:</span>
          <br />
          <span className="font-light text-neutral-600 josefin-sans-font mt-14">{infoCardData[1].description}</span>
        </div>
      </div>
    </div>
  );
};

export default Result;
