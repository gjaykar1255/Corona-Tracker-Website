import React, { useEffect, useState } from 'react';
const url = 'https://covid19.mathdro.id/api'
const useFetch = () => {
    const[data,setData]=useState([]);
    const getData = async () => {
        const responseData=await (await fetch(`${url}/daily`)).json();
        const updatedData=responseData.map((element)=>({
            infected: element.confirmed.total,
            deaths:element.deaths.total,
            date:element.reportDate
        }))
        setData(updatedData);
    }
    useEffect(() => {
        getData();
    },[`${url}/daily`]);
    return data;
};
export const countries=async()=>{
    try{
        const data=await(await fetch(`${url}/countries`)).json();
        return {...data};
    }catch(error){
        console.log(error);
    }
}
export default useFetch;