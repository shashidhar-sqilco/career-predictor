
"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
 


function NavBar() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <nav className="w-full bg-white fixed top-0 left-0 right-0 z-10">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            {/* LOGO */}
                        
                            
                          
                            {/* HAMBURGER BUTTON FOR MOBILE */}
                            <div className="md:hidden">
                                <button>
                                 
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-10 md:p-0 block' : 'hidden'
                                }`}
                        >
                            <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                                <li className="pb-4 text-md text-blue-950  py-3 md:px-6 text-center border-b-2 md:border-b-0 ">
                                    <Link href="/career-predictor" onClick={() => setNavbar(!navbar)}>
                                    Home
                                    </Link>
                                </li>
                                <li className="pb-4 text-md text-blue-950  py-3 md:px-6 text-center border-b-2 md:border-b-0 ">
                                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                                        About
                                    </Link>
                                </li>
                                <li className="pb-4 text-md text-blue-950  py-3 md:px-6 text-center border-b-2 md:border-b-0 ">
                                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                                        Blogs
                                    </Link>
                                </li>
                                <li className="pb-4 text-md font-semibold text-blue-950  py-3 md:px-6 text-center border-b-2 md:border-b-0 ">
                                    <Link href="/api/sign-in" onClick={() => setNavbar(!navbar)}>
                                        Sign In
                                    </Link>
                                </li>
                                <li className="pb-4 text-md text-blue-950  py-3 md:px-6 text-center border-b-2 md:border-b-0 ">
                                    <Link href="/api/sign-up" onClick={() => setNavbar(!navbar)}>
                                        Sign Up
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;