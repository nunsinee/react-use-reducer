import React, { useReducer } from "react";
import "./App.css";

const reducerFn = (state, action) => {
	if (action.type === "increment_age") {
		return { age: state.age + 1 };
	}
	throw Error("Unknown function");
};

const App = () => {
	const [state, dispatch] = useReducer(reducerFn, { age: 42 });

	return (
		<>
			<button onClick={() => dispatch({ type: "increment_age" })}>
				Increment age
			</button>
			<p>Hello You are {state.age}</p>
		</>
	);
};

export default App;
