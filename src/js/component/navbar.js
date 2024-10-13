import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown } from "react-bootstrap";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log("Favorite store ",store.favorites);
	
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Starwars API</span>
			</Link>
			<div className="ml-auto">
				<Dropdown className="ml-2">
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Favorites
					</Dropdown.Toggle>

					<Dropdown.Menu>
						{store.favorites.length > 0 ? (
							store.favorites.map((favorite) => (
								<Dropdown.Item key={favorite.id} className="d-flex justify-content-between align-items-center">
									<span>{favorite.name}</span>
									<i 
										className="" 
										onClick={() => actions.removeFavorite(favorite.name)} // Asegúrate de que esto esté correcto
										style={{ cursor: "pointer", color: "red", marginLeft: "10px" }}
									>X</i>
								</Dropdown.Item>
							))
						) : (
							<Dropdown.Item disabled>No favorites added</Dropdown.Item>
						)}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
};
