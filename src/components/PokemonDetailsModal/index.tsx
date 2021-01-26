import React from 'react';
import { Pokemon } from '../../models/pokemon';
import style from './style.module.scss';
import Modal from 'react-modal';
import { TypeTag } from '../TypeTag';
import { capitalize, formatPokemonNumber } from '../../utils/formatters';
import { AboutInfoCard } from './AboutInfoCard';

export interface IPokemonModalProps { 
    pokemon: Pokemon;
    closeModal: () => void;
    showModal: boolean; 
}
	const customStyles = {
		content : {
		  backgroundColor: '#f3f3f3', 
		  maxHeight: '571px',
		  marginRight: '9%',
		  marginLeft: '8%',
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
				<div className={style.imgsContainer}> 
					<img className={style.sprite} src={pokemon.sprites.front_default} />
					<img className={style.sprite}  src={pokemon.sprites.front_shiny} />
				</div>
				<div className={style.infoContainer}>
					<div className={style.topInfoBox}>
						<img className={style.pokeballIcon} src={require('../../assets/icons/pokeball_icon.png').default}/>
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
				</div>

            </div>

        </Modal>
    )
}