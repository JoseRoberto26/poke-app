import React from 'react';
import { useHistory } from 'react-router-dom';
import style from './style.module.scss';

export const BackButton = () => { 

    const history = useHistory();

    return (
        <div onClick={() => history.goBack()} className={style.backButton}>
            <h1> L </h1>
        </div>
    )
}