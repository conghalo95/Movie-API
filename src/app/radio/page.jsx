"use client"
import React, { useState, useEffect } from "react";
import Radiotitle from "../components/layouts/radiotitle";
import axios from "axios";

const Radio = () => {
    
    const [data, setData] = useState([]);
    const baseURL = "https://66192ba89a41b1b3dfbf193f.mockapi.io/song";
    
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const respond = await axios ({
            url: baseURL,
            method: "get",
            
        });
        console.log("respond", respond);
        setData(respond.data);
    };

    return(
        <div>
            <Radiotitle />
            <div className="grid grid-cols-3 gap-x-4 px-10 py-10">
                {data.map((item, index) => {
                    if (index < 3) {
                        return(
                            <div className="w-full h-full relative rounded-lg overflow-hidden bg-neutral-800">
                                <img src="/1.jpg" className="w-full h-72 object-cover bg-neutral-400" alt="" />
                                <p className="mt-4 ms-4 font-semibold">{item.name}</p>
                                <p className="font-light text-sm ms-4 mb-4">{item.singer}</p>
                            </div>
                        )
                    }
                })}
            </div>
            <div className="mt-10 grid grid-cols-6 gap-4 px-10 py-10">
                {data.map((item, e) => {
                    if (e > 4 && e < 17) {
                        return (
                            <div className="w-full h-full overflow-hidden">
                                <img src="/2.png" className="w-72 h-60 mb-2 object-cover bg-neutral-400 rounded-lg" alt="" />
                                <p className="text-xs font-semibold">{item.name}</p>
                                <p className="text-xs text-neutral-500">{item.gerne}</p>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    );
};

export default Radio;