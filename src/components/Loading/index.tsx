import React from 'react';
import { PokeBallIcon } from '../PokeballIcon';
import style from './style.module.scss';

export const Loading = () => { 
    return ( 
        <div className={style.mask}>
            <PokeBallIcon animated />
        </div>
    )
}