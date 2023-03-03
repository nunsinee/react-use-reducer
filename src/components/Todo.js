import React from "react";
import { ACTIONS } from "../App";
import styles from "./Todo.module.css";
import Button from "./UI/Button";

const Todo = ({ todo, dispatch }) => {
	return (
		<div className={styles.todos}>
			<span
				style={{
					color: todo.complete ? "grey" : "blue",
				}}
			>
				{todo.name}
			</span>
			<Button
				style={{ backgroundColor: "blue" }}
				onClick={() =>
					dispatch({
						type: ACTIONS.TOGGLE_TODO,
						payload: { id: todo.id },
					})
				}
			>
				Toggle
			</Button>
			<Button
				style={{ backgroundColor: "red" }}
				onClick={() =>
					dispatch({
						type: ACTIONS.DELETE_TODO,
						payload: { id: todo.id },
					})
				}
			>
				Delete
			</Button>
		</div>
	);
};

export default Todo;
