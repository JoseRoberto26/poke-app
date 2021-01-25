import React from 'react';
import { capitalize } from '../../utils/formatters';
import style from  './style.module.scss';

interface InfoProps { 
    label: string; 
    value: string;
}

export const Info = ({label, value}: InfoProps) =>  { 

    return ( 
        <div className={style.infoBox}>
            <label>{label}:</label>
            <label className={style.valueLabel}>{capitalize(value)}</label> 
        </div>
    )
} 