import React from "react";

const Subscriptionads = () => {
    return(
        <div className="absolute bottom-0 flex w-full h-20 px-6 items-center bg-rose-600">
            <div className="grow">
                <p className="font-semibold text-lg">Get over 100 million songs free for 1 month.</p>
                <p className="text-[13px] font-light">Plus your entire music library on all your devices. 1 month free, then 65000 đ/months</p>
            </div>
            <div>
                <button className="w-32 h-8 bg-white rounded text-black text-sm font-semibold">Try it free</button>
            </div>
        </div>
    );
};

export default Subscriptionads;