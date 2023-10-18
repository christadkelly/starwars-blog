import React, { useContext } from "react";
import { Context } from '../store/appContext'
import { Link } from "react-router-dom";

const Card = (props) => {

	return (
        <div className="card h-100 mx-1" style={{width: '18rem'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfYSTMfRq8swN37jSCSqwEzjlzhv5IMINzl_JG3rDz&s" className="card-img-top img-fluid" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">
                    {props.name}
                </h5>
                <p className="card-text">
                    Gender:
                    <br></br>
                    Hair Color:
                    <br></br>
                    Eye Color:
                </p>
                <div className="d-flex justify-content-between">
                    {/* <Link to={'/character/'}>
                        <button className="btn btn-outline-primary">Learn more!</button>
                    </ Link> */}
                    <button type="button" className="btn btn-outline-warning">
                        <i className="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Card