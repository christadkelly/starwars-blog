import React, { useContext } from "react";
import { Context } from '../store/appContext'
import { useNavigate } from "react-router-dom";

const Card = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const category = props.category;
    const index = props.index;
    const item = store[category][index];
    const clickHandler = () => {
        navigate(`/${category}/${index}`)
    }
    const favoriteClick = () => {
        actions.addFavorite(category, index)
    }

	return (
        <div className="card mx-2" style={{width: '18rem'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfYSTMfRq8swN37jSCSqwEzjlzhv5IMINzl_JG3rDz&s" className="card-img-top img-fluid" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">
                    {item.name}
                </h5>
                {category === 'characters' ? <p className="card-text">Gender: {item.gender}<br/>Hair Color: {item.hair_color}<br/>Eye Color: {item.eye_color}</p>:
                category === 'planets' ? <p className="card-text">Population: <br/> Terrain: </p>:
                <p className="card-text">Vehicle Class: <br/>Cost: credits</p>}
                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-primary" onClick={clickHandler}>Learn more!</button>
                    <button type="button" className="btn btn-outline-warning" onClick={favoriteClick}>
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Card