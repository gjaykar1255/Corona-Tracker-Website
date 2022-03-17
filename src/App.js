import React,{useEffect,useState} from 'react';
import {Cards,Chart,CountryPicker}from './Components';
import useFetch from './api/useFetchCompo';
import coronaImage from './images/image.png'
import styles from './App.module.css'
const App=()=>{
    const url = 'https://covid19.mathdro.id/api';
    const [aCountry,setACountry]=useState(url);
    const [country,setCountry]=useState(undefined);
    //custom hooke
    const handleCountryChange=(value)=>{
        if(value===''){
            setCountry(undefined);
            setACountry(url);
        }
        else {
            setACountry(`${url}/countries/${value}`);
            setCountry(value);
        }
    }
    const data = useFetch(aCountry);
    return <>
        <div className={styles.containeer}>
            <img className={styles.image} src={coronaImage}alt="coronaImage" />
            <Cards data={data}/>
            <CountryPicker handleCountryChange={handleCountryChange} />
            {country ? <Chart aCountryData={data} country={country} /> : <Chart/>}
        </div> 
    </>
};
export default App;
