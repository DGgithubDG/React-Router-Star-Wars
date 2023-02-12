import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const Characters = () => {
    const {store, actions} = useContext(Context);

    return(
        <div class="card-body">
        <h5 class="card-title">Characters</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to="/CharacterDetails">
                    <span className="btn btn-primary">Character Details</span>
                </Link>
                <li>store.exampleFunction</li>
    
      </div>
    
    )
};

export default Characters;