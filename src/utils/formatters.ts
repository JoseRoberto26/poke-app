export const capitalize = ( text: string) => { 
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export const generationNameFormatter = (text: string) => { 
    return capitalize(text.split('-')[0]) + ' ' +  text.split('-')[1].toUpperCase();
}

export const formatPokemonNumber = (num: number) => { 
    return `${num < 10 ? `00${num}` : num < 100 ? `0${num}`: num}`;
}