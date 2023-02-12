import React, { useState, useEffect, useContext } from "react";

import { Link } from "react-router-dom";


export const Planets = () => {
   const [inputValue,setInputValue] = useState("");
	 const [favorites, setFavorites] = useState([]);
	return (
	
    <div className="container">
    
   
  <div class="card-body">
    
    <h5 class="card-title">Planets</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/PlanetDetails">
				<span className="btn btn-primary">Planets Details</span>
			</Link>

      <ul>
    
        <button
         type="button" className="btn btn-success"
        onClick={(e) => setInputValue(e.target.value)}
       // value={inputValue}
        onKeyPress ={(e) => {
          if (e.key === "Enter") {
          setFavorites(favorites.concat([inputValue]));
          setInputValue("");
        }
      }}
        ></button>
      
      {favorites.map((item,index) => (
        <li>
          {item} 
          <i 
          
          class="fas fa-trash-alt"
           onClick={() => 
           setFavorites(
            favorites.filter(
              (t, currentIndex) => 
              index != currentIndex
              )
              )
              }></i>
        </li>
      ))}
    </ul>
    <div> {favorites.length} favorites</div>

  </div>
  </div>

	);
};
