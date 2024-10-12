// src/js/views/People.js
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Card, Button, Row, Col } from "react-bootstrap";

export const People = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPeople();
	}, []);

	return (
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
	);
};
