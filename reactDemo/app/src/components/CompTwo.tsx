import React from 'react';
import style from './commonStyle.module.css';

interface myProps{
    name:string,
    scroller:Function
}
const CompTwo = (props:myProps)=>{

    const message = props.name ? `Hellow ${props.name}` : `Welcome Guest`;

    return(
        <div className={style.compTwoContainer} >
            <h2>Component Two</h2>
            <h2>{message}</h2>
            <button onClick={()=> props.scroller()} className={style.button}>Scroll to Next Component</button>
        </div>
    )
}

export default React.memo(CompTwo);