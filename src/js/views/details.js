import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

export const Details = () => {
	const { store, actions } = useContext(Context);
    const { index, category } = useParams();
    console.log(category)
    
	return (
		<div className="container">
             <div className="row">
                <div className="col-6">
                    <img 
                    className="img-fluid"
                    src="https://www.bakiautomobile.com/wp-content/uploads/2020/06/800x600.png"/>
                </div>
                <div className="col-6 text-center">
                    <h1>{store.characters[index].name}</h1>
                    <p>sdlkfjsdklfkj</p>
                </div>
            </div>
            {/* {category === 'characters' ? <p className="card-text">Gender: {item.gender}<br/>Hair Color: {item.hair_color}<br/>Eye Color: {item.eye_color}</p>:
                category === 'planets' ? <p className="card-text">Population: <br/> Terrain: </p>:
                <p className="card-text">Vehicle Class: <br/>Cost: credits</p>} */}
            <hr className="text-danger"></hr>
            {category ==='characters' ?  <div className="row text-center fw-bold text-danger">
                <div className="col-2">Birth Year</div>
                <div className="col-2">Gender</div>
                <div className="col-2">Height</div>
                <div className="col-2">Hair</div>
                <div className="col-2">Skin Color</div>
                <div className="col-2">Eye Color</div>
            </div>:
            <div className="row text-center fw-bold text-danger">
                <div className="col-2">Population</div>
                <div className="col-2">Terrain</div>
                <div className="col-2">Climate</div>
                <div className="col-2">Gravity</div>
                <div className="col-2">Orbital Period</div>
                <div className="col-2">Rotation Period</div>
            </div>}
            {/* <div className="row text-center fw-bold text-danger">
                <div className="col-2"> Birth Year</div>
                <div className="col-2"> Gender</div>
                <div className="col-2">Height</div>
                <div className="col-2">Hair</div>
                <div className="col-2">Skin Color</div>
                <div className="col-2">Eye Color</div>
            </div> */}
            <div className="row text-center text-danger">
                <div className="col-2">{store.characters[index].birth_year}</div>
                <div className="col-2">{store.characters[index].gender}</div>
                <div className="col-2">{store.characters[index].height}</div>
                <div className="col-2">{store.characters[index].hair_color}</div>
                <div className="col-2">{store.characters[index].skin_color}</div>
                <div className="col-2">{store.characters[index].eye_color}</div>
            </div>
        </div>
	  
	);
  };
