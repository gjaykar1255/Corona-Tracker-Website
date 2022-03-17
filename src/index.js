import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styles from './module.index.css'
const MainComponent=()=>{
    return <>
    <div className={styles.pink} >
            <App />
    </div>
    </>
}
ReactDOM.render(<MainComponent/>,document.getElementById('root'));