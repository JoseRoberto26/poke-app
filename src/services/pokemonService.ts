import { baseURL } from './api';

export const fetchPokemonInfo = async ( name: string) => {
    const result = await fetch(`${baseURL}pokemon/${name}`, { 
        method: 'GET'
    })
    .then(res => res.json());
    return result

}