// src/js/views/home.js
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card, Button, Col } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPeople(); // Cargar personas al montar el componente
		actions.loadVehicles(); // Cargar vehículos al montar el componente
	}, []); // El arreglo vacío asegura que esto se ejecute solo una vez

	return (
		<div className="text-center mt-5">
			<h2>People from SWAPI:</h2>
			<div className="d-flex flex-row overflow-scroll">
				{store.people && store.people.map((person, index) => (
					<Col key={index} sm={4} className="mb-3">
						<Card>
							<Card.Body>
								<Card.Title>{person.name}</Card.Title>
								<Card.Text>
									Birth Year: {person.birth_year}
								</Card.Text>
								<Button
									variant="primary"
									onClick={() => actions.addFavorite({ id: person.url.split('/').pop(), ...person })}
								>
									Add to Favorites
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</div>

			<h2 className="mt-5">Vehicles from SWAPI:</h2>
			<div className="d-flex flex-row overflow-scroll">
				{store.vehicles && store.vehicles.map((vehicle, index) => (
					<Col key={index} sm={4} className="mb-3">
						<Card>
							<Card.Body>
								<Card.Title>{vehicle.name}</Card.Title>
								<Card.Text>
									Model: {vehicle.model}<br />
									Class: {vehicle.vehicle_class}<br />
									Manufacturer: {vehicle.manufacturer}<br />
									Cost: {vehicle.cost_in_credits} credits
								</Card.Text>
								<Button
									variant="primary"
									onClick={() => actions.addFavorite({ id: vehicle.url.split('/').pop(), ...vehicle })}
								>
									Add to Favorites
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</div>
		</div>
	);
};
