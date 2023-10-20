import React, { useContext, useEffect, useState } from "react";
import { Context } from '../store/appContext'
import { useNavigate } from "react-router-dom";

const Card = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [clicked, setClicked] = useState(false)
    const category = props.category;
    const index = props.index;
    const item = store[category][index];
    const favoritesList = [];

    useEffect(() => {
        store.favorites.map((favorite) => {
            favoritesList.push(favorite.name)
        })
        if(favoritesList.includes(item.name)) {
            setClicked(true)
        } else {
            setClicked(false)
        }
    }, [store.favorites])

    const clickHandler = () => {
        navigate(`/${category}/${index}`)
    }
    const favoriteClick = () => {
        actions.addFavorite(category, index)
        setClicked(true)
    }
    const deleteClick = () => {
        actions.deleteFavorite(item)
        setClicked(false)
    }

	return (
        <div className="card mx-2 p-0" style={{width: '18rem'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfYSTMfRq8swN37jSCSqwEzjlzhv5IMINzl_JG3rDz&s" className="card-img-top img-fluid" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">
                    {item.name}
                </h5>
                {category === 'people' ? <p className="card-text">Gender: {item.gender}<br/>Hair Color: {item.hair_color}<br/>Eye Color: {item.eye_color}</p>:
                category === 'planets' ? <p className="card-text">Population: {item.population}<br/> Terrain: {item.terrain}</p>:
                <p className="card-text">Vehicle Class: {item.vehicle_class}<br/>Cost: {item.cost_in_credits} credits</p>}
                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-primary" onClick={clickHandler}>Learn more!</button>
                    <button type="button" className="btn btn-outline-warning" onClick={clicked ? deleteClick : favoriteClick}>
                        {clicked ? <i class="fa-solid fa-heart-circle-check"></i> : <i className="fa-regular fa-heart"></i>}
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Card