import React from 'react';
import { Pokemon } from '../../models/pokemon';
import { PokemonListItem } from './PokemonListItem';
import style from './style.module.scss';

export interface IPokemonList { 
    list?: Pokemon[];
}

export const PokemonList = ({list}: IPokemonList) => { 
    return (
        <div className={style.list}>
            {list?.map((pokemon) => (
                <PokemonListItem item={pokemon}/>
            ) )}
        </div>
    )
}