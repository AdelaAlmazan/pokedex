import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InfoPokemon from './infoPokemon';
import { notification } from "antd";
import { AiOutlineReload } from "react-icons/ai";
import "antd/dist/antd.css";
const openNotificationWithIcon = (type, text, message) => {
    notification[type]({
        message: message,
        description: text + ".",
    });
};



const MainPokemon = () => {

    const Url = "https://pokeapi.co/api/v2/pokemon/";
    let [dataA, setDataA] = useState([]);
    const [searchPokemon, setSearchPokemon] = useState();
    const [long, setLong] = useState(true);
    const getPokemon = async () => {
        setLong(true);
        if (searchPokemon == "") {
            setLong(true);
        } else {
            await axios
                .get(Url)
                .then((response) => {
                    let nueva = (response.data.results).filter(name => (name['name'].toLowerCase().includes(searchPokemon.toLowerCase())) ||
                        (name['name'].includes(searchPokemon.toLocaleUpperCase())))
                    setDataA(nueva)
                    // console.log(dataA)
                    longL(nueva);
                })
                .catch((error) => {
                    console.log(error);
                    openNotificationWithIcon(
                        "error",
                        "ocurrio un error al cargar los registros" + error,
                        "Error"
                    )
                });
        }

    };


    function longL(n) {
        if (n.length == 0) {
            setLong(false);
        } else {
            long(true);
        }
    }
    const handleName = (e) => {
        setSearchPokemon(e.target.value)
        console.log(searchPokemon)
    }

    // useEffect(() => {
    //   getPokemon();
    // }, []);


    const Limpiar = () => {
        setLong(true);
        setSearchPokemon("")
    }
    return (
        <div className="App">
            <div className="Header">
                POKEDEX
            </div>
            <div className='main-pokedex'>
                <div className='div-search-pokedex'>
                    <input
                        onChange={handleName}
                        value={searchPokemon}
                        placeholder='search pokemon by name'
                        className="search-pokedex"
                    >
                    </input>
                    <button
                        onClick={getPokemon}
                        className=
                        'btn-search-pokedex'>
                        {'Buscar'}
                    </button>
                </div>
                {
                    long ?
                        (dataA).map((total) => (
                            <div>
                                <InfoPokemon
                                    name={total.name}
                                    url={total.url}
                                />
                            </div>
                        )) :
                        <div className='div-noRecords'>no records
                            <br />
                            <button
                                onClick={Limpiar}
                                className='btnAgain-pokedex'>
                                Try again
                                <AiOutlineReload />
                            </button>

                        </div>
                }
            </div>
        </div>
    );
}

export default MainPokemon;


