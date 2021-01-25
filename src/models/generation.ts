import { Pokemon } from "./pokemon";
import { PokemonType } from "./pokemonType";
import { Region } from "./region";
import { VersionGroup } from "./versionGroups";

export interface Generation { 
    id: number;
    name: string;
    pokemon_species: Pokemon[];
    main_region: Region;
    types: PokemonType[];
    version_groups: VersionGroup[];
    
}