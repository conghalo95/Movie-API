"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Apiaxios } from "../axiosapi/axiostest";

export const Testapi = ({ data }) => {
    const url = Apiaxios("https://66192ba89a41b1b3dfbf193f.mockapi.io/song")
      
    return(
        <div>
            <Apiaxios />
            {data.map((item, index) => {
                <div>{item.name}</div>
            })}
        </div>
    );
};