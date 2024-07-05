"use client"
import React from "react";

const Footer = () => {
    return(
        <div className="w-full h-24 bg-neutral-800 content-center ps-10 text-[11px]">
            <div className="flex gap-x-2 divide-x divide-neutral-600 mt-1 mb-3">
                <button> 
                    <p className="hover:underline">Việt Nam</p>
                </button>
                <button>
                    <p className="ps-2 hover:underline">Tiếng Việt</p>
                </button>
            </div>
            <p className="mb-1">Copyright © 2024 <button><span className="hover:underline">Apple Inc.</span></button> All rights reserved.</p>
            <div className="mb-1">
                <ul className="flex gap-x-2 divide-x divide-neutral-600">
                    <li><button className="hover:underline">Internet Service Terms</button></li>
                    <li className="ps-2"><button className="hover:underline">Apple Music & Privacy</button></li>
                    <li className="ps-2"><button className="hover:underline">Coockie Warning</button></li>
                    <li className="ps-2"><button className="hover:underline">Support</button></li>
                    <li className="ps-2"><button className="hover:underline">Feedback</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;