import React from 'react';

 

interface SelectProps {
  
  
}

const Description: React.FC<SelectProps> = () => {
 
 
 
 

  return (
    <div className=" max-md:w-auto  mr-20 "> 
          
          <div id='works' className="flex flex-col ml-[108px]  mt-10 p-5  w-full bg-[#F6F6F6] max-w-[1480px] max-md:px-5 max-md:mt-10 max-md:max-w-full ">
                 <div className="font-lato tracking-wide leading-[100%] pl-5 pt-5 pr-5 text-[#171717] font-semibold max-md:max-w-full text-[Text/text-body]">
                  How it works
                 </div>
                  <div className=" josefin-sans-font p-4 leading-4 text-[Text/text-subtle] max-md:max-w-full max-md:text-base text-[#525252]">
                
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
                  justo a nulla lobortis tincidunt. Nunc malesuada quam ex, et
                  ullamcorper elit lacinia in. Morbi vehicula luctus velit. In nisi
                  purus, malesuada ut erat sit amet, dignissim vulputate est. Nullam sed
                  dui nec metus sagittis consequat.
                  </div>
          </div>
    </div>
  );
};

export default Description ;