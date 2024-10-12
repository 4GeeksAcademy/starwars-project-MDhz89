// src/js/views/home.js
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card, Button, Col } from "react-bootstrap";
import { Planets } from "./planets"; // Importar Planets
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPeople(); // Cargar personas al montar el componente
		actions.loadVehicles(); // Cargar vehículos al montar el componente
		actions.loadPlanets(); // Cargar planetas al montar el componente
	}, []); // El arreglo vacío asegura que esto se ejecute solo una vez

	return (
		<div className="text-center mt-5">
			<h2>People:</h2>
			<div className="d-flex flex-row overflow-scroll">
				{store.people && store.people.map((person, index) => (
					<Col key={index} sm={4} className="mb-3">
						<Card>
							<img 
								src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} 
								className="card-img-top card-img-small" 
								alt={person.name} 
								onError={(e) => { 
									e.target.onerror = null; 
									e.target.src = 'https://static.vecteezy.com/system/resources/previews/002/868/090/non_2x/space-background-illustration-for-explore-in-outer-space-vector.jpg'; 
								}} 
							/>
							<Card.Body>
								<Card.Title>{person.name}</Card.Title>
								<Card.Text>
									Birth Year: {person.birth_year}<br />
									Eye Color: {person.eye_color}<br />
									Gender: {person.gender}<br />
									Hair Color: {person.hair_color}<br />
								</Card.Text>
								<Link to={`/detail/people/${index}`}>
									<button type="button" className="btn btn-primary float-start">more info</button>
								</Link>
								<Button
									type="button" className="btn btn-warning float-end"
									variant="primary"
									onClick={() => actions.addFavorite({ id: person.url.split('/').pop(), ...person })}
								>
									<i className="fa fa-heart"></i>
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</div>

			<h2 className="mt-5">Vehicles:</h2>
			<div className="d-flex flex-row overflow-scroll">
				{store.vehicles && store.vehicles.map((vehicle, index) => (
					<Col key={index} sm={4} className="mb-3">
						<Card>
							<img 
								src={`https://starwars-visualguide.com/assets/img/vehicles/${index}.jpg`} 
								className="card-img-top card-img-small" 
								alt={vehicle.name} 
								onError={(e) => { 
									e.target.onerror = null; 
									e.target.src = 'https://static.vecteezy.com/system/resources/previews/002/868/090/non_2x/space-background-illustration-for-explore-in-outer-space-vector.jpg'; 
								}} 
							/>
							<Card.Body>
								<Card.Title>{vehicle.name}</Card.Title>
								<Card.Text>
									Model: {vehicle.model}<br />
									Class: {vehicle.vehicle_class}<br />
									Manufacturer: {vehicle.manufacturer}<br />
									Cost: {vehicle.cost_in_credits} credits
								</Card.Text>
								<Link to={`/detail/vehicle/${index}`}>
									<button type="button" className="btn btn-primary">more info</button>
								</Link>
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

			<h2 className="mt-5">Planets:</h2>
			<div className="d-flex flex-row overflow-scroll">
				{store.planets && store.planets.map((planet, index) => (
					<Col key={index} sm={4} className="mb-3">
						<Card>
						    <img 
								src={`https://starwars-visualguide.com/assets/img/planets/${index}.jpg`} 
								className="card-img-top card-img-small" 
								alt={planet.name} 
								onError={(e) => { 
									e.target.onerror = null; 
									e.target.src = 'https://static.vecteezy.com/system/resources/previews/002/868/090/non_2x/space-background-illustration-for-explore-in-outer-space-vector.jpg'; 
								}} 
							/>
							<Card.Body>
								<Card.Title>{planet.name}</Card.Title>
								<Card.Text>
									Diameter: {planet.diameter} km<br />
									Rotation Period: {planet.rotation_period} hours<br />
									Orbital Period: {planet.orbital_period} days<br />
									Gravity: {planet.gravity}<br />

								</Card.Text>
								<Link to={`/detail/planet/${index}`}>
									<button type="button" className="btn btn-primary">more info</button>
								</Link>
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
		</div>
	);
};
