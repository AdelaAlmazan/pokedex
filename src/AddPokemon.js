import React from "react";
import './App.css';
import { GiCancel } from "react-icons/gi";
import { useState } from "react";
const AddPokemon = (props) => {

    const [body, setBody] = useState({
        name: "",
        abilities: "",
        base_experience: ""



    })

    const handleChange = (e) => {
        setBody({
            ...body,
            [e.target.name]: e.target.value,
        });
        console.log(body);
    };

    return (




        <div className={`main-addPokemon ${props.view && "main-addPokemon-view"}`}>

            <div className="form-main-addPokemon">
                <div className="main-form-pokemon">
                    <label className="title-addPokemon">Nombre</label>
                    <br />
                    <input
                        className="input-addPokemon"
                        onChange={handleChange}
                        value={body.name}
                        name={"name"}
                    />
                    <br />
                    <br /><br />
                    <label className="title-addPokemon">Habilidad</label>
                    <br />
                    <input
                        className="input-addPokemon"
                        onChange={handleChange}
                        value={body.abilities}
                        name="abilities"
                    />
                    <br />
                    <br /><br />
                    <label className="title-addPokemon">Experiencia</label>
                    <br />
                    <input
                        value={body.base_experience}
                        name={'base_experience'}
                        className="input-addPokemon"
                        onChange={handleChange}
                    />
                    <button
                        className="btn-AddPokemon">
                        Agregar
                    </button>
                </div>
            </div>
            <div className="btnCancel-pokemon"><GiCancel
                onClick={props.ClosePokemon}

            /></div>
        </div>

    )





}

export default AddPokemon;