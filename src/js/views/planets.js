// src/js/views/Planets.js
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card, Button, Col } from "react-bootstrap";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPlanets(); // Cargar planetas al montar el componente
	}, []);

	return (
		<div className="d-flex flex-row overflow-scroll">
			{store.planets && store.planets.map((planet, index) => (
				<Col key={index} sm={4} className="mb-3">
					<Card>
						<Card.Body>
							<Card.Title>{planet.name}</Card.Title>
							<Card.Text>
								Diameter: {planet.diameter} km<br />
								Rotation Period: {planet.rotation_period} hours<br />
								Orbital Period: {planet.orbital_period} days<br />
								Gravity: {planet.gravity}<br />
							</Card.Text>
							<Button
								variant="primary"
								onClick={() => actions.addFavorite({ id: planet.url.split('/').pop(), ...planet })}
							>
								Add to Favorites
							</Button>
						</Card.Body>
					</Card>
				</Col>
			))}
		</div>
	);
};
