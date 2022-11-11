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
                // console.log(response.data)
                console.log(response.data.sprites)
                // console.log(response.data.sprites.back_default)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getPokemon();
    }, []);

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
                <div className='tittle-pokemon'>Nombre Pokemon</div>
                <div className='info-pokemon'> {props.name}</div>
                <br />
                <div className='tittle-pokemon'>Habilidad</div>
                <div className='info-pokemon'> {dataA.name}</div>
                <br />
                <div className='tittle-pokemon'>Experiencia</div>
                <div className='info-pokemon'> {dataC.base_experience}</div>

            </div>
        </div >

    )


}
export default InfoPokemon;