import React from 'react';

 

interface SelectProps {
  
  
}

const Title: React.FC<SelectProps> = () => {
 
 
 
 

  return (<div>
    <div> 
        <header className="flex flex-col items-center ml-8 text-5xl font-bold bg-clip-text bg-[linear-gradient(180deg,#FF8ED0_0%,#FB8971_100%)] leading-[59.4px] text-blue-950 max-md:max-w-full max-md:text-4xl">
        <h1>
          <span className="text-blue-950">Career Scope </span>
          <span className="text-gradient-pink-orange ml-2">Predictor Tools</span>
        </h1>
      </header> </div>
      <p className="ml-8 md:mb-10 self-center mt-2 text-[28px] font-light tracking-tight leading-7 text-[#525252] max-md:max-w-full max-md:text-base josefin-sans-font">
        Choosing a career? Know about its scope in later years
      </p>
       </div>
    
  );
};

export default Title;
