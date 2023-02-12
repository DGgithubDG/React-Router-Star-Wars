import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Vehicles = () => {
	return (
	
  
  <div class="card-body">
    <h5 class="card-title">Vehicles</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/VehicleDetails">
				<span className="btn btn-primary">Vehicle Details</span>
			</Link>

  </div>

	);
};
