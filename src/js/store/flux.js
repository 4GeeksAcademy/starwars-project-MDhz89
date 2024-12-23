const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [], // Aquí almacenaremos los datos de las personas
			vehicles: [], // Aquí almacenaremos los datos de los vehículos
			planets: [], // Aquí almacenaremos los datos de los planetas
			favorites: [] // Aquí almacenaremos los favoritos
		},
		actions: {
			// Usar getActions para llamar a una función dentro de otra
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadPeople: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people");
					const data = await response.json();
					setStore({ people: data.results }); // Almacena los resultados en el store
				} catch (error) {
					console.error("Error fetching people:", error);
				}
			},
			loadVehicles: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/vehicles/");
					const data = await response.json();
					setStore({ vehicles: data.results }); // Almacena los resultados en el store
				} catch (error) {
					console.error("Error fetching vehicles:", error);
				}
			},
			loadPlanets: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/planets/");
					const data = await response.json();
					setStore({ planets: data.results }); // Almacena los resultados en el store
				} catch (error) {
					console.error("Error fetching planets:", error);
				}
			},
			addFavorite: (favorite) => {
				const store = getStore();
			
				// Verifica si ya existe un favorito con el mismo ID (si favorite es un objeto con un ID)
				if (!store.favorites.some(item => item.id === favorite.id)) {
					setStore({ favorites: [...store.favorites, favorite] });
				}
			},
			
			
			removeFavorite: (name) => {
				console.log("name", name);
				
				const store = getStore();
				setStore({ favorites: store.favorites.filter(fav => fav.name !== name) }); // Filtra por nombre
			},
			changeColor: (index, color) => {
				const store = getStore();

				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
