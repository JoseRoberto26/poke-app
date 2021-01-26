import React from 'react';
import style from './style.module.scss';

export interface IAboutInfoCard { 
    info: string;
    label: string;
    size?: string;
}

export const AboutInfoCard = ({info, label, size}: IAboutInfoCard) => { 

    return (
        <div className={style.infoCard}>
            <label className={style.labelText}>{label}</label>
            <label className={style.labelInfo}>{info}</label>
        </div>
    )
}
