"use client"
// CareerPredictor.tsx

import React, { useEffect, useState } from 'react';
import Title from './title';
import Description from './description';
import FormSelect from './form';
import Result from './result';
import Img from './image';


import { signIn, useSession } from 'next-auth/react';
 
import { getServerSession } from 'next-auth';
import { Navigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';

const infoCardData = [
  {
    title1: 'Number of jobs:',
    value: '2 Million',
    description:
      'Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.',
  },
  {
    title2: 'Average Salary:',
    value: '10 LPA',
    description:
      'Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.',
  },
];

const CareerPredictor: React.FC<any> = () => {
  
  const { data: session } = useSession();
  console.log(session)
  const [showRes, setShowRes] = useState(false);
  const [selectedValues, setSelectedValues] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(!!session);
  const router = useRouter(); 
  const  handleFormSubmit = (values: any) => {
       if (!isLoggedIn) {
      // User is not logged in, display a message or prompt to sign in
      router.push('/sign-in');
      return;
    }

    // User is logged in, handle form submission
    console.log('selected values are:', values);
    setSelectedValues(values);
    setShowRes(!showRes);
  };

  useEffect(() => {
    setIsLoggedIn(!!session);
  },[session]);
 
  return (

    <>
      <div className=" max-container  flex flex-col items-center py-11 mt-10 text-base bg-white max-md:px-5">
        <Title />
        <div className="flex-col-reverse lg:flex-row inline-flex ">
          <div className="md:mt-18 text-xl leading-7 min-ml-auto  md:ml-[108px]  text-neutral-900 md:max-lg:flex max-w-md">
            <FormSelect
               showRes={showRes}
              setShowRes={setShowRes}
              handleSubmit={handleFormSubmit}
              isLoggedIn={isLoggedIn}
            />
          </div>
          <div className="h-auto md:ml-auto md:mt-auto mt-10 ">
            {showRes ? <Result infoCardData={infoCardData} /> : <Img />}
          </div>
        </div>
        <div className="flex flex-row min-ml-auto mr-20 md:ml-[108px]">
          <Description />
        </div>
      </div>
    </>
  );
};

export default CareerPredictor;