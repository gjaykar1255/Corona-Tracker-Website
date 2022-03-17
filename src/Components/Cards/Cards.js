import React,{useEffect,useState} from 'react';
import CountUp from 'react-countup';
import cx from 'classnames';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css'
export const Cards=({data})=>{
    const [recovered, setRecovered] = useState(0);
    const [deaths, setDeaths] = useState(0);
    const [infected, setInfected] = useState(0);
    const [date,setDate]=useState('');
    useEffect(()=>{
        if(data.recovered!=undefined)
          setRecovered(data.recovered.value);
        if (data.confirmed != undefined)
            setInfected(data.confirmed.value);
        if (data.deaths != undefined)
            setDeaths(data.deaths.value);
        if (data.lastUpdate != undefined)
            setDate(new Date(data.lastUpdate).toDateString());
    },[data])
    return <>
    <div className="styles.containeer">
            <Grid container spacing={3} justifyContent='center'>
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card,styles.recovered)}>
                <CardContent>
                    <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                    <Typography variant='h5'>
                            <CountUp 
                            start={0}
                             end={ recovered } 
                             duration={2.5} 
                             separator=','/>
                        </Typography>
                    <Typography color='textSecondary'>{date}</Typography>
                    <Typography variant='body2'> No of active cases </Typography>
                </CardContent>
            </Grid>
                <Grid item component={Card} xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={deaths}
                                duration={2.5}
                                separator=',' />
                            </Typography>
                        <Typography color='textSecondary'>{date}</Typography>
                        <Typography variant='body2'> No of deaths in covid 19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant='h5'> <CountUp
                            start={0}
                            end={infected}
                            duration={2.5}
                            separator=',' />
                        </Typography>
                        <Typography color='textSecondary'>{date}</Typography>
                        <Typography variant='body2'> No of recovered from covid 19 </Typography>
                    </CardContent>
                </Grid>
        </Grid>
    </div>
    </>
}
