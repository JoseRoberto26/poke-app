import React from 'react';
import style from './style.module.scss';

export interface ISmallCardProps { 
    title: string;
    index: number;
    onClick?: () => void;
}

export const SmallCard = ({title, onClick, index}: ISmallCardProps) => { 

    const cardColors = [ 
        '#A8A878',
        '#F08030',
        '#6890F0', 
        '#78C850', 
        '#F8D030', 
        '#F85888',
        '#98D8D8',
        '#B8B8D0'
    ]

    return ( 
        <div style={{
            backgroundColor: cardColors[index]
        }} className={style.card} onClick={onClick ?? undefined}>
            <label className={style.cardLabel}>
                {title}
            </label>
        </div> 
    )
}