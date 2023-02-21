import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import Characters from "../component/characters";
import Planets from "../component/planets";
import Vehicles from "../component/vehicles";

export const Home = () => (
	<div className="container-fluid mt-5">
		<h1 className=" ms-5 mb-3">Characters</h1>
		<div className="mx-auto" style={{ width: "100%"}}>
			<Characters />
		</div>
		<h1 className=" ms-5 mb-3 mt-4">Planets</h1>
		<div className="mx-auto" style={{ width: "100%"}}>
			<Planets />
		</div>
		<h1 className=" ms-5 mb-3 mt-4">Vehicles</h1>
		<div className="mx-auto" style={{ width: "100%"}}>
			<Vehicles />
		</div>
	</div>
);
