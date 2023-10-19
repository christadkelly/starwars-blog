const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			getAPI: async (url) => {
				try {
					const response = await fetch(url);
					const apiResponse = await response.json();
					const apiCharacters = apiResponse.results;
					apiCharacters.map(async(character, index) => {
						try{
							const resp = await fetch(character.url)
							const newResp = await resp.json()
							const newCharacter = newResp.result.properties
							const currentCharacters = getStore().characters
							const tempCharacters = currentCharacters.toSpliced(index, 0, newCharacter)
							setStore({characters: tempCharacters})
						}catch(error){
							console.log('mapping', error)
						}
					})
				} catch(error){
					console.log('error', error)
				}
			},
			getCharacters: async () => {
				const url = `https://www.swapi.tech/api/people`;
				getActions().getAPI(url);
			}
		}
	};
};

export default getState;
