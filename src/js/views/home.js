import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const categories = ["people", "planets", "vehicles"];
	const headerCategories = ["Characters", "Planets", "Vehicles"];

	return (
		<div className="container pb-5">
			{categories.map((category, idx) =>{
				return (
					<div className="mb-4">
						<h1 className="text-danger my-3">{headerCategories[idx]}</h1>
						<div className="row flex-row flex-nowrap overflow-auto">
							{store[category].map((item, index) => {
		  					return <Card index={index} key={index} category={category}/>;
							})}
	  					</div>
					</div>	
				)
			})}
		</div>
	  
	);
  };
