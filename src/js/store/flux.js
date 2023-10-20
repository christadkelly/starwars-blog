const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			getData: async () => {
				console.log(Object.keys(getStore()))
				Object.keys(getStore()).forEach(async(key, idx) => {
					if (key !== 'favorites'){
						try {
							const response = await fetch(`https://www.swapi.tech/api/${key}`);
							const apiResponse = await response.json();
							const apiResults = apiResponse.results;
							apiResults.map(async(item, index) => {
								try{
									const resp = await fetch(item.url)
									const newResp = await resp.json()
									const newItem = newResp.result.properties
									const currentItems = getStore()[key]
									const tempItems = currentItems.toSpliced(index, 0, newItem)
									setStore({ [key] : tempItems})
								}catch(error){
									console.log('mapping', error)
								}
							})
						} catch(error){
							console.log('error', error)
						}
					}
				})
			},
			addFavorite: (category, index) => {
				const list = getStore().favorites;
				const newFavorite = getStore()[category][index];
				const newFavoriteDetails = {"name": newFavorite.name, "category": category, "index": index }
				const newList = list.toSpliced((list.length-1), 0, newFavoriteDetails)
				setStore({favorites: newList})
			},
			deleteFavorite: (item) => {
				const currentFavorites = getStore().favorites;
				const newFavorites = currentFavorites.filter((favorite) => item.name != favorite.name);
				setStore({favorites: newFavorites});
			}
		}
	};
};

export default getState;
