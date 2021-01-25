import React from 'react';
import './style.scss';

export interface ISmallCardProps { 
    title: string; 
    onClick?: () => void;
}

export const SmallCard = ({title, onClick}: ISmallCardProps) => { 

    const cardColors = [ 
        '#b5e486',
        '#000000',
        '#c3cdf7', 
        '#d0cfcf', 
        '#ff5555', 
        '#e6e65e',
        '#b76b4a'
    ]

    return ( 
        <div style={{
            backgroundColor: cardColors[Math.floor(Math.random() * 6)]
        }} className={'card'} onClick={onClick ?? undefined}>
            <label className={'cardLabel'}>
                {title}
            </label>
        </div> 
    )
}