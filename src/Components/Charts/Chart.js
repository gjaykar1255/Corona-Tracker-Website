import React,{useEffect,useState} from 'react';
import  useFetch from '../../api/fetchChart';
import {Line,Bar} from 'react-chartjs-2';
import styles from'./Chart.module.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
export const Chart = (props) => {
   const data=useFetch();
   const[isDataAvail,setIsDataAvail]=useState(false);
   useEffect(()=>{
           if (data.length !== 0) {
               setIsDataAvail(true);
           } 
   },[data]);
   const myChart=(
   isDataAvail&&<Line 
               data={
                   {
                       labels: data.map(({date}) =>date),
                       datasets: [
                           {
                               label: 'Infected',
                               data: data.map(({infected}) => infected),
                               borderColor: '#3333ff',
                              fill:true,
                           },
                           {
                               label: 'Deaths',
                               data: data.map(({deaths}) =>deaths),
                               borderColor: 'rgba(255,0,0,0.5)',
                               fill: true
                           }
                       ],
                   }
               }
               />
       )
    return <>
       <div className={styles.container}>
            {(props.country&&props.aCountryData.dailySummary==undefined) ?<BarChart country={props.country} {...props.aCountryData} />:myChart} 
       </div>
    </>
}
const BarChart=(props)=>{
   return  <Bar
        data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [
                {
                    label: 'People',
                    backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                    data: [props.confirmed.value, props.recovered.value, props.deaths.value]
                }
            ],
        }}
        options={{
            legend: { display: false},
            plugins: {
                title: {
                    display: true,
                    text: `${props.country}`
                }
            } ,
        }}
    />
}
