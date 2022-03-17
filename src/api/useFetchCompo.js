import {useEffect,useState} from 'react';
const useFetch=(url)=>{
    const [data,setData]=useState({});
    const getData=async()=>{
        const responseData=await(await fetch(url)).json()
        setData(responseData);
    }
    useEffect(()=>{
        getData();
    },[url]);
    return {...data};
};
export default useFetch;