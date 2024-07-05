"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import PLaythehit from "../layouts/playthehit";
import Hoverbutton from "../button/hoverbutton";
import Mustpick from "../layouts/mustpick";

const Axioscallapi = () => {
    const [data, setData] = useState([]);
    const [showButton, setShowButton] = useState(false);


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
        <div className="px-10">
            <div className="flex gap-x-4 mt-10">
                {data.map((item, index) => {
                    if (index < 3) {
                        return (
                            <div className="w-full h-full relative overflow-hidden">
                                <img src="/9.jpg" className="w-full h-72 rounded-lg object-cover bg-neutral-400" alt="" />
                                <p className="mt-2 font-semibold">{item.name}</p>
                                <p className="font-light text-sm">{item.singer}</p>
                                <div className="w-full h-72 absolute top-0" id="test" onMouseEnter={(e) => setShowButton(true)} onMouseOut={(e) => setShowButton(false)}>
                                    {showButton && <Hoverbutton />}
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <PLaythehit />
            <div className="mt-10 grid grid-cols-6 gap-4">
                {data.map((item, e) => {
                    if (e > 4 && e < 17) {
                        return (
                            <div className="w-full h-full overflow-hidden">
                                <img src="/19.jpg" className="w-72 h-60 mb-2 object-cover bg-neutral-400 rounded-lg" alt="" />
                                <p className="text-xs font-semibold">{item.name}</p>
                                <p className="text-xs text-neutral-500">{item.gerne}</p>
                            </div>
                        )
                    }
                })}
            </div>
            <Mustpick />
            <div className="mt-10 grid grid-cols-6 gap-4">
                {data.map((item, e) => {
                    if (e > 18 && e < 31) {
                        return (
                            <div className="w-full h-full overflow-hidden">
                                <img src="/10.jpg" className="w-72 h-60 mb-2 object-cover bg-neutral-400 rounded-lg" alt="" />
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

export default Axioscallapi;