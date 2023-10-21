import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const Details = () => {
	const { store, actions } = useContext(Context);
    const { index, category } = useParams();
    const item = store[category][index];
    const imgUrl = `https://starwars-visualguide.com/assets/img/${category}/${item.uid}.jpg`
    const imgError = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
    
	return (
		<div className="container">
             <div className="row">
                <div className="col-6">
                    <img 
                    className="img-fluid"
                    src={imgUrl}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = imgError
                    }}/>
                </div>
                <div className="col-6 text-center">
                    <h1>{item.properties.name}</h1>
                    <p>{item.description}</p>
                </div>
            </div>
            <hr className="text-danger"></hr>
            {category ==='characters' ?  <div className="row text-center fw-bold text-danger">
                <div className="col-2">Birth Year</div>
                <div className="col-2">Gender</div>
                <div className="col-2">Height</div>
                <div className="col-2">Hair</div>
                <div className="col-2">Skin Color</div>
                <div className="col-2">Eye Color</div>
            </div>:
            category === 'planets' ? <div className="row text-center fw-bold text-danger">
                <div className="col-2">Population</div>
                <div className="col-2">Terrain</div>
                <div className="col-2">Climate</div>
                <div className="col-2">Gravity</div>
                <div className="col-2">Orbital Period</div>
                <div className="col-2">Rotation Period</div>
            </div>:
            <div className="row text-center fw-bold text-danger">
                <div className="col-2">Vehicle Class</div>
                <div className="col-2">Number of Crew</div>
                <div className="col-2">Vehicle Length</div>
                <div className="col-2">Maximum Speed</div>
                <div className="col-2">Manufacturer</div>
                <div className="col-2">Cost</div>
            </div>}
            {category === 'characters' ? <div className="row text-center text-danger">
                <div className="col-2">{item.properties.birth_year}</div>
                <div className="col-2">{item.properties.gender}</div>
                <div className="col-2">{item.properties.height}</div>
                <div className="col-2">{item.properties.hair_color}</div>
                <div className="col-2">{item.properties.skin_color}</div>
                <div className="col-2">{item.properties.eye_color}</div>
            </div>:
            category === 'planets' ? <div className="row text-center text-danger">
                <div className="col-2">{item.properties.population}</div>
                <div className="col-2">{item.properties.terrain}</div>
                <div className="col-2">{item.properties.climate}</div>
                <div className="col-2">{item.properties.gravity}</div>
                <div className="col-2">{item.properties.orbital_period}</div>
                <div className="col-2">{item.properties.rotation_period}</div>
            </div>:
            <div className="row text-center text-danger">
                <div className="col-2">{item.properties.vehicle_class}</div>
                <div className="col-2">{item.properties.crew}</div>
                <div className="col-2">{item.properties.length}</div>
                <div className="col-2">{item.properties.max_atmosphering_speed} kph</div>
                <div className="col-2">{item.properties.manufacturer}</div>
                <div className="col-2">{item.properties.cost_in_credits} credits</div>
            </div>}
        </div>
	);
  };
