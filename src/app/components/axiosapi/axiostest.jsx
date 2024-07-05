import axios from "axios";
import React, { useEffect, useState } from "react";

export const Apiaxios = url => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            axios
                .get(url)
                .then(response => {
                    setIsLoaded(true);
                    setData(response.data);
                })
                .catch(error => {
                    setError(error);
                });
        };
        fetchData();
    }, [url]);

    return { error, isLoaded, data };
};

