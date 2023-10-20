import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			state.actions.getData();
		}, []);

		// useEffect(() => {
		// 	localStorage.setItem('people', JSON.stringify(state.store.people));
		// 	localStorage.setItem('planets', JSON.stringify(state.store.planets));
		// 	localStorage.setItem('vehicles', JSON.stringify(state.store.vehicles))
		// }, [state.store.people, state.store.planets, state.store.vehicles]);

		// useEffect(() => {
		// 	localStorage.setItem('favorites', JSON.stringify(state.store.favorites))
		// }, [state.store.favorites])

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
