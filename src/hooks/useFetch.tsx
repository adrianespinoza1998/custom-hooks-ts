import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosHeaders } from 'axios';
import { DataState, Response } from '../types';

export const useFetch = (url: string, method: string = "GET", headers: AxiosHeaders = new AxiosHeaders()) => {
    const [data, setData] = useState<DataState>({
        data: [],
        loading: true,
        error: null
    });

    const handleFetch = useCallback(async()=>{
        try{
            const response = await axios({
                url,
                method,
                headers
            });

            const dataApi: Response = await response.data;

            setData({
                data: dataApi.results,
                loading: false,
                error: null
            });
        }catch(error){
            console.log(error);

            setData({
                data: [],
                loading: false,
                error: (error as Error).message
            });
        }
    },[url]);

    useEffect(() => {
        if (data.data.length === 0) handleFetch();
    }, [url]);

    return {
        ...data,
    }
};
// export const useFetch = (url: URL) => {

//     const [dataState, setDataState] = useState<DataState>({
//         data: [],
//         loading: true,
//         error: null
//     });

//     const handleFetch = useCallback(
//         async () => {
//             try {
//                 const response = await fetch(url);

//                 if(!response.ok) throw new Error(response.statusText);

//                 const dataApi: Response = await response.json();

//                 setDataState( prev => ({
//                     ...prev,
//                     loading: false,
//                     data: dataApi.results
//                 }));

//             } catch (error) {

//                 setDataState( prev => ({
//                     ...prev,
//                     loading: false,
//                     error: (error as Error).message
//                 }));
//             }
//         },
//         [],
//     )

//     useEffect(() => {
//         if (dataState.data.length === 0) handleFetch();
//     }, []);

//     return {
//         ...dataState
//     }
// }