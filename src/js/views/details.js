import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const Details = () => {
	const { store, actions } = useContext(Context);
    const { index, category } = useParams();
    const item = store[category][index];
    console.log(item)
    
	return (
		<div className="container">
             <div className="row">
                <div className="col-6">
                    <img 
                    className="img-fluid"
                    src="https://www.bakiautomobile.com/wp-content/uploads/2020/06/800x600.png"/>
                </div>
                <div className="col-6 text-center">
                    <h1>{item.name}</h1>
                    <p>sdlkfjsdklfkj</p>
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
                <div className="col-2">{item.birth_year}</div>
                <div className="col-2">{item.gender}</div>
                <div className="col-2">{item.height}</div>
                <div className="col-2">{item.hair_color}</div>
                <div className="col-2">{item.skin_color}</div>
                <div className="col-2">{item.eye_color}</div>
            </div>:
            category === 'planets' ? <div className="row text-center text-danger">
                <div className="col-2">{item.population}</div>
                <div className="col-2">{item.terrain}</div>
                <div className="col-2">{item.climate}</div>
                <div className="col-2">{item.gravity}</div>
                <div className="col-2">{item.orbital_period}</div>
                <div className="col-2">{item.rotation_period}</div>
            </div>:
            <div className="row text-center text-danger">
                <div className="col-2">{item.vehicle_class}</div>
                <div className="col-2">{item.crew}</div>
                <div className="col-2">{item.length}</div>
                <div className="col-2">{item.max_atmosphering_speed} kph</div>
                <div className="col-2">{item.manufacturer}</div>
                <div className="col-2">{item.cost_in_credits} credits</div>
            </div>}
        </div>
	);
  };
