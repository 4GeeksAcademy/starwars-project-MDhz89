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
			addFavorite: (favorite) => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, favorite] }); // Agrega a favoritos
			},
			removeFavorite: (id) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(fav => fav.id !== id) }); // Elimina de favoritos
			},
			changeColor: (index, color) => {
				// Obtén el store
				const store = getStore();

				// Debemos recorrer todo el array demo para buscar el índice respectivo
				// y cambiar su color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				// Reinicia el store global
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
