import { Generation } from '../../models/generation';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { capitalize, generationNameFormatter } from '../../utils/formatters';
import { fetchGenerationInfo } from '../../services/generationService';
import style from  './style.module.scss';
import { Info } from '../../components/LabelWithValue';
import { TypeTag } from '../../components/TypeTag';
import { PokemonList } from '../../components/PokemonList';

export const GenerationDetails = () => { 
    const history = useHistory();
    const params: any = useParams();
    const [loading, setLoading] = useState(true);
    const [generationInfo, setGenerationInfo] = useState<Generation | null>(null);



    useEffect(() => { 
        getGenerationInfo(params.id);
    }, [])

    const getGenerationInfo = async (id: number) => { 
        setLoading(true);
        const data = await fetchGenerationInfo(id);
        data.pokemon_species = data.pokemon_species.sort((a: any,b: any) => {
            return a.url.split('/')[6] - b.url.split('/')[6];
        });
        setGenerationInfo(data);
        setLoading(false);
    }

    return ( 
        <div className={style.mainContainer}>
            {generationInfo && generationInfo.version_groups.length > 0 && ( 
                <section className={style.gameCoverSection}>
                    <div className={style.gamesBox}>
                        {generationInfo.version_groups.map((versionGroup) => (
                            <img className={style.gameCoverImg} key={versionGroup.name} src={`../../assets/imgs/${versionGroup.name}.jpg`}/>
                        ))}
                    </div>
                </section>
            )}
            
            <section className={style.textInfoSection}>
                <div className={style.infoTextBox}>
                    <Info value={generationInfo?.main_region.name ?? '-'} label='Main region'/>
                    <Info value={generationInfo?.pokemon_species.length.toString() ?? '0'} label='New Pokemon'/>
                </div>
            </section>
            {generationInfo && generationInfo.types.length > 0 && (
                <section className={style.typesSection}>
                    <label>New types:</label>
                    <div className={style.typesBox}>
                     {generationInfo.types.map((type) => (
                         <TypeTag key={type.name} type={capitalize(type.name)}/>
                     ))}
                     </div>
                </section> 
            )}

            {generationInfo && generationInfo.pokemon_species.length > 0 && ( 
                <section className={style.pokedexSection}>
                    <label>Pokedex:</label>
                    <PokemonList list={generationInfo.pokemon_species}/>
                </section>
            )}
            
                     
        </div>
    )
}