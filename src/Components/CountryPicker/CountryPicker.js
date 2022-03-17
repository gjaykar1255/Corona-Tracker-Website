import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import {countries} from '../../api/fetchChart';
import {NativeSelect,FormControl} from '@material-ui/core'
import cx from 'classnames';
import styles from  './CountryPicker.module.css'
//native select will help us to select any country
export const CountryPicker = ({handleCountryChange}) => {
    const [data, setData] = useState([]);
    useEffect(()=>{
       const p=[];
       countries().then((dat)=>{ 
         for(var k of dat.countries){
             p.push(k);
         }
         setData(data.concat(p));
       }).catch((error)=>{
           console.log(error);
       })
    },[])
    return <>
         <FormControl  className={cx(styles.formControl)}>
            <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)} >
                <option value="">Global</option>
                {data.length>0&&<NewFile data={data}/> }
            </NativeSelect>
        </FormControl>
    </>
}
const NewFile=(props)=>{
   
    return <>
   {
       props.data.map((element,i)=>{
           return <option  key={i} value={element.name}>{element.name}</option>
       })
   }
    </>
}