import React from "react";
import Playerbutton from "../button/player";
import Playbar from "../button/playbar";
import Soundbutton from "./sound";

const Navbar = () => {
    return (
        <div className="grid grid-cols-7 h-16 items-center bg-neutral-800 shadow">
            <Playerbutton />
            <Playbar />
            <Soundbutton />
        </div>
    );
};

export default Navbar;