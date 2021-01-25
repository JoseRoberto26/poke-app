import { Generation } from '../../models/generation';
import React, { useEffect, useState } from 'react';
import './style.scss';
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
        <main className={'mainContainer'}>
            <section className={'textSection'}>
                <h1 className={animateText ? 'fade-in-animation' : undefined}>Lorem ipsum </h1>
                <h2 className={animateText ? 'fade-in-animation-with-delay' : undefined}>dolor sit amet</h2>
                <h2 className={animateText ? 'fade-in-animation-with-delay' : undefined}>consectetur adipiscing elit,</h2>
            </section>
            <section className={'genCardsSection'}>
                {genList.map((gen, index) => (
                    <SmallCard onClick={() => handleClick(index+1)} key={gen.name} title={generationNameFormatter(gen.name)} />
                ))}
            </section>
        </main>
        
        </>
    )
}