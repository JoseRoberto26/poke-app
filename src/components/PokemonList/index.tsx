import React from 'react';
import { Pokemon } from '../../models/pokemon';
import { PokemonListItem } from './PokemonListItem';
import style from './style.module.scss';

export interface IPokemonList { 
    list?: Pokemon[];
    onClick: (selected: Pokemon | null) => void;
}

export const PokemonList = ({list, onClick}: IPokemonList) => { 
    return (
        <div className={style.list}>
            {list?.map((pokemon) => (
                <PokemonListItem onClick={onClick} className={style.listItem} item={pokemon}/>
            ) )}
        </div>
    )
}