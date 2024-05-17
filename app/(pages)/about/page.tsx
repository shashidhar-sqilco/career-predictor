"use client";

import { signOut, useSession } from "next-auth/react";
import React from "react";

const Profile = () => {

  const {data:session} = useSession();

  return (
    <div
      className="min-h-screen py-20  bg-white"
    
    >
      <div className="w-full max-w-full   mx-auto bg-white">
        <span className="text-4xl tracking-wide font-semibold capitalize text-black">
          welcome to my about page
        </span>
        

        
      </div>
      <button onClick={()=> signOut()} className="bg-slate-950 text-white  ck rounded text-lg w-auto px-6 py-3 uppercase">
          Logout
        </button>
    </div>
  );
};

export default Profile;