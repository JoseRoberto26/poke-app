import React from 'react'; 
import { baseURL } from './api';

export const fetchGenerations = async () => { 
    const result = await fetch(`${baseURL}generation`, { 
        method: 'GET', 
    })
    .then(res => res.json())
    .then(res => res.results);
    return result;
}

export const fetchGenerationInfo = async ( id: number) => {
    const result = await fetch(`${baseURL}generation/${id}`, { 
        method: 'GET'
    })
    .then(res => res.json());
    return result

}