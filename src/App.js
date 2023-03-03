import React, { useReducer, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import Card from "./components/UI/Card";
import Button from "./components/UI/Button";

export const ACTIONS = {
	ADD_TODO: "add-todo",
	TOGGLE_TODO: "toggle-todo",
	DELETE_TODO: "delete-todo",
};

const reducerFn = (todos, action) => {
	switch (action.type) {
		case ACTIONS.ADD_TODO:
			return [...todos, newTodo(action.payload.name)];
		case ACTIONS.TOGGLE_TODO:
			return todos.map((todo) => {
				if (todo.id === action.payload.id) {
					return { ...todo, complete: !todo.complete };
				}
				return todo;
			});

		case ACTIONS.DELETE_TODO:
			return todos.filter((todo) => todo.id !== action.payload.id);

		default:
			return todos;
	}
};

const newTodo = (name) => {
	return { id: Date.now(), name: name, complete: false };
};

const App = () => {
	const [todos, dispatch] = useReducer(reducerFn, []);
	const [name, setName] = useState("");

	const handlerSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
		setName("");
	};

	console.log(todos);

	return (
		<>
			<Card>
				<form onSubmit={handlerSubmit}>
					<label htmlFor="name"></label>
					<input
						className="input"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Button type="submit" style={{ background: "green" }}>
						Add
					</Button>
				</form>
			</Card>
			<Card>
				{todos.map((todo) => {
					return (
						<Todo
							key={todo.id}
							id={todo.id}
							dispatch={dispatch}
							todo={todo}
						/>
					);
				})}
			</Card>
		</>
	);
};

export default App;
