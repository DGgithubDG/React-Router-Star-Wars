import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const PlanetDetails = () => {
	const { store, actions } = useContext(Context);

	const [person, setPerson] = useState([]);
	function loadAcivity() {
		fetch("https://www.swapi.tech/api/people")
		.then((response) => response.json())
		.then((data) => setPerson(data.results));
	}
	//console.log("data" , data)
console.log(person)
	useEffect(() => {loadAcivity()},[]);
	return (
		<div className="text-center">
			 {person[0]?.name} 
			<li>{store.denisKey}</li>
				<button className="btn btn-success" onClick={() => actions.denisAction("Of course i can do this shit")}>click</button>
		</div>
	);
};

