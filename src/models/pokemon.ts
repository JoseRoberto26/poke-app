import { PokemonType, TypeWithSlot } from "./pokemonType";
import { Sprites } from "./sprites";
import { Stat } from "./stat";

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
    stats: Stat[];
}