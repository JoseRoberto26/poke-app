import React from 'react';
import style from './style.module.scss';

export interface IPokeballIcon { 
    animated?: boolean;
    className?: string; 
}

export const PokeBallIcon = ({animated, className}: IPokeballIcon) => { 

    return ( 
        <img className={`${animated ? style.animated : ''} ${className}`} src={require('../../assets/icons/pokeball_icon.png').default}/>
    )
}
