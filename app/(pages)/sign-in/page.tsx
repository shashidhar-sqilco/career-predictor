"use client";
 
 
 
 
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import React from "react";
import { data } from "autoprefixer";

const Login = () => {
   const [showPassword, setShowPassword] = useState(false); 
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  const [error, setError] = useState("");
    const router = useRouter();
   
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    return setUser((prevInfo) => ({ ...prevInfo, [name]: value }));
  };
 const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        throw new Error(res.error);
      }

      router.push("/");
    } catch (error) {
      console.error(error);
      setMessage("Authentication failed. Please check your credentials.");
    } finally {
      setEmail("");
      setPassword("");
    }
  };
      const handleGoogleSignIn = () => {
        signIn("google", { callbackUrl: "/" });
    };

    const handleGitHubSignIn = () => {
        signIn("github", { callbackUrl: "/" });
    };

    const handleFacebookSignIn = () => {
        signIn("facebook", { callbackUrl: "/" });
    };
    const handleLinkedInSignIn = () => {
        signIn("linkedIn", { callbackUrl: "/" });
    };
  return (
   <div className="flex justify-center mt-3 items-center min-h-screen bg-gray-300">
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-xl p-8 pb-3 mt-3">
                <h2 className="text-xl font-bold font-serif mb-2 text-center text-black">
                    Sign In With Social Network
                </h2>


                <div className='ml-10' style={{ display: 'flex', gap: '10px' }}>

                    <button id="google"
                        onClick={handleGoogleSignIn}
                        className="bg-white text-white rounded  "
                        style={{ flex: '0 0 auto' }}
                    >
                        <svg className="w-7" viewBox="0 0 533.5 544.3">
                            <path
                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                              />
                            <path
                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                fill="#34a853" />
                            <path
                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                fill="#fbbc04" />
                            <path
                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                fill="#ea4335" />
                        </svg>
                    </button>

                    <button id="github"
                        onClick={handleGitHubSignIn}
                        className="bg-white text-white rounded   "
                        style={{ flex: '0 0 auto' }}
                    >
                        <div className="bg-white p-1 rounded-full">
                            <svg className="w-10" viewBox="0 0 32 32">
                                <path fillRule="evenodd"
                                    d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z" />
                            </svg>
                        </div>
                    </button>

                    <button id="facebook" className="w-8" onClick={handleFacebookSignIn} style={{ flex: '0 0 auto' }} >

                        <svg viewBox="126.445 2.281 589 589" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a"></circle><path d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z" fill="#ffffff"></path></g></svg>

                    </button>


                    <button id="linkedin" className='p-2' style={{ flex: '0 0 auto' }} onClick={handleLinkedInSignIn}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="#0077B5" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>

                    </button>
                </div>
                <div className="my-6 border-b text-center">
                    <div
                        className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                        Or sign In with e-mail
                    </div>
                </div>

                <form className="mb-4" onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="email"
                            id="email"
                           onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="mt-4 block w-full py-2 border-b-2 rounded border-gray-300 focus:outline-none focus:border-blue-500 sm:text-sm   text-black"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-4">
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                 value={password}
                              
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-4 block w-full py-2 border-b-2 rounded border-gray-300 focus:outline-none focus:border-blue-500 sm:text-sm  text-black"
                                placeholder="Password"
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
                    
                <div className="flex items-center mb-4">
                    <input
                        id="remember_me"
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded   font-serif"
                    />
                    <label
                        htmlFor="remember_me"
                        className="ml-2 block text-sm text-gray-900  "
                    >
                        Remember me
                    </label>
                </div>
                <div className="text-sm">
                    <a
                        href="/Forgot-password"
                        className="text-blue-600 hover:underline  text-sm"
                    >
                        Forgot your password?
                    </a>
                </div>
                <div>
                    <button
                     

                        type="submit"
                        className="mt-6 w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline mb-6  "
                    >
                        Sign In
                        </button>
                        {message && <p className="text-red-700 ml-16 font-bold">{message}</p>}
                </div>


            </form>
                    <p className="mt-2 text-center text-gray-600  text-xs">
                        Don&apos;t have an account?{" "}
                        <a
                            href="/api/sign-up"
                            className="font-bold text-blue-600 hover:underline  text-xs"
                        >
                            Sign Up
                        </a>
                    </p>

            </div>
        </div>

      
    );
}
 
 
export default Login;
