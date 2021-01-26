import React from 'react';
import { Pokemon } from '../../models/pokemon';
import style from './style.module.scss';
import Modal from 'react-modal';
import { TypeTag } from '../TypeTag';
import { capitalize, formatPokemonNumber } from '../../utils/formatters';
import { AboutInfoCard } from './AboutInfoCard';
import { PokeBallIcon } from '../PokeballIcon';


Modal.setAppElement('#root')


export interface IPokemonModalProps { 
    pokemon: Pokemon;
    closeModal: () => void;
    showModal: boolean; 
}
	const customStyles = {
		content : {
		  backgroundColor: '#f3f3f3', 
		  maxHeight: '686px',
		  marginRight: '9%',
		  marginLeft: '8%',
		  minWidth: '320px',
		  overflowx: 'hidden',
		  boxShadow: '4px 4px #d4d4d4',
		  background: 'repeating-linear-gradient(to right, transparent 0 calc(112px), black calc(76px + 38px)), repeating-linear-gradient(to bottom, transparent 0 calc(109px), black calc(41px + 70px) 47px) white',
		}
	  };

export const PokemonModal = ({pokemon, closeModal, showModal}: IPokemonModalProps) => { 

    return ( 
        <Modal
        isOpen={showModal}
		onRequestClose={closeModal}
		style={customStyles}		
        >
            <div className={style.modalContainer}>
				<div className={style.modalMenu}>
					<label>Info</label>
					<button onClick={() => closeModal()} className={style.closeButton}>
						<div className={style.x}>X</div>
						BACK</button>
				</div>
				<div className={style.imgsContainer}> 
					<img className={style.sprite} src={pokemon.sprites.front_default} />
					<img className={style.sprite}  src={pokemon.sprites.front_shiny} />
				</div>
				<div className={style.infoContainer}>
					<div className={style.topInfoBox}>
						<PokeBallIcon className={style.pokeballIcon} />
						<label className={style.pokemonNumber}>{formatPokemonNumber(pokemon.id)}</label>
						<label className={style.pokemonName}>{capitalize(pokemon.name)}</label>
					</div>
					<div className={style.midInfoBox}> 
						{pokemon.types.map((type) => (
                         	<TypeTag key={type.type.name} type={capitalize(type.type.name)}/>
                     	))}
					</div>
					<div className={style.bottomInfoBox}>
						<div className={style.redLine}/>
						<div className={style.infos}>
							<AboutInfoCard info={pokemon.height.toString()} label='Height' />
							<AboutInfoCard info={pokemon.weight.toString()} label='Weight' />
						</div>
					</div>
					<div className={style.bottomStatBox}>
						<div className={style.redLine}/>
						<div className={style.infos}>
							{pokemon.stats.map((stat) => (
								<AboutInfoCard info={stat.base_stat.toString()} label={capitalize(stat.stat.name)} />
							))}
						</div>
					</div>
				</div>

            </div>

        </Modal>
    )
}