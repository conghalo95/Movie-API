import React from "react";
import Axioscallapi from "../axiosapi/axiosfunction";

const Newplaylist = ({ data }) => {
    return(
        <div>
            <Axioscallapi data={data} />
            <div>
                {data.map((item, index) => {
                    return(
                        <div>
                            <p>{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Newplaylist;