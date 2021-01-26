import React, { useEffect, useState } from 'react';
import { Pokemon } from '../../../models/pokemon';
import { fetchPokemonInfo } from '../../../services/pokemonService';
import { capitalize, formatPokemonNumber } from '../../../utils/formatters';
import { TypeTag } from '../../TypeTag';
import style from './style.module.scss';

export interface IPokemonListItem { 
    item: Pokemon;
    className?: string;
    onClick: (selected: Pokemon | null) => void;
}

export const PokemonListItem = ({item, className, onClick}: IPokemonListItem) => { 
    
    const [pokemon, setPokemon] = useState<Pokemon>();

    const getPokemonInfo = async (name: string) => { 
        const data = await fetchPokemonInfo(name);
        console.log(data)
        setPokemon(data);
    }

    useEffect(() => { 
        getPokemonInfo(item.name);
    }, [])

    return ( 
        <div onClick={() => onClick(pokemon ?? null)} className={className ?? style.listItem}>
            <div className={style.iconBox}>
                <img src={pokemon && pokemon.sprites.front_default} className={style.icon}/>
            </div>
            <div className={style.nameAndNumber}>
                <span>{pokemon && formatPokemonNumber(pokemon.id)}</span>
                <span className={style.nameText}>{pokemon && capitalize(pokemon.name)}</span>
            </div>
            <div className={style.typesBox}>
                {pokemon?.types.map((type) => ( 
                    <TypeTag type={capitalize(type.type.name)}/>
                ))}
            </div>
        </div>
    )
}