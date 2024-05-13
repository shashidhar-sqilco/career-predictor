"use client"
 
import React from 'react';
import {  SessionProvider } from "next-auth/react"

// Define the type of SessionProvider
 

const AuthProvider = ({ children }: any) => {
 return(
    <SessionProvider>
      {children}
    </SessionProvider>)
 
};
export default AuthProvider;


 