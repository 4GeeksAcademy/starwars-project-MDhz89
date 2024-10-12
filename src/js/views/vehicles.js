// src/js/views/Vehicles.js
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card, Button, Row, Col } from "react-bootstrap";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadVehicles(); // Cargar vehículos al montar el componente
	}, []);

	console.log("store", store);
	console.log("vehicles", store.vehicles);
	

	return (
		<div className="d-flex flex-row overflow-scroll">
			{store.vehicles && store.vehicles.map((vehicle, index) => (
				<Col key={index} sm={4} className="mb-3">
					<Card>
						<Card.Body>
							<Card.Title>{vehicle.name}</Card.Title>
							<p>Model: {vehicle.model}</p>
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
	);
};
