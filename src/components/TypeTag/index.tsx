import React from 'react';
import { TypesStyle } from '../../utils/typesStyle';
import style from './style.module.scss';

export interface TypeTag { 
    type: string;
}

export const TypeTag = ({type}: TypeTag) => { 

    return ( 
        <div style={{
            backgroundColor: TypesStyle[type]
        }} className={style.tag}>
            <span>{type}</span>
        </div>
    )
}