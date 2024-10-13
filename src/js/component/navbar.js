// src/js/components/Navbar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown } from "react-bootstrap";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Starwars API</span>
			</Link>
			<div className="ml-auto">
				{/* <Link to="/people">
					<button className="btn btn-primary">People</button>
				</Link>
				<Link to="/vehicles">
					<button className="btn btn-primary">Vehicles</button>
				</Link>
				<Link to="/planets">
					<button className="btn btn-primary">Planets</button>
				</Link> */}
				{/* <Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link> */}
				<Dropdown className="ml-2">
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Favorites
					</Dropdown.Toggle>

					<Dropdown.Menu>
						{store.favorites.length > 0 ? (
							store.favorites.map((favorite, index) => (
								<Dropdown.Item key={index} className="d-flex justify-content-between align-items-center">
									<span>{favorite.name}</span>
									<i 
										className="" 
										onClick={() => actions.removeFavorite(favorite.id)}
										style={{ cursor: "pointer", color: "red" }}
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
