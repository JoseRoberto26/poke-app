import { Generation } from '../../models/generation';
import React, { useEffect, useState } from 'react';
import style from './style.module.scss';
import { fetchGenerations } from '../../services/generationService';
import { SmallCard } from '../../components/SmallCard';
import { generationNameFormatter } from '../../utils/formatters';
import { useHistory } from 'react-router-dom';


export const Home = () => { 

    const [genList, setGenList] = useState<Generation[]>([])
    const [loading, setLoading] = useState(true);
    const [animateText, setAnimateText] = useState(true);
    const history = useHistory();
   
    const getGenerations = async () => {
        setLoading(true);
        const data = await fetchGenerations();
        setGenList([...data]);
        setLoading(false)
    }

    const setAnimations = () => { 
        if(sessionStorage.getItem('hasAnimated')){ 
            setAnimateText(false);
            return;
        }
        setAnimateText(true);
        setTimeout(() => { 
            sessionStorage.setItem('hasAnimated', 'true');
        }, 1200)
    }

    const handleClick = (id: number) => { 
        history.push(`generation/${id}`);
    }

    useEffect(() => {
        setAnimations();
        getGenerations();
    }, [animateText])

    return (
        <>
        <main className={style.mainContainer}>
            <section className={style.textSection}>
                <h1 className={animateText ? 'fade-in-animation' : undefined}>Welcome to PokeApp! </h1>
                <h2 className={animateText ? 'fade-in-animation-with-delay' : undefined}>Select one of the pokemon universe generation below to know more about them!</h2>
            </section>
            <section className={style.genCardsSection}>
                {genList.map((gen, index) => (
                    <SmallCard index={index} onClick={() => handleClick(index+1)} key={gen.name} title={generationNameFormatter(gen.name)} />
                ))}
            </section>
        </main>
        
        </>
    )
}