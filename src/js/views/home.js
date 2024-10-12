// src/js/views/home.js
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card, Button, Col } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPeople(); // Cargar personas al montar el componente
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
		</div>
	);
};
