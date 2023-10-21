import React, { useContext, useEffect, useState } from "react";
import { Context } from '../store/appContext'
import { useNavigate } from "react-router-dom";
import "../../styles/card.css";

const Card = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [clicked, setClicked] = useState(false)
    const category = props.category;
    const index = props.index;
    const item = store[category][index];
    const favoritesList = [];
    const imgUrl = `https://starwars-visualguide.com/assets/img/${category}/${item.uid}.jpg`;
    const imgError = "https://starwars-visualguide.com/assets/img/placeholder.jpg"

    useEffect(() => {
        store.favorites.map((favorite) => {
            favoritesList.push(favorite.name)
        })
        if(favoritesList.includes(item.properties.name)) {
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
            <img 
            src={imgUrl} 
            className="card-img-top img-fluid" 
            onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = imgError
            }}/>
            <div className="card-body">
                <h5 className="card-title">
                    {item.properties.name}
                </h5>
                {category === 'characters' ? <p className="card-text">Gender: {item.properties.gender}<br/>Hair Color: {item.properties.hair_color}<br/>Eye Color: {item.properties.eye_color}</p>:
                category === 'characters' ? <p className="card-text">Population: {item.properties.population}<br/> Terrain: {item.properties.terrain}</p>:
                <p className="card-text">Vehicle Class: {item.properties.vehicle_class}<br/>Cost: {item.properties.cost_in_credits} credits</p>}
            </div>
            <div className="card-footer">
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