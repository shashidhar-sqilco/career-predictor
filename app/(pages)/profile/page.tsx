"use client";

import { signOut, useSession } from "next-auth/react";
import React from "react";

const Profile = () => {

  const {data:session} = useSession();

  return (
    <div
      className="min-h-screen py-20"
      style={{
        backgroundImage: `url("/background.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full  grid place-items-center mx-auto py-80 px-150 gap-6 bg-white">
        <span className="text-4xl tracking-wide font-semibold capitalize text-[#5D7DF3]">
          welcome to my profile
        </span>
        {session?.user.name && <span className="text-2xl tracking-normal py-10 font-semibold">{session.user?.name}</span>}

        <button onClick={()=> signOut()} className="bg-slate-950 text-white rounded text-lg w-auto px-6 py-3 uppercase">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;