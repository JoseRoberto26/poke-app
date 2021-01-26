import { PokemonType, TypeWithSlot } from "./pokemonType";
import { Sprites } from "./sprites";

export interface Pokemon { 
    id: number;
    order: number;
    name: string;
    sprites: Sprites;
    is_legendary: boolean;
    types: TypeWithSlot[];
    height: number;
    weight: number;
    base_experience: number;
}