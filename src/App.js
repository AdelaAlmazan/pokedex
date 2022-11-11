import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InfoPokemon from './infoPokemon';
import AddPokemon from './AddPokemon';
import { Divider, notification } from "antd";
import "antd/dist/antd.css";
const openNotificationWithIcon = (type, text, message) => {
  notification[type]({
    message: message,
    description: text + ".",
  });
};



const App = () => {

  const Url = "https://pokeapi.co/api/v2/pokemon/";
  let [dataA, setDataA] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState();
  const [nameBtn, setNameBtn] = useState(false);
  const [viewAdd, setViewAdd] = useState(false);
  const [long, setLong] =useState(true);
  const getPokemon = async () => {
    await axios
      .get(Url)
      .then((response) => {
        setDataA(response.data.results);
        console.log(response.data.results)

      })
      .catch((error) => {
        console.log(error);
        openNotificationWithIcon(
          "error",
          "ocurrio un error al cargar los registros",
          "Error"
        )
      });
  };

  const longL = (n) =>{

  if(n.length == 0){
    setLong(false);

  } else{
    long(true);
  }
 
  
  }

  useEffect(() => {
    getPokemon();
    
  }, []);


  const resetBtn = () => {
    getPokemon();
    setNameBtn(false)
    setLong(true);
  }


  const BuscarPokemon = () => {
    setNameBtn(true);
    console.log("nombre a buscar" + searchPokemon)
    let nueva = dataA.filter(name => (name['name'].toLowerCase().includes(searchPokemon.toLowerCase())) ||
      (name['name'].includes(searchPokemon.toLocaleUpperCase())))
    console.log(searchPokemon.toLocaleLowerCase())
    setDataA(nueva)
  
    longL(nueva);

  }
  const handleName = (e) => {

    setSearchPokemon(e.target.value)
    console.log(searchPokemon)
  }

  const addPokemon = () => {
    setViewAdd(true);
  }
  const ClosePokemon = () => {
    setViewAdd(false)
  }


  return (
    <div className="App">
      <div className="Header">
        POKEDEX

        <button className='view-addPokemon'
          onClick={addPokemon}

        >Agregar</button>
      </div>



      <div className='main-pokedex'>
        <div className='div-search-pokedex'>
          <input
            onChange={handleName}
            placeholder='Pokemon'
            className="search-pokedex"
            disabled={nameBtn}
            
            >
          </input>
          <button
            onClick={nameBtn ? resetBtn : BuscarPokemon}
            className=
            {`btn-search-pokedex ${nameBtn && "btn-search-pokedex-cancel"}`}>
            {nameBtn ? 'Cancelar' : 'Buscar'}
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
            <div
            className='div-noRecords'
            >No hay registros</div>
        }





      </div>

      <AddPokemon
        view={viewAdd}
        ClosePokemon={ClosePokemon}
      />
    </div>
  );
}

export default App;


