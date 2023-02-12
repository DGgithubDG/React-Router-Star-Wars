import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Characters from "../component/Characters";
import { Planets } from "../component/Planets";
import { Vehicles } from "../component/Vehicles";

export const Home = () => (
	
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<div> <Characters />
		</div>
		<div> <Planets /> </div>
		<div> <Vehicles /> </div>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
