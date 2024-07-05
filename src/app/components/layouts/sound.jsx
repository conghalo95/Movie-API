"use client"
import React, { useState } from "react";
import Link from "next/link";


const Soundbutton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSignin = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="grid grid-cols-3 items-center col-span-2">
            <div className="flex col-span-2 items-center justify-center gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3 fill-neutral-500">
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                    <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
                </svg>
                <input type="range" min="1" max="100" className="w-24 h-1 rounded-full appearance-none bg-neutral-500" />
            </div>
            <div className="flex relative items-center justify-end pe-10 gap-x-2">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                        <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                    </svg>
                </button>
                <button className="w-24 h-8 rounded-md bg-rose-600 flex justify-center gap-x-2 items-center" onClick={toggleSignin}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                    </svg>
                    <p className="text-xs font-semibold">Sign In</p>
                </button>
                {isOpen && (
                    <div className="bg-neutral-800 rounded-md w-80 h-72 absolute top-14 z-30 text-black px-5 text-center content-center">
                        <svg className="mx-auto mb-5" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="88px" height="22px" viewBox="0 0 88 22" enable-background="new 0 0 88 22" xmlSpace="preserve">
                            <g>
                                <path fill="#ffffff" d="M14.225,11.631c-0.027-1.708,0.7-3.038,2.18-3.99c-0.834-1.232-2.065-1.925-3.693-2.079   c-0.579-0.056-1.319,0.083-2.22,0.42C9.522,6.346,8.977,6.527,8.856,6.527c-0.256,0-0.747-0.153-1.474-0.462   C6.656,5.757,6.037,5.604,5.525,5.604C4.664,5.617,3.863,5.859,3.124,6.328c-0.74,0.469-1.332,1.11-1.776,1.921   C0.782,9.258,0.5,10.462,0.5,11.862c0,1.26,0.208,2.52,0.625,3.78c0.39,1.204,0.888,2.261,1.493,3.171   c0.538,0.826,1.01,1.428,1.413,1.807c0.579,0.587,1.17,0.868,1.777,0.84c0.39-0.015,0.9-0.161,1.533-0.442   c0.592-0.265,1.184-0.397,1.776-0.397c0.552,0,1.124,0.133,1.716,0.397c0.659,0.281,1.198,0.421,1.614,0.421   c0.619-0.027,1.198-0.301,1.736-0.818c0.188-0.169,0.394-0.4,0.615-0.694c0.222-0.293,0.467-0.644,0.737-1.05   c0.188-0.294,0.373-0.608,0.555-0.945c0.182-0.336,0.346-0.692,0.495-1.071c0.067-0.153,0.127-0.311,0.181-0.472   s0.108-0.325,0.162-0.493c-0.498-0.224-0.949-0.54-1.352-0.946C14.689,14.054,14.238,12.947,14.225,11.631z" />
                                <polygon fill="#ffffff" points="28.86,15.375 28.762,15.375 24.664,5.867 21.445,5.867 21.445,21.207 24.25,21.207 24.25,11.272    24.38,11.272 27.806,19.161 29.773,19.161 33.188,11.272 33.318,11.272 33.318,21.207 36.156,21.207 36.156,5.867 32.959,5.867     " />
                                <path fill="#ffffff" d="M11.681,3.86c0.714-0.909,1.07-1.89,1.07-2.94c0-0.069,0-0.14,0-0.21s-0.007-0.14-0.02-0.21   c-0.499,0.028-1.026,0.189-1.585,0.483c-0.558,0.294-1.019,0.665-1.382,1.112c-0.727,0.883-1.09,1.827-1.09,2.836   c0,0.07,0,0.136,0,0.198c0,0.064,0.007,0.131,0.02,0.201C9.811,5.442,10.807,4.952,11.681,3.86z" />
                                <rect x="68.942" y="5.867" fill="#ffffff" width="3.153" height="15.34" />
                                <path fill="#ffffff" d="M81.618,8.306c1.87,0,2.859,1.461,2.859,3.034H87.5v-0.325c0-2.967-2.229-5.439-5.904-5.439   c-3.937,0-6.285,2.63-6.285,7.114v1.73c0,4.483,2.327,7.08,6.274,7.08c3.773,0,5.915-2.507,5.915-5.294v-0.337h-3.023   c0,1.585-0.968,2.899-2.837,2.899c-1.914,0-3.132-1.382-3.132-4.339V12.7C78.508,9.755,79.737,8.306,81.618,8.306z" />
                                <path fill="#ffffff" d="M48.215,15.555c0,2.057-1.185,3.191-2.925,3.191c-1.75,0-2.936-1.124-2.936-3.191V5.867h-3.131v10.137   c0,3.271,2.284,5.496,6.067,5.496c3.773,0,6.067-2.225,6.067-5.496V5.867h-3.142V15.555z" />
                                <path fill="#ffffff" d="M61.789,12.273l-2.25-0.517c-1.326-0.282-2.022-0.877-2.022-1.766c0-1.18,0.946-1.921,2.469-1.921   c1.717,0,2.576,1,2.652,2.079h2.936c-0.033-2.709-2.262-4.597-5.578-4.597c-3.142,0-5.621,1.675-5.621,4.687   c0,2.607,1.739,3.82,3.827,4.282l2.229,0.527c1.5,0.349,2.261,0.854,2.261,1.899c0,1.191-0.935,2.001-2.685,2.001   c-1.881,0-2.871-1.012-2.958-2.147h-3.023c0.044,2.17,1.458,4.698,5.829,4.698c3.675,0,5.947-1.854,5.947-4.867   C65.801,13.846,63.963,12.756,61.789,12.273z" />
                            </g>
                        </svg>
                        <p className="mt-5 font-bold text-white">Sign in</p>
                        <input type="text" name="" placeholder="Email or Apple ID" id="" className="rounded-md border w-full h-8 my-2 placeholder:text-xs ps-2" />
                        <input type="password" name="" id="" placeholder="Password" className="rounded-md border w-full h-8 mb-2 placeholder:text-xs ps-2" />
                        <button className="text-xs text-white"><Link href="">Don't have an account?<p className="hover:underline mt-2 bg-rose-600 rounded mx-5 content-center h-6 text-white">Sign-up here</p></Link></button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Soundbutton;