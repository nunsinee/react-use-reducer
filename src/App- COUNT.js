import React, { useReducer } from "react";
import "./App.css";

const ACTIONS = {
	INCREMENT: "INCREMENT",
	DECREMENT: "DECREMENT",
};

const reducerFn = (state, action) => {
	switch (action.type) {
		case ACTIONS.INCREMENT:
			return { count: state.count + 1 };
		case ACTIONS.DECREMENT:
			return { count: state.count - 1 };
		default:
			return state;
	}
};

// const reducerFn = (state, action) => {
// 	switch (action.type) {
// 		case "INCREAMENT":
// 			return { count: state.count + 1 };
// 		case "DECREAMENT":
// 			return { count: state.count - 1 };
// 		default:
// 			return state;
// 	}
// };

const App = () => {
	const [state, dispatch] = useReducer(reducerFn, { count: 0 });
	//const [count, setCount] = useState(0);

	const increaseBtn = (prevCount) => {
		//setCount((prevCount) => prevCount + 1);
		//dispatch({ type: "INCREAMENT" });
		dispatch({ type: ACTIONS.INCREMENT });
	};

	const decreaseBtn = (prevCount) => {
		//setCount((prveCount) => prveCount - 1);
		// dispatch({ type: "DECREAMENT" });
		dispatch({ type: ACTIONS.DECREMENT });
	};

	return (
		<div className="container">
			<h2>Test</h2>
			<button onClick={increaseBtn}>+</button>
			<span>{state.count}</span>
			<button onClick={decreaseBtn}>-</button>
		</div>
	);
};

export default App;
