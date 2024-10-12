import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detail = () => {
    const { store } = useContext(Context);
    const { type, id } = useParams(); // Obtenemos el tipo y el id desde los parámetros

    let idNum = parseInt(id, 10) + 1;
    let image;
    let datosObjeto;
    let item;
    switch (type) {
        case "vehicle":
            item = store.vehicles[id]; // Accede al starship correspondiente
            image = `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;
            datosObjeto = {name: item.name, created: item.created};
            datosObjeto.valor1 = "Velocidad maxima: " + item.max_atmosphering_speed;
            datosObjeto.valor2 = "passengers: "+ item.passengers; 
            datosObjeto.valor3 = "cargo_capacity: " +item.cargo_capacity
            datosObjeto.valor4 = "consumables: "+item.consumables
            datosObjeto.valor5 = "cost_in_credits: "+item.cost_in_credits;
            break;
        case "people":
            item = store.people[id]; // Accede a la persona correspondiente
            image = `https://starwars-visualguide.com/assets/img/characters/${idNum}.jpg`;
            datosObjeto = {name: item.name, created: item.created};
            datosObjeto.valor1 = "birth_year: "+item.birth_year;
            datosObjeto.valor2 = "edited: "+item.edited;
            datosObjeto.valor3 = "mass: "+item.mass;
            datosObjeto.valor4 = "films: "+item.films;
            datosObjeto.valor5 = "starships: "+item.starships;
            break;
        case "planet":
            item = store.planets[id]; // Accede al planeta correspondiente
            image = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
            datosObjeto = {name: item.name, created: item.created};
            datosObjeto.valor1 = "climate: "+item.climate;
            datosObjeto.valor2 = "diameter: "+item.diameter;
            datosObjeto.valor3 = "orbital_period: "+item.orbital_period;
            datosObjeto.valor4 = "surface:water: "+item.surface_water;
            datosObjeto.valor5 = "terrain: "+item.terrain;
         break;
            
            default:
            return <div>No encontrado</div>;
    }
    console.log("tipo de dato id", typeof(id));

    console.log("datos del objeto: ", item);
    if (!item) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="jumbotron">
            <img 
                src={image} 
                className="card-img-top" 
                alt={item.name} 
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://static.vecteezy.com/system/resources/previews/002/868/090/non_2x/space-background-illustration-for-explore-in-outer-space-vector.jpg'; }} 
            />
            <h1 className="display-4">{item.title || item.name}</h1>
            <p>Darth Vader, originalmente conocido como Anakin Skywalker, es uno de los personajes más emblemáticos del universo de Star Wars. Nacido en el planeta Tatooine, Anakin fue identificado desde joven como un prodigio de la Fuerza, con un potencial extraordinario que sorprendió incluso a los Jedi más experimentados. Fue entrenado por Obi-Wan Kenobi, quien lo consideraba como un hermano y un futuro salvador de la galaxia.

                Sin embargo, la vida de Anakin dio un giro oscuro. Manipulado por el emperador Palpatine, sucumbió al lado oscuro de la Fuerza, convirtiéndose en Darth Vader, un oscuro y temido Sith. Su imponente figura, con una armadura negra y un casco distintivo, se convirtió en símbolo de opresión en la galaxia. Vader es conocido por su poderosa habilidad en combate, así como por su dominio de la Fuerza, que utiliza para instigar miedo y control. </p>
                <p>{item.results}i</p>
            <h1>{datosObjeto.valor1}</h1>
            <h1>{datosObjeto.valor2}</h1>
            <h1>{datosObjeto.valor3}</h1>
            <h1>{datosObjeto.valor4}</h1>
            <h1>{datosObjeto.valor5}</h1>
            <hr className="my-4" />

            
        </div>
    );
};