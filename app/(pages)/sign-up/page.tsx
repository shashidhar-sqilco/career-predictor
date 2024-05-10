//sign-in page.tsx
"use client";

import React, { useState } from "react";

import axios from "axios";
import { useRouter } from 'next/navigation';
export default function SignupPage() {
    const router = useRouter(); // Initialize useRouter hook

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "", // Add confirmPassword field
        phone: ""
    });

    const handleChange = (e: { target: { id: any; value: any; }; }) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            // Send a POST request to your API endpoint
            const response = await axios.post("/api/signup/", formData);

            // Handle the response from the server
            console.log(response.data); // Log the response data

            // Redirect the user to the sign-in page
            router.push('/api/sign-in');
        } catch (error) {
            console.error("Error:", error); // Log any errors
            // Optionally, you can show an error message to the user
        }
    };

    return (
        <form action={() => handleSubmit} >
            <div className="flex justify-center mt-3 items-center min-h-screen bg-gray-300">
                <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-xl p-8 pb-3 mt-3">
                    <h2 className="text-2xl font-bold font-serif mb-2 text-center text-black">
                        Sign-up
                    </h2>


                    <div className="mb-3">

                        <input
                            type="text"
                            id="name"
                            className="mt-3 block w-full py-2 border-b-2 rounded border-red-100 focus:outline-none focus:border-blue-500 sm:text-sm   text-black"
                            placeholder="Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-4">

                        <input
                            type="email"
                            id="email"
                            className="mt-3 block w-full py-2 border-b-2 rounded border-gray-300 focus:outline focus:border-blue-500 sm:text-sm  text-black"
                            placeholder="Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="mt-3 block w-full py-2 border-b-2 rounded border-gray-300 focus:outline-none focus:border-blue-500 sm:text-sm  text-black"
                                placeholder="Password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 px-3 flex items-center"
                                onClick={togglePasswordVisibility}

                            >
                                {showPassword ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="#C0C0C0"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="#C0C0C0"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>




                    </div>
                    <div className="mb-4">
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="confirmPassword"
                                className="mt-3 block w-full py-2 border-b-2 rounded border-gray-300 focus:outline-none focus:border-blue-500 sm:text-sm font-serif text-black"
                                placeholder="Confirm you password"
                                required
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 px-3 flex items-center"
                                onClick={togglePasswordVisibility}

                            >
                                {showPassword ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="#C0C0C0"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="#C0C0C0"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>



                        <div className="mb-3">

                            <input
                                type="tel"
                                id="phone"
                                className="mt-3 block w-full py-2 border-b-2 rounded border-gray-300 focus:outline-none focus:border-blue-500 sm:text-sm font-serif text-black"
                                placeholder="Phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>


                    <div>
                        <button

                            onClick={handleSubmit}
                            type="submit"
                            className="mt-3 w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-6 font-serif"
                        >
                            Sign Up
                        </button>

                        <p className="mt-2 text-xs text-gray-600 text-center">
                            Already a member?{" "}
                            <a
                                href="/api/sign-in"
                                className="  text-blue-600 hover:underline  text-xs"
                            >
                                Sign In
                            </a>
                        </p>
                    </div>
                    <p className="mt-3 text-xs text-gray-600 text-center mb-4">
                        By creating an account you agree <br></br> to abide by  &nbsp;
                        <a href="#" className="border-b border-gray-500 border-dotted">
                            Terms of Service &nbsp;
                        </a>
                        and its
                        <a href="#" className="border-b border-gray-500 border-dotted">
                            &nbsp; Privacy Policy
                        </a>
                    </p>

                </div>
            </div>
        </form>
    );
}