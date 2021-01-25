import React from 'react';
import style from './style.module.scss';

export interface TypeTag { 
    type: string;
}

export const TypeTag = ({type}: TypeTag) => { 

    return ( 
        <div className={style.tag}>
            <span>{type}</span>
        </div>
    )
}