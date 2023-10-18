import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
	  <div className="row flex-row flex-nowrap overflow-auto">
		{store.characters.map((item, index) => {
		  return <Card key={index} name={item.name}/>;
		})}
	  </div>
	);
  };
