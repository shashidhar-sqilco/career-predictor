"use client";
 
 
 
 
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
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
        signIn("google",{redirect:true ,  callbackUrl: "/"  });
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
        <div>
        


<div className="min-h-screen flex flex-col items-center justify-center content-center bg-white">
  <div className="flex flex-col bg-white   px-4 sm:px-6 md:px-8 lg:px-10 py-8   w-full max-w-md">
                    <div className="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Login To Your Account</div>
                    

                        <div className=' flex items-center justify-center gap-2 md:gap-1 mt-6' >

                    <button id="google"
                        onClick={handleGoogleSignIn}
                        className="bg-white text-white rounded  "
                        style={{ flex: '0 0 auto' }}
                        > 
                            
                       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="42" height="42" viewBox="0 0 48 48">
<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>
                    </button>

                    <button id="github"
                        onClick={handleGitHubSignIn}
                        className="bg-white text-white rounded   "
                        style={{ flex: '0 0 auto' }}
                    >
                        <div className="bg-white p-1 rounded-full">
                            <svg className="w-12" viewBox="0 0 32 32">
                                <path fillRule="evenodd"
                                    d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z" />
                            </svg>
                        </div>
                    </button>

                    <button id="facebook" className="w-8 mr-4" onClick={handleFacebookSignIn} style={{ flex: '0 0 auto' }} >

                    
 
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48"> <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path> </svg>
                    </button>


                    <button id="linkedin" className='p-2' style={{ flex: '0 0 auto' }} onClick={handleLinkedInSignIn}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="#0077B5" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>

                    </button>
                </div>
     
     <div className="relative mt-10 h-px bg-gray-300">
      <div className="absolute left-0 top-0 flex justify-center w-full -mt-2">
        <span className="bg-white px-4 text-xs text-gray-500 uppercase">Or Login With Email</span>
      </div>
    </div>
    <div className="mt-10">
      <form action="handleSubmit">
        <div className="flex flex-col mb-6">
          <label htmlFor="email" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </div>

            <input id="email" value={email}   onChange={(e) => setEmail(e.target.value)}
                              type="email" name="email" className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full md:w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
          <div className="relative">
            <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
              <span>
                <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
            </div>

       <input id="password"
                type="password"
                name="password"
                className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
               placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
                                    />
          </div>
        </div>

        <div className="flex items-center mb-6 -mt-4">
          <div className="flex ml-auto">
            <a href="#" className="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700">Forgot Your Password?</a>
          </div>
        </div>

        <div className="flex w-full">
        <button type="submit" onClick={handleSubmit } className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-[#212121] hover:bg-[#7A7A7A] rounded py-2 w-full transition duration-150 ease-in">
            <span className="mr-2 uppercase">Login</span>
            <span>
              <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </button>
                            </div>
                             {message && <p className="text-red-700 ml-16 font-bold">{message}</p>}
      </form>
    </div>
   <div className="flex justify-center items-center mt-6">
  <p className="mt-2 text-center text-gray-600 text-xs">
    Don&apos;t have an account?{" "}
    <a
      href="/api/sign-up"
      className="font-bold text-blue-600 hover:underline text-xs"
    >
      Sign Up
    </a>
  </p>
</div>
  </div>
                </div>
             
      </div>
    );
}
 
 
export default Login;
