import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const InfoPokemon = (props) => {
    let [dataA, setDataA] = useState([]);
    let [dataB, setDataB] = useState([]);
    let [dataC, setDataC] = useState([]);


    const getPokemon = async () => {
        await axios
            .get(props.url)
            .then((response) => {
                setDataA(response.data.abilities[0].ability);
                setDataB(response.data.sprites);
                setDataC(response.data);
                console.log(response.data.sprites)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getPokemon();
    });

    return (
        <div className='Pokemon-pokemon'>
            <div className='photo-pokemon'
                style={{
                    backgroundImage: `url(${dataB.front_default
                        })`,
                    backgroundSize: "100%, 100%",
                    backgroundRepeat: "no-repeat"
                }}
            ></div>
            <div className='infoPokemon'>
                <div className='tittle-pokemon'>Name Pokemon</div>
                <div className='info-pokemon'> {props.name}</div>
                <div className='tittle-pokemon'>Ability</div>
                <div className='info-pokemon'> {dataA.name}</div>

                <div className='tittle-pokemon'>Experience</div>
                <div className='info-pokemon'> {dataC.base_experience}</div>

            </div>
        </div >

    )


}
export default InfoPokemon;