import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context);

	return (
		<div className="nav">
			<nav className="navbar navbar-dark mb-3">
				<Link to="/">
<div>Star Wars</div>				</Link>

				<div className="btn-group dropstart">
					<button type="button" className="btn btn-outline-light dropdown-toggle me-5" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites <span className="badge bg-dark">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites.map((item,i) => {
						return (
							<li key={i}><a className="dropdown-item d-flex justify-content-between">
								{item} <button className="btn btn-outline-dark border-0 btn-sm" > <i className="fa-solid fa fa-trash" onClick={()=> actions.deleteFavorites(i)}></i></ button>
								</a>
							</li>
							)
						})
						}
					</ul>
				</div>
			</nav>
		</div>
	);
};
